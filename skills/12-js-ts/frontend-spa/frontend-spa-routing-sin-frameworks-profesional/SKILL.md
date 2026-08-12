---
name: frontend-spa-routing-sin-frameworks-profesional
description: Routing sin frameworks · nivel Profesional · SPAs vanilla y Vite. Implementás navegación con history API, rutas parametrizadas y lazy loading de vistas. Objetivo del nivel: Diseñar el sistema de navegación con lazy loading y estados
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "routing-sin-frameworks"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Routing sin frameworks — Profesional

## Qué hace este skill

Implementás navegación con history API, rutas parametrizadas y lazy loading de vistas. En este nivel se entrega: **Diseñar el sistema de navegación con lazy loading y estados**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Routing sin frameworks** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar code splitting por ruta con import dinámico
2. Manejar transiciones de carga entre rutas
3. Sincronizar el estado con la URL
4. Documentar las convenciones de rutas del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de navegación con lazy loading y estados | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Implementar code splitting por ruta con import dinámico · Manejar transiciones de carga entre rutas · Sincronizar el estado con la URL · Documentar las convenciones de rutas del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Cada vista carga solo su bundle · El estado se reconstruye desde la URL al recargar | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la navegación definitiva: lazy loading por ruta, indicador de transición, estado sincronizado con la URL y convenciones de rutas documentadas para el equipo. | texto | no | "Routing sin frameworks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada vista carga solo su bundle
- [ ] El estado se reconstruye desde la URL al recargar

## Ejemplos de prompts

- "Diseñá la navegación definitiva: lazy loading por ruta, indicador de transición, estado sincronizado con la URL y convenciones de rutas documentadas para el equipo."
- "Aplica Routing sin frameworks (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Cada vista carga solo su bundle"
- "Revisa mi frontend-spa y dime qué pasos de Routing sin frameworks me faltan en este nivel"