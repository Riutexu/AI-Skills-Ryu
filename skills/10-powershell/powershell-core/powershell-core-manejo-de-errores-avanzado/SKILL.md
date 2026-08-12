---
name: powershell-core-manejo-de-errores-avanzado
description: Manejo de errores try/catch · nivel Avanzado · PowerShell 7: scripting profesional. Errores terminantes y no terminantes, try/catch/finally, ErrorAction y diagnóstico de fallas. Objetivo del nivel: Clasificar errores por tipo y tomar decisiones según la causa
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "manejo-de-errores"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Manejo de errores try/catch — Avanzado

## Qué hace este skill

Errores terminantes y no terminantes, try/catch/finally, ErrorAction y diagnóstico de fallas. En este nivel se entrega: **Clasificar errores por tipo y tomar decisiones según la causa**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores try/catch** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Capturar tipos de excepción específicos con catch por tipo
2. Reintentar operaciones ante errores transitorios
3. Propagar errores con throw y mensajes contextuales
4. Distinguir error de parámetro de error de ejecución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Clasificar errores por tipo y tomar decisiones según la causa | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Capturar tipos de excepción específicos con catch por tipo · Reintentar operaciones ante errores transitorios · Propagar errores con throw y mensajes contextuales · Distinguir error de parámetro de error de ejecución | lista | sí | 3-4 pasos |
| $criterios_clave | Distintos tipos de falla producen respuestas distintas · Los errores se propagan con contexto para quien llama la función | lista | sí | calidad verificable |
| $prompt_guia | Tengo una función que descarga un archivo y a veces falla por red. Quiero que reintente tres veces ante errores transitorios y que falle distinto si el problema es la URL. Ayudame con el patrón. | texto | no | "Manejo de errores try/catch" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Distintos tipos de falla producen respuestas distintas
- [ ] Los errores se propagan con contexto para quien llama la función

## Ejemplos de prompts

- "Tengo una función que descarga un archivo y a veces falla por red. Quiero que reintente tres veces ante errores transitorios y que falle distinto si el problema es la URL. Ayudame con el patrón."
- "Aplica Manejo de errores try/catch (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Distintos tipos de falla producen respuestas distintas"
- "Revisa mi powershell-core y dime qué pasos de Manejo de errores try/catch me faltan en este nivel"