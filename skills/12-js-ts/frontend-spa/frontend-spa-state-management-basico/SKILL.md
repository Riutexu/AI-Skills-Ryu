---
name: frontend-spa-state-management-basico
description: State management simple · nivel Básico · SPAs vanilla y Vite. Manejás el estado de la SPA con stores simples, suscripciones y actualizaciones inmutables. Objetivo del nivel: Crear un store simple con estado y suscripciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "state-management"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# State management simple — Básico

## Qué hace este skill

Manejás el estado de la SPA con stores simples, suscripciones y actualizaciones inmutables. En este nivel se entrega: **Crear un store simple con estado y suscripciones**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State management simple** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un objeto store con estado inicial
2. Implementar suscripción y notificación de cambios
3. Actualizar el estado con setters controlados
4. Renderizar la vista al cambiar el estado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un store simple con estado y suscripciones | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Crear un objeto store con estado inicial · Implementar suscripción y notificación de cambios · Actualizar el estado con setters controlados · Renderizar la vista al cambiar el estado | lista | sí | 3-4 pasos |
| $criterios_clave | Las vistas reflejan el estado al instante · No hay mutaciones fuera de los setters | lista | sí | calidad verificable |
| $prompt_guia | Implementá un store de carrito con estado inicial, métodos agregar/quitar/vaciar y suscripciones que actualicen el contador del header. | texto | no | "State management simple" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las vistas reflejan el estado al instante
- [ ] No hay mutaciones fuera de los setters

## Ejemplos de prompts

- "Implementá un store de carrito con estado inicial, métodos agregar/quitar/vaciar y suscripciones que actualicen el contador del header."
- "Aplica State management simple (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza Las vistas reflejan el estado al instante"
- "Revisa mi frontend-spa y dime qué pasos de State management simple me faltan en este nivel"