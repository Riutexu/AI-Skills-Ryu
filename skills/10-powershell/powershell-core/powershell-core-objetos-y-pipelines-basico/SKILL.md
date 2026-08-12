---
name: powershell-core-objetos-y-pipelines-basico
description: Objetos y pipelines · nivel Básico · PowerShell 7: scripting profesional. Pensar en objetos en vez de texto: pipelines, filtrado temprano y salida rica para componer scripts robustos. Objetivo del nivel: Entender que todo es un objeto y usar cmdlets básicos encadenados por pipeline
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "objetos-y-pipelines"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Objetos y pipelines — Básico

## Qué hace este skill

Pensar en objetos en vez de texto: pipelines, filtrado temprano y salida rica para componer scripts robustos. En este nivel se entrega: **Entender que todo es un objeto y usar cmdlets básicos encadenados por pipeline**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Objetos y pipelines** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar procesos con Get-Process y explorar propiedades con Get-Member
2. Encadenar Get-Service y Where-Object para filtrar servicios detenidos
3. Formatear salida con Select-Object y Format-Table
4. Enviar objetos a archivo con Export-Csv

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender que todo es un objeto y usar cmdlets básicos encadenados por pipeline | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Listar procesos con Get-Process y explorar propiedades con Get-Member · Encadenar Get-Service y Where-Object para filtrar servicios detenidos · Formatear salida con Select-Object y Format-Table · Enviar objetos a archivo con Export-Csv | lista | sí | 3-4 pasos |
| $criterios_clave | Sabés explicar qué es un pipeline y por qué no es texto · Filtrás con Where-Object antes de procesar en el pipeline | lista | sí | calidad verificable |
| $prompt_guia | Mostrame con ejemplos cortos cómo funciona el pipeline de PowerShell: quiero ver la diferencia entre pasar texto y pasar objetos entre cmdlets. | texto | no | "Objetos y pipelines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Sabés explicar qué es un pipeline y por qué no es texto
- [ ] Filtrás con Where-Object antes de procesar en el pipeline

## Ejemplos de prompts

- "Mostrame con ejemplos cortos cómo funciona el pipeline de PowerShell: quiero ver la diferencia entre pasar texto y pasar objetos entre cmdlets."
- "Aplica Objetos y pipelines (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Sabés explicar qué es un pipeline y por qué no es texto"
- "Revisa mi powershell-core y dime qué pasos de Objetos y pipelines me faltan en este nivel"