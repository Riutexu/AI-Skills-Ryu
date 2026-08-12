---
name: frontend-spa-eventos-delegacion-profesional
description: Eventos y delegación · nivel Profesional · SPAs vanilla y Vite. Manejás eventos con delegación, custom events y flujo de captura/burbujeo controlado. Objetivo del nivel: Diseñar el bus de eventos de la aplicación
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "eventos-delegacion"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Eventos y delegación — Profesional

## Qué hace este skill

Manejás eventos con delegación, custom events y flujo de captura/burbujeo controlado. En este nivel se entrega: **Diseñar el bus de eventos de la aplicación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos y delegación** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el catálogo de eventos de la app con contratos
2. Implementar un event bus con suscripciones tipadas
3. Evitar el acoplamiento entre vistas vía eventos
4. Documentar el flujo de eventos por caso de uso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el bus de eventos de la aplicación | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir el catálogo de eventos de la app con contratos · Implementar un event bus con suscripciones tipadas · Evitar el acoplamiento entre vistas vía eventos · Documentar el flujo de eventos por caso de uso | lista | sí | 3-4 pasos |
| $criterios_clave | Las vistas se comunican sin importarse entre sí · El catálogo de eventos está documentado | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el bus de eventos de la app: catálogo tipado de eventos (auth:login, carrito:updated, pedido:created), publicación y suscripción sin acoplar vistas. | texto | no | "Eventos y delegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las vistas se comunican sin importarse entre sí
- [ ] El catálogo de eventos está documentado

## Ejemplos de prompts

- "Diseñá el bus de eventos de la app: catálogo tipado de eventos (auth:login, carrito:updated, pedido:created), publicación y suscripción sin acoplar vistas."
- "Aplica Eventos y delegación (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Las vistas se comunican sin importarse entre sí"
- "Revisa mi frontend-spa y dime qué pasos de Eventos y delegación me faltan en este nivel"