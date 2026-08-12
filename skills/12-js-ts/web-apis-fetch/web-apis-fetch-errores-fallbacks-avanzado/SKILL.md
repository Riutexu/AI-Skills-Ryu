---
name: web-apis-fetch-errores-fallbacks-avanzado
description: Errores y fallbacks · nivel Avanzado · APIs del navegador. Diseñás fallbacks para APIs del navegador no soportadas y degradación elegante. Objetivo del nivel: Implementar degradación progresiva en flujos completos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-fallbacks"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Errores y fallbacks — Avanzado

## Qué hace este skill

Diseñás fallbacks para APIs del navegador no soportadas y degradación elegante. En este nivel se entrega: **Implementar degradación progresiva en flujos completos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y fallbacks** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Degradar de WebSocket a polling sin tocar la UI
2. Caer de IndexedDB a localStorage
3. Manejar offline con indicadores de estado
4. Reintentar operaciones fallidas con la API alternativa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Implementar degradación progresiva en flujos completos | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Degradar de WebSocket a polling sin tocar la UI · Caer de IndexedDB a localStorage · Manejar offline con indicadores de estado · Reintentar operaciones fallidas con la API alternativa | lista | sí | 3-4 pasos |
| $criterios_clave | La UI no cambia entre la API principal y el fallback · El estado de conexión se comunica al usuario | lista | sí | calidad verificable |
| $prompt_guia | La app debe funcionar en navegadores viejos de clientes: degradá WebSocket a polling y IndexedDB a localStorage manteniendo la misma interfaz. | texto | no | "Errores y fallbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI no cambia entre la API principal y el fallback
- [ ] El estado de conexión se comunica al usuario

## Ejemplos de prompts

- "La app debe funcionar en navegadores viejos de clientes: degradá WebSocket a polling y IndexedDB a localStorage manteniendo la misma interfaz."
- "Aplica Errores y fallbacks (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza La UI no cambia entre la API principal y el fallback"
- "Revisa mi web-apis-fetch y dime qué pasos de Errores y fallbacks me faltan en este nivel"