<#
.synopsis
  skill-factory.ps1 — Generador oficial de skills de AI-Skills-Ryu.
  Lee uno o varios catálogos JSON de catalogos/, valida su esquema y genera:
    - skills/<familia>/<stackId>/<stackId>-<temaId>-<nivel>/SKILL.md
    - skills/<familia>/<stackId>/README.md (índice del stack con tabla resumen)
  También valida la biblioteca completa existente (frontmatter, nombres, licencia).

.description
  USO
    .\tools\skill-factory.ps1                      # genera todos los catálogos de catalogos/
    .\tools\skill-factory.ps1 -Catalogos catalogos\08-php.json
    .\tools\skill-factory.ps1 -OnlyValidate        # solo valida skills/ existentes (modo CI)
    .\tools\skill-factory.ps1 -OnlyValidate -Catalogos catalogos\*.json   # valida catálogos sin generar

  ESQUEMA DE CATÁLOGO (JSON)
  {
    "version": "1.0",
    "familia": "08-php",                  # carpeta numerada de skills/<familia>
    "familiaTitulo": "PHP y ecosistema web",
    "icono": "🐘",
    "stacks": [
      {
        "id": "php8-core",                # kebab-case, único
        "nombre": "PHP 8.3: fundamentos profesionales",
        "descripcion": "una frase de valor del stack",
        "stackTecnologias": "PHP 8.3, Composer, php.ini, WAMP, MariaDB",
        "temas": [
          {
            "id": "tipado-strict",        # kebab-case, único dentro del stack
            "nombre": "Tipado fuerte y strict_types",
            "resumen": "qué resuelve este tema en una línea",
            "niveles": {
              "basico":      { "objetivo": "...", "tareas": ["t1","t2","t3"], "criterios": ["c1","c2"], "prompt": "..." },
              "avanzado":    { ... },
              "profesional": { ... }
            }
          }
        ]
      }
    ]
  }
  Claves cortas permitidas: n (nombre), d (descripcion), st (stackTecnologias),
  r (resumen), l (niveles), o (objetivo), t (tareas), c (criterios), p (prompt).

  REGLAS DE NOMBRE: stackId, temaId y niveles deben ser kebab-case y solo
  a-z0-9-h. El frontmatter name generado es <stackId>-<temaId>-<nivel>.

  EXCEPCION DE PATRONES: la familia php-legacy-migracion trabaja POR DISEÑO
  con PHP 5.x (migrar legado), así que el patrón 'php.*5\.[0-9]' no se
  aplica a sus skills (falsos positivos).
#>

param(
    [string[]]$Catalogos,
    [switch]$OnlyValidate,
    [switch]$Quiet
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$skillsDir = Join-Path $root 'skills'
$catalogosDir = Join-Path $root 'catalogos'

function Write-Log { if (-not $Quiet) { Write-Host $args[0] } }
function Write-Warn2 { Write-Host ("WARN: " + $args[0]) -ForegroundColor Yellow }
function Write-Err { Write-Host ("ERROR: " + $args[0]) -ForegroundColor Red }

$kebab = '^[a-z0-9]+(-[a-z0-9]+)*$'
$nivelSlug = @{ 'basico' = 'basico'; 'avanzado' = 'avanzado'; 'profesional' = 'profesional' }
$nivelNombre = @{ 'basico' = 'Básico'; 'avanzado' = 'Avanzado'; 'profesional' = 'Profesional' }
$nivelExplicacion = @{
    'basico'      = 'Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%.'
    'avanzado'    = 'Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales.'
    'profesional' = 'Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados.'
}

# ------------------------------------------------ validación de catálogos

function Assert-Name([string]$v, [string]$what) {
    if ($null -eq $v -or $v -notmatch $kebab) {
        throw "Nombre invalido ($what): '$v'. Debe ser kebab-case [a-z0-9-]."
    }
}

function Get-Resolved([hashtable]$h, [string]$o, [string]$a, [string]$fallback) {
    if ($h.ContainsKey($a)) { return $h[$a] }
    if ($h.ContainsKey($o)) { return $h[$o] }
    return $fallback
}

function Test-Catalog([hashtable]$cat, [hashtable]$ctx) {
    $errs = 0
    $familia = $cat.familia
    if (-not $familia -or $familia -notmatch $kebab) { Write-Err "catálogo sin familia válida"; $errs++ }
    Assert-Name $familia "familia"
    $stacks = $cat.stacks
    if ($null -eq $stacks -or $stacks.Count -eq 0) { Write-Err "catálogo '$familia' sin stacks"; $errs++ }
    foreach ($s in $stacks) {
        try { Assert-Name $s.id "stackId" } catch { Write-Err $_; $errs++; continue }
        if ($null -eq $s.temas -or $s.temas.Count -eq 0) { Write-Err "stack '$($s.id)' sin temas"; $errs++; continue }
        foreach ($t in $s.temas) {
            try { Assert-Name $t.id "temaId" } catch { Write-Err "$($s.id) -> $_"; $errs++; continue }
            if ($null -eq $t.niveles) { Write-Err "tema '$($t.id)' sin niveles"; $errs++; continue }
            foreach ($nl in @('basico', 'avanzado', 'profesional')) {
                if (-not $t.niveles.ContainsKey($nl)) { Write-Err "tema '$($t.id)' sin nivel $nl"; $errs++; continue }
                $n = $t.niveles[$nl]
                if (-not (Get-Resolved $n 'o' 'objetivo' '')) { Write-Err "tema '$($t.id)' nivel $nl sin objetivo"; $errs++ }
                $tareas = Get-Resolved $n 't' 'tareas' @()
                if ($tareas -isnot [array] -or $tareas.Count -lt 3) { Write-Err "tema '$($t.id)' nivel $nl necesita 3+ tareas"; $errs++ }
                $criterios = Get-Resolved $n 'c' 'criterios' @()
                if ($criterios -isnot [array] -or $criterios.Count -lt 2) { Write-Err "tema '$($t.id)' nivel $nl necesita 2+ criterios"; $errs++ }
                if (-not (Get-Resolved $n 'p' 'prompt' '')) { Write-Err "tema '$($t.id)' nivel $nl sin prompt"; $errs++ }
            }
        }
    }
    if ($errs -gt 0) { throw "Catálogo '$familia': $errs error(es) de esquema." }
}

function ConvertTo-Hashtable {
    param([Parameter(ValueFromPipeline)]$o)
    process {
        if ($o -is [System.Management.Automation.PSCustomObject]) {
            $h = @{}
            foreach ($p in $o.PSObject.Properties) { $h[$p.Name] = ConvertTo-Hashtable $p.Value }
            $h
        }
        elseif ($o -is [System.Collections.IEnumerable] -and $o -isnot [string]) {
            @($o | ForEach-Object { ConvertTo-Hashtable $_ })
        }
        else { $o }
    }
}

# ------------------------------------------------ plantilla SKILL.md

function New-SkillMarkdown([hashtable]$ctx, [hashtable]$stack, [hashtable]$tema, [string]$nivel) {
    $nombreBinomio = "$($stack.id)-$($tema.id)-$nivel"
    $nl = $tema.niveles[$nivel]
    $objetivo   = Get-Resolved $nl 'o' 'objetivo' ''
    $tareas     = Get-Resolved $nl 't' 'tareas' @()
    $criterios  = Get-Resolved $nl 'c' 'criterios' @()
    $prompt     = Get-Resolved $nl 'p' 'prompt' ''

    $tareaItems = foreach ($i in 0..($tareas.Count - 1)) { "$($i + 1). $($tareas[$i])" }
    $tareasText = $tareaItems -join "`n"

    $criterioChecks = foreach ($c in $criterios) { "- [ ] $c" }
    $criterioChecksText = $criterioChecks -join "`n"

    $paramRows = @(
        "| `$nivel | $($nivelNombre[$nivel]) | texto | sí | $nivel |",
        "| `$objetivo | $objetivo | texto | sí | resultado medible |",
        "| `$stack | $($stack.nombre) | texto | sí | $($ctx.familia)/$($stack.id) |",
        "| `$tecnologias | $($stack.stackTecnologias) | texto | sí | $($stack.stackTecnologias) |",
        "| `$tareas_clave | $($tareas -join ' · ') | lista | sí | 3-4 pasos |",
        "| `$criterios_clave | $($criterios -join ' · ') | lista | sí | calidad verificable |",
        "| `$prompt_guia | $prompt | texto | no | `"$($tema.nombre)`" |"
    ) -join "`n"

    return @"
---
name: $nombreBinomio
description: $($tema.nombre) · nivel $($nivelNombre[$nivel]) · $($stack.nombre). $($tema.resumen) Objetivo del nivel: $objetivo
license: MIT
compatibility: opencode
metadata:
  familia: "$($ctx.familia)"
  tema: "$($tema.id)"
  nivel: $nivel
  stack: "$($stack.stackTecnologias)"
---

# $($tema.nombre) — $($nivelNombre[$nivel])

## Qué hace este skill

$($tema.resumen) En este nivel se entrega: **$objetivo**.

$($nivelExplicacion[$nivel]) Esta skill se aplica sobre el stack **$($stack.nombre)** ($($stack.stackTecnologias)) y respeta SIEMPRE la calibración de `calibracion-experiencia`: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **$($tema.nombre)** dentro de $($stack.nombre).
- Solo cuando el registro calibrado de la sesión corresponde al nivel **$($nivelNombre[$nivel])** (consulta `calibracion-experiencia` antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión `-basico`, `-avanzado` o `-profesional` adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **$($stack.stackTecnologias)**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

$tareasText

$(($tareas.Count + 1)). Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
$(($tareas.Count + 2)). Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
$paramRows

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es $($nivelNombre[$nivel]), no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
$criterioChecksText

## Ejemplos de prompts

- "$prompt"
- "Aplica $($tema.nombre) (nivel $nivel) a mi trabajo actual con $($stack.nombre): prioriza $($criterios[0])"
- "Revisa mi $($stack.id) y dime qué pasos de $($tema.nombre) me faltan en este nivel"
"@
}

function New-StackReadme([hashtable]$ctx, [hashtable]$stack) {
    $rows = foreach ($t in $stack.temas) {
        $links = foreach ($nl in @('basico', 'avanzado', 'profesional')) {
            $slug = "$($stack.id)-$($t.id)-$nl"
            "[$nl](/$slug/)"
        }
        "| **$($t.nombre)** | $($t.resumen) | $($links -join ' · ') |"
    }
    $rowsText = $rows -join "`n"
    return @"
# $($stack.nombre)

$($stack.descripcion)

**Stack:** $($stack.stackTecnologias) · **Familia:** $($ctx.familiaTitulo) ($($ctx.familia))

| Tema | Resumen | Niveles |
|---|---|---|
$rowsText

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/$($ctx.familia).json](../../catalogos/$($ctx.familia).json).
"@
}

# ------------------------------------------------ generación

function Invoke-Generate([hashtable]$cat) {
    $ctx = @{ familia = $cat.familia; familiaTitulo = $cat.familiaTitulo }
    $famDir = Join-Path $skillsDir $cat.familia
    $generated = 0
    foreach ($s in $cat.stacks) {
        $stackDir = Join-Path $famDir $s.id
        $stackCtx = @{ familia = $cat.familia; familiaTitulo = $cat.familiaTitulo; stack = $s }
        New-Item -ItemType Directory -Path $stackDir -Force | Out-Null
        foreach ($t in $s.temas) {
            foreach ($nl in @('basico', 'avanzado', 'profesional')) {
                $skillDir = Join-Path $stackDir "$($s.id)-$($t.id)-$nl"
                New-Item -ItemType Directory -Path $skillDir -Force | Out-Null
                $md = New-SkillMarkdown $ctx $s $t $nl
                [System.IO.File]::WriteAllText((Join-Path $skillDir 'SKILL.md'), $md, [System.Text.UTF8Encoding]::new($false))
                $generated++
            }
        }
        [System.IO.File]::WriteAllText((Join-Path $stackDir 'README.md'), (New-StackReadme $ctx $s), [System.Text.UTF8Encoding]::new($false))
        Write-Log ("  stack $($cat.familia)/$($s.id): $($s.temas.Count) temas · $($s.temas.Count * 3) skills")
    }
    Write-Log ("Nuevas skills generadas en $($cat.familia): $generated")
    return $generated
}

# ------------------------------------------------ validación de la biblioteca

function Test-Library([string[]]$onlyDirs) {
    $errors = 0
    $dirs = if ($onlyDirs.Count -gt 0) {
        $onlyDirs | ForEach-Object { Get-ChildItem (Join-Path $skillsDir $_) -Recurse -Filter SKILL.md -File -ErrorAction SilentlyContinue | Select-Object -ExpandProperty DirectoryName }
    } else {
        Get-ChildItem $skillsDir -Recurse -Filter SKILL.md -File -ErrorAction SilentlyContinue | Select-Object -ExpandProperty DirectoryName
    }
    $count = 0
    foreach ($d in $dirs) {
        $md = Join-Path $d 'SKILL.md'
        $raw = [System.IO.File]::ReadAllText($md)
        $name = Split-Path $d -Leaf
        $count++
        if ($raw -notmatch '(?m)^name:\s*(\S+)\s*$') { Write-Err "${name}: frontmatter sin name"; $errors++ }
        elseif ($Matches[1] -ne $name) { Write-Err "${name}: frontmatter name '$($Matches[1])' != carpeta '$name'"; $errors++ }
        if ($raw -notmatch '(?m)^description:\s*\S') { Write-Err "${name}: sin descripción"; $errors++ }
        if ($raw -notmatch '(?m)^license:\s*MIT') { Write-Err "${name}: sin license: MIT"; $errors++ }
        if ($raw -notmatch '(?m)^compatibility:\s*opencode') { Write-Err "${name}: sin compatibility: opencode"; $errors++ }
        foreach ($p in @('md5\(', 'sha1\(', 'chmod 777', 'sudo rm -rf', 'DisableRealtimeMonitoring', 'Set-MpPreference', 'sc delete WinDefend', 'desactivar.*protecci', 'mysql.*5\.', 'php.*5\.[0-9]', 'node 16', 'ubuntu.*18\.', 'windows 10', 'lorem ipsum', 'todo: citar', 'xxx: ')) {
            if ($p -eq 'php.*5\.[0-9]' -and $d -match 'php-legacy-migracion') { continue }
            if ($raw -match $p) { Write-Err "${name}: patrón sospechoso '$p'"; $errors++ }
        }
    }
    Write-Log "SKILL.md validados: $count · errores: $errors"
    return $errors
}

# ------------------------------------------------ main

$catalogs = @()
if ($Catalogos.Count -gt 0) {
    foreach ($c in $Catalogos) {
        $resolved = Get-ChildItem -Path $c -ErrorAction Stop
        $catalogs += $resolved
    }
}
else {
    $catalogs = Get-ChildItem $catalogosDir -Filter '*.json' -ErrorAction Stop
}

if ($OnlyValidate) {
    $totalErrors = 0
    foreach ($c in $catalogs) {
        Write-Log "Validando catálogo: $($c.Name)"
        try { Test-Catalog ([System.IO.File]::ReadAllText($c.FullName) | ConvertFrom-Json | ConvertTo-Hashtable) } catch { Write-Err $_; $totalErrors++ }
    }
    $libErrors = Test-Library
    $totalErrors += $libErrors
    if ($totalErrors -gt 0) { Write-Err "Validación completada con $totalErrors error(es)."; exit 1 }
    Write-Log "Validación OK: $($catalogs.Count) catálogos + biblioteca completa."
    exit 0
}

$total = 0
foreach ($c in $catalogs) {
    Write-Log "Procesando catálogo: $($c.Name)"
    $cat = [System.IO.File]::ReadAllText($c.FullName) | ConvertFrom-Json | ConvertTo-Hashtable
    Test-Catalog $cat
    $total += Invoke-Generate $cat
}

$libErrors = Test-Library
if ($libErrors -gt 0) { Write-Err "Biblioteca con errores: $libErrors"; exit 1 }

Write-Log ""
Write-Log "=== RESUMEN DEL FABRICANTE ==="
Write-Log "Nuevas skills generadas esta ejecución: $total"
Write-Log "SKILL.md totales en skills/ (incluye existentes): $((Get-ChildItem $skillsDir -Recurse -Filter SKILL.md -File).Count)"