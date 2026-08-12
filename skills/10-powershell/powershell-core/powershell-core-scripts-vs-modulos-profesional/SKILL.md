---
name: powershell-core-scripts-vs-modulos-profesional
description: Scripts vs módulos · nivel Profesional · PowerShell 7: scripting profesional. Cuándo un script alcanza, cuándo necesitás un módulo y cómo estructurar código compartido. Objetivo del nivel: Ecosistema de módulos: dependencias, carga perezosa y compatibilidad con versiones de PowerShell
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "scripts-vs-modulos"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Scripts vs módulos — Profesional

## Qué hace este skill

Cuándo un script alcanza, cuándo necesitás un módulo y cómo estructurar código compartido. En este nivel se entrega: **Ecosistema de módulos: dependencias, carga perezosa y compatibilidad con versiones de PowerShell**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripts vs módulos** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear dependencias entre módulos sin cargar de más
2. Usar carga perezosa de funciones pesadas
3. Verificar compatibilidad con Windows PowerShell 5.1 y pwsh 7
4. Probar la importación limpia en sesión nueva

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Ecosistema de módulos: dependencias, carga perezosa y compatibilidad con versiones de PowerShell | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Crear dependencias entre módulos sin cargar de más · Usar carga perezosa de funciones pesadas · Verificar compatibilidad con Windows PowerShell 5.1 y pwsh 7 · Probar la importación limpia en sesión nueva | lista | sí | 3-4 pasos |
| $criterios_clave | Un módulo pesado se importa sin demoras notables · La suite funciona en PS 5.1 y pwsh 7 sin parches | lista | sí | calidad verificable |
| $prompt_guia | Mi módulo principal importa otros tres y tarda mucho en arrancar. Quiero carga perezosa, dependencias declaradas y que funcione en PS 5.1 y pwsh 7. ¿Qué estructura me recomendás? | texto | no | "Scripts vs módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un módulo pesado se importa sin demoras notables
- [ ] La suite funciona en PS 5.1 y pwsh 7 sin parches

## Ejemplos de prompts

- "Mi módulo principal importa otros tres y tarda mucho en arrancar. Quiero carga perezosa, dependencias declaradas y que funcione en PS 5.1 y pwsh 7. ¿Qué estructura me recomendás?"
- "Aplica Scripts vs módulos (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Un módulo pesado se importa sin demoras notables"
- "Revisa mi powershell-core y dime qué pasos de Scripts vs módulos me faltan en este nivel"