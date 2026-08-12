---
name: javascript-moderno-tooling-sin-frameworks-profesional
description: Tooling sin frameworks · nivel Profesional · JavaScript moderno: ES2024. Montás un proyecto vanilla con Vite, scripts, lint y test sin la carga de un framework. Objetivo del nivel: Definir el toolchain del equipo y automatizar calidad
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tooling-sin-frameworks"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Tooling sin frameworks — Profesional

## Qué hace este skill

Montás un proyecto vanilla con Vite, scripts, lint y test sin la carga de un framework. En este nivel se entrega: **Definir el toolchain del equipo y automatizar calidad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tooling sin frameworks** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el toolchain y los comandos del proyecto
2. Configurar husky con pre-commit de lint y tests
3. Crear scripts de CI locales para verificar el build
4. Establecer convenciones de configuración compartidas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir el toolchain del equipo y automatizar calidad | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Documentar el toolchain y los comandos del proyecto · Configurar husky con pre-commit de lint y tests · Crear scripts de CI locales para verificar el build · Establecer convenciones de configuración compartidas | lista | sí | 3-4 pasos |
| $criterios_clave | Un nuevo dev puede correr el proyecto con un solo comando · Ningún commit sucio llega al repo | lista | sí | calidad verificable |
| $prompt_guia | Armame el toolchain completo del proyecto: Vite, ESLint, Prettier, Vitest y pre-commit hooks, con la documentación de arranque para el dev que se suma la semana que viene. | texto | no | "Tooling sin frameworks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un nuevo dev puede correr el proyecto con un solo comando
- [ ] Ningún commit sucio llega al repo

## Ejemplos de prompts

- "Armame el toolchain completo del proyecto: Vite, ESLint, Prettier, Vitest y pre-commit hooks, con la documentación de arranque para el dev que se suma la semana que viene."
- "Aplica Tooling sin frameworks (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Un nuevo dev puede correr el proyecto con un solo comando"
- "Revisa mi javascript-moderno y dime qué pasos de Tooling sin frameworks me faltan en este nivel"