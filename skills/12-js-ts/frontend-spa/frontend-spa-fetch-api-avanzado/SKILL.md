---
name: frontend-spa-fetch-api-avanzado
description: Fetch y API · nivel Avanzado · SPAs vanilla y Vite. Consumís el backend con fetch, manejo de errores HTTP y contratos de respuesta. Objetivo del nivel: Centralizar el consumo de API con wrapper y contratos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fetch-api"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Fetch y API — Avanzado

## Qué hace este skill

Consumís el backend con fetch, manejo de errores HTTP y contratos de respuesta. En este nivel se entrega: **Centralizar el consumo de API con wrapper y contratos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fetch y API** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un wrapper apiFetch con base URL y timeout
2. Normalizar errores HTTP a errores tipados
3. Manejar cancelación con AbortController
4. Crear servicios por dominio sobre el wrapper

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Centralizar el consumo de API con wrapper y contratos | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Crear un wrapper apiFetch con base URL y timeout · Normalizar errores HTTP a errores tipados · Manejar cancelación con AbortController · Crear servicios por dominio sobre el wrapper | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los endpoints pasan por el wrapper · Los errores se clasifican (red, http, validación) | lista | sí | calidad verificable |
| $prompt_guia | Creá el wrapper apiFetch del proyecto: base URL, timeout con AbortController, errores normalizados por tipo y servicios de usuarios y pedidos encima. | texto | no | "Fetch y API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los endpoints pasan por el wrapper
- [ ] Los errores se clasifican (red, http, validación)

## Ejemplos de prompts

- "Creá el wrapper apiFetch del proyecto: base URL, timeout con AbortController, errores normalizados por tipo y servicios de usuarios y pedidos encima."
- "Aplica Fetch y API (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Todos los endpoints pasan por el wrapper"
- "Revisa mi frontend-spa y dime qué pasos de Fetch y API me faltan en este nivel"