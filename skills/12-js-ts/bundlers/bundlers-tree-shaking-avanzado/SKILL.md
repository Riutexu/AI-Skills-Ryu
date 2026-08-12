---
name: bundlers-tree-shaking-avanzado
description: Tree shaking · nivel Avanzado · Bundlers y tooling. Eliminás código muerto del bundle con exports estáticos, sideEffects y análisis preciso. Objetivo del nivel: Declarar sideEffects y afinar el árbol
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tree-shaking"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Tree shaking — Avanzado

## Qué hace este skill

Eliminás código muerto del bundle con exports estáticos, sideEffects y análisis preciso. En este nivel se entrega: **Declarar sideEffects y afinar el árbol**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tree shaking** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar sideEffects en el package.json
2. Manejar archivos con efectos laterales reales
3. Configurar la inclusión de CSS con sideEffects
4. Eliminar código muerto en librerías propias

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Declarar sideEffects y afinar el árbol | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Declarar sideEffects en el package.json · Manejar archivos con efectos laterales reales · Configurar la inclusión de CSS con sideEffects · Eliminar código muerto en librerías propias | lista | sí | 3-4 pasos |
| $criterios_clave | La declaración de sideEffects es correcta y precisa · El shaking elimina código muerto sin romper nada | lista | sí | calidad verificable |
| $prompt_guia | Afiná el tree shaking de la librería interna: sideEffects declarados correctamente, CSS con efectos reales aparte y verificación de que nada se rompe. | texto | no | "Tree shaking" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La declaración de sideEffects es correcta y precisa
- [ ] El shaking elimina código muerto sin romper nada

## Ejemplos de prompts

- "Afiná el tree shaking de la librería interna: sideEffects declarados correctamente, CSS con efectos reales aparte y verificación de que nada se rompe."
- "Aplica Tree shaking (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza La declaración de sideEffects es correcta y precisa"
- "Revisa mi bundlers y dime qué pasos de Tree shaking me faltan en este nivel"