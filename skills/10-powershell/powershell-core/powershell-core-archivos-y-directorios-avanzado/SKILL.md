---
name: powershell-core-archivos-y-directorios-avanzado
description: Archivos y directorios · nivel Avanzado · PowerShell 7: scripting profesional. Get-ChildItem, rutas, lecturas eficientes, filtros y operaciones batch sin sorpresas de permiso. Objetivo del nivel: Procesar árboles de archivos con filtros finos y manejo de permisos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "archivos-y-directorios"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Archivos y directorios — Avanzado

## Qué hace este skill

Get-ChildItem, rutas, lecturas eficientes, filtros y operaciones batch sin sorpresas de permiso. En este nivel se entrega: **Procesar árboles de archivos con filtros finos y manejo de permisos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Archivos y directorios** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Recorrer recursivamente y filtrar por extensión y antigüedad
2. Leer archivos grandes de a líneas con -ReadCount
3. Usar Resolve-Path y Test-Path para rutas relativas seguras
4. Manejar errores de acceso denegado sin abortar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Procesar árboles de archivos con filtros finos y manejo de permisos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Recorrer recursivamente y filtrar por extensión y antigüedad · Leer archivos grandes de a líneas con -ReadCount · Usar Resolve-Path y Test-Path para rutas relativas seguras · Manejar errores de acceso denegado sin abortar | lista | sí | 3-4 pasos |
| $criterios_clave | El procesamiento recursivo no muere ante la primera carpeta sin permiso · Archivos grandes se leen sin consumir toda la RAM | lista | sí | calidad verificable |
| $prompt_guia | Tengo una estructura con miles de archivos y quiero procesar solo los .log de más de 5 días, leyéndolos de a líneas porque algunos pesan mucho. ¿Cómo evito que falle por permisos y que se me llene la memoria? | texto | no | "Archivos y directorios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El procesamiento recursivo no muere ante la primera carpeta sin permiso
- [ ] Archivos grandes se leen sin consumir toda la RAM

## Ejemplos de prompts

- "Tengo una estructura con miles de archivos y quiero procesar solo los .log de más de 5 días, leyéndolos de a líneas porque algunos pesan mucho. ¿Cómo evito que falle por permisos y que se me llene la memoria?"
- "Aplica Archivos y directorios (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza El procesamiento recursivo no muere ante la primera carpeta sin permiso"
- "Revisa mi powershell-core y dime qué pasos de Archivos y directorios me faltan en este nivel"