---
name: javascript-moderno-esm-modulos-avanzado
description: ESM y módulos · nivel Avanzado · JavaScript moderno: ES2024. Organizás el código en módulos ES con imports/exports explícitos y resolución de dependencias clara. Objetivo del nivel: Aplicar re-export, barriles y modularización por dominio
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "esm-modulos"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# ESM y módulos — Avanzado

## Qué hace este skill

Organizás el código en módulos ES con imports/exports explícitos y resolución de dependencias clara. En este nivel se entrega: **Aplicar re-export, barriles y modularización por dominio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ESM y módulos** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un barril index.js que re-exporte un directorio completo
2. Separar la lógica en módulos por responsabilidad
3. Usar imports absolutos con alias configurado en jsconfig
4. Refactorizar un archivo de 500 líneas en módulos coherentes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar re-export, barriles y modularización por dominio | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear un barril index.js que re-exporte un directorio completo · Separar la lógica en módulos por responsabilidad · Usar imports absolutos con alias configurado en jsconfig · Refactorizar un archivo de 500 líneas en módulos coherentes | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún módulo importa desde fuera de su dominio sin razón · El grafo de dependencias no tiene ciclos | lista | sí | calidad verificable |
| $prompt_guia | Refactorizá este archivo de validaciones de 500 líneas en módulos por dominio con barril, manteniendo la API pública igual: que los tests sigan pasando sin tocar sus imports. | texto | no | "ESM y módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún módulo importa desde fuera de su dominio sin razón
- [ ] El grafo de dependencias no tiene ciclos

## Ejemplos de prompts

- "Refactorizá este archivo de validaciones de 500 líneas en módulos por dominio con barril, manteniendo la API pública igual: que los tests sigan pasando sin tocar sus imports."
- "Aplica ESM y módulos (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Ningún módulo importa desde fuera de su dominio sin razón"
- "Revisa mi javascript-moderno y dime qué pasos de ESM y módulos me faltan en este nivel"