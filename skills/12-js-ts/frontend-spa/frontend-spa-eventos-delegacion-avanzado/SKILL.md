---
name: frontend-spa-eventos-delegacion-avanzado
description: Eventos y delegación · nivel Avanzado · SPAs vanilla y Vite. Manejás eventos con delegación, custom events y flujo de captura/burbujeo controlado. Objetivo del nivel: Aplicar delegación de eventos y custom events
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "eventos-delegacion"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Eventos y delegación — Avanzado

## Qué hace este skill

Manejás eventos con delegación, custom events y flujo de captura/burbujeo controlado. En este nivel se entrega: **Aplicar delegación de eventos y custom events**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos y delegación** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Delegar eventos en un contenedor con data-attributes
2. Crear y despachar custom events con detail
3. Usar stopPropagation con criterio
4. Manejar eventos de teclado y focus con cuidado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar delegación de eventos y custom events | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Delegar eventos en un contenedor con data-attributes · Crear y despachar custom events con detail · Usar stopPropagation con criterio · Manejar eventos de teclado y focus con cuidado | lista | sí | 3-4 pasos |
| $criterios_clave | La delegación cubre nodos agregados dinámicamente · Los custom events llevan datos en detail | lista | sí | calidad verificable |
| $prompt_guia | Refactorizá los 40 listeners de la tabla a delegación con data-actions, y despachá custom events cuando se edite una fila para que el resto escuche. | texto | no | "Eventos y delegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La delegación cubre nodos agregados dinámicamente
- [ ] Los custom events llevan datos en detail

## Ejemplos de prompts

- "Refactorizá los 40 listeners de la tabla a delegación con data-actions, y despachá custom events cuando se edite una fila para que el resto escuche."
- "Aplica Eventos y delegación (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza La delegación cubre nodos agregados dinámicamente"
- "Revisa mi frontend-spa y dime qué pasos de Eventos y delegación me faltan en este nivel"