---
name: frontend-spa-custom-elements-profesional
description: Componentes web (custom elements) · nivel Profesional · SPAs vanilla y Vite. Creás componentes reutilizables con custom elements, shadow DOM y atributos observables. Objetivo del nivel: Diseñar un sistema de componentes propio con convenciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "custom-elements"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Componentes web (custom elements) — Profesional

## Qué hace este skill

Creás componentes reutilizables con custom elements, shadow DOM y atributos observables. En este nivel se entrega: **Diseñar un sistema de componentes propio con convenciones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Componentes web (custom elements)** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir convenciones de naming y API de componentes
2. Crear una librería de componentes base reutilizable
3. Documentar cada componente con ejemplos
4. Manejar upgrade de elementos y casos legacy

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar un sistema de componentes propio con convenciones | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir convenciones de naming y API de componentes · Crear una librería de componentes base reutilizable · Documentar cada componente con ejemplos · Manejar upgrade de elementos y casos legacy | lista | sí | 3-4 pasos |
| $criterios_clave | Los componentes del sistema comparten convenciones consistentes · La documentación cubre props, eventos y slots | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el sistema de componentes interno (botones, inputs, tabla, modal) con convenciones de API, documentación en el repo y ejemplos de uso para el equipo. | texto | no | "Componentes web (custom elements)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los componentes del sistema comparten convenciones consistentes
- [ ] La documentación cubre props, eventos y slots

## Ejemplos de prompts

- "Diseñá el sistema de componentes interno (botones, inputs, tabla, modal) con convenciones de API, documentación en el repo y ejemplos de uso para el equipo."
- "Aplica Componentes web (custom elements) (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los componentes del sistema comparten convenciones consistentes"
- "Revisa mi frontend-spa y dime qué pasos de Componentes web (custom elements) me faltan en este nivel"