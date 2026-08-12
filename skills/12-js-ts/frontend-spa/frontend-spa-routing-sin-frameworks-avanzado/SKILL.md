---
name: frontend-spa-routing-sin-frameworks-avanzado
description: Routing sin frameworks · nivel Avanzado · SPAs vanilla y Vite. Implementás navegación con history API, rutas parametrizadas y lazy loading de vistas. Objetivo del nivel: Soportar rutas parametrizadas, query params y guards
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "routing-sin-frameworks"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Routing sin frameworks — Avanzado

## Qué hace este skill

Implementás navegación con history API, rutas parametrizadas y lazy loading de vistas. En este nivel se entrega: **Soportar rutas parametrizadas, query params y guards**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Routing sin frameworks** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Parsear parámetros de ruta como /pedidos/:id
2. Leer y escribir query params
3. Implementar guards de ruta (requiere auth)
4. Cargar vistas de forma diferida con import dinámico

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Soportar rutas parametrizadas, query params y guards | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Parsear parámetros de ruta como /pedidos/:id · Leer y escribir query params · Implementar guards de ruta (requiere auth) · Cargar vistas de forma diferida con import dinámico | lista | sí | 3-4 pasos |
| $criterios_clave | Los parámetros llegan a la vista correctamente · El guard redirige al login sin renderizar la vista | lista | sí | calidad verificable |
| $prompt_guia | Extendé el router con rutas parametrizadas (pedidos/:id), query params para filtros y un guard que redirija al login si no hay sesión. | texto | no | "Routing sin frameworks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los parámetros llegan a la vista correctamente
- [ ] El guard redirige al login sin renderizar la vista

## Ejemplos de prompts

- "Extendé el router con rutas parametrizadas (pedidos/:id), query params para filtros y un guard que redirija al login si no hay sesión."
- "Aplica Routing sin frameworks (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los parámetros llegan a la vista correctamente"
- "Revisa mi frontend-spa y dime qué pasos de Routing sin frameworks me faltan en este nivel"