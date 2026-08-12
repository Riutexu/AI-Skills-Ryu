---
name: frontend-spa-state-management-profesional
description: State management simple · nivel Profesional · SPAs vanilla y Vite. Manejás el estado de la SPA con stores simples, suscripciones y actualizaciones inmutables. Objetivo del nivel: Diseñar el modelo de estado de la aplicación completa
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "state-management"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# State management simple — Profesional

## Qué hace este skill

Manejás el estado de la SPA con stores simples, suscripciones y actualizaciones inmutables. En este nivel se entrega: **Diseñar el modelo de estado de la aplicación completa**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State management simple** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar el estado global por dominios con stores claros
2. Definir flujos de acciones asíncronas y su estado
3. Implementar devtools de estado para debuggear
4. Documentar el modelo de estado y sus invariantes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el modelo de estado de la aplicación completa | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Modelar el estado global por dominios con stores claros · Definir flujos de acciones asíncronas y su estado · Implementar devtools de estado para debuggear · Documentar el modelo de estado y sus invariantes | lista | sí | 3-4 pasos |
| $criterios_clave | El modelo de estado cubre toda la app sin estado zombie · Las invariantes se verifican en tests | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el modelo de estado completo de la app: stores por dominio, flujos de acciones asíncronas con estados, y un mini devtools para inspeccionar el estado en consola. | texto | no | "State management simple" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modelo de estado cubre toda la app sin estado zombie
- [ ] Las invariantes se verifican en tests

## Ejemplos de prompts

- "Diseñá el modelo de estado completo de la app: stores por dominio, flujos de acciones asíncronas con estados, y un mini devtools para inspeccionar el estado en consola."
- "Aplica State management simple (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza El modelo de estado cubre toda la app sin estado zombie"
- "Revisa mi frontend-spa y dime qué pasos de State management simple me faltan en este nivel"