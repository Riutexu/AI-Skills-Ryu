---
name: powershell-core-arrays-y-hashtables-avanzado
description: Arrays y hashtables · nivel Avanzado · PowerShell 7: scripting profesional. Colecciones: arrays, hashtables, operaciones de colección y patrones de acumulación sin bugs raros. Objetivo del nivel: Usar hashtables como estructuras de datos y técnicas de acumulación eficiente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "arrays-y-hashtables"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Arrays y hashtables — Avanzado

## Qué hace este skill

Colecciones: arrays, hashtables, operaciones de colección y patrones de acumulación sin bugs raros. En este nivel se entrega: **Usar hashtables como estructuras de datos y técnicas de acumulación eficiente**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Arrays y hashtables** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar hashtable como diccionario para búsquedas rápidas
2. Agregar propiedades a un objeto con hashtable
3. Acumular resultados en una List[T] en vez de += en loops
4. Ordenar y filtrar hashtables por valor

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar hashtables como estructuras de datos y técnicas de acumulación eficiente | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Usar hashtable como diccionario para búsquedas rápidas · Agregar propiedades a un objeto con hashtable · Acumular resultados en una List[T] en vez de += en loops · Ordenar y filtrar hashtables por valor | lista | sí | 3-4 pasos |
| $criterios_clave | Buscás elementos por clave sin recorrer el array entero · Evitás la concatenación de arrays dentro de loops grandes | lista | sí | calidad verificable |
| $prompt_guia | Estoy contando ocurrencias de palabras en logs y uso un array con +=, pero va lentísimo. Pasame la solución con hashtables o List[string] y explicame por qué rinde más. | texto | no | "Arrays y hashtables" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Buscás elementos por clave sin recorrer el array entero
- [ ] Evitás la concatenación de arrays dentro de loops grandes

## Ejemplos de prompts

- "Estoy contando ocurrencias de palabras en logs y uso un array con +=, pero va lentísimo. Pasame la solución con hashtables o List[string] y explicame por qué rinde más."
- "Aplica Arrays y hashtables (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Buscás elementos por clave sin recorrer el array entero"
- "Revisa mi powershell-core y dime qué pasos de Arrays y hashtables me faltan en este nivel"