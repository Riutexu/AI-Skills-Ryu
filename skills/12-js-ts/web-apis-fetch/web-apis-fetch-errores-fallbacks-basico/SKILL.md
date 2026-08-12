---
name: web-apis-fetch-errores-fallbacks-basico
description: Errores y fallbacks · nivel Básico · APIs del navegador. Diseñás fallbacks para APIs del navegador no soportadas y degradación elegante. Objetivo del nivel: Detectar soporte y degradar con fallbacks
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-fallbacks"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Errores y fallbacks — Básico

## Qué hace este skill

Diseñás fallbacks para APIs del navegador no soportadas y degradación elegante. En este nivel se entrega: **Detectar soporte y degradar con fallbacks**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y fallbacks** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar soporte con feature detection
2. Proveer fallbacks para APIs ausentes
3. Mostrar mensajes amigables de degradación
4. Aislar errores de una API del resto de la app

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Detectar soporte y degradar con fallbacks | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Verificar soporte con feature detection · Proveer fallbacks para APIs ausentes · Mostrar mensajes amigables de degradación · Aislar errores de una API del resto de la app | lista | sí | 3-4 pasos |
| $criterios_clave | La app funciona sin las APIs no soportadas · Los mensajes de degradación son claros | lista | sí | calidad verificable |
| $prompt_guia | La SPA usa geolocalización y notifications: agregá feature detection y fallbacks que mantengan la funcionalidad sin ellas, con mensajes amigables. | texto | no | "Errores y fallbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app funciona sin las APIs no soportadas
- [ ] Los mensajes de degradación son claros

## Ejemplos de prompts

- "La SPA usa geolocalización y notifications: agregá feature detection y fallbacks que mantengan la funcionalidad sin ellas, con mensajes amigables."
- "Aplica Errores y fallbacks (nivel basico) a mi trabajo actual con APIs del navegador: prioriza La app funciona sin las APIs no soportadas"
- "Revisa mi web-apis-fetch y dime qué pasos de Errores y fallbacks me faltan en este nivel"