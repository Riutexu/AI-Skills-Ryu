---
name: web-apis-fetch-errores-fallbacks-profesional
description: Errores y fallbacks · nivel Profesional · APIs del navegador. Diseñás fallbacks para APIs del navegador no soportadas y degradación elegante. Objetivo del nivel: Diseñar la matriz de compatibilidad y fallbacks del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-fallbacks"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Errores y fallbacks — Profesional

## Qué hace este skill

Diseñás fallbacks para APIs del navegador no soportadas y degradación elegante. En este nivel se entrega: **Diseñar la matriz de compatibilidad y fallbacks del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y fallbacks** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la matriz de navegadores soportados
2. Definir la política de fallbacks por feature
3. Automatizar la detección de compatibilidad en CI
4. Documentar la estrategia de degradación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la matriz de compatibilidad y fallbacks del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Crear la matriz de navegadores soportados · Definir la política de fallbacks por feature · Automatizar la detección de compatibilidad en CI · Documentar la estrategia de degradación | lista | sí | 3-4 pasos |
| $criterios_clave | La matriz define soporte y fallbacks por feature · Las regresiones de compatibilidad se detectan en CI | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la matriz de compatibilidad del proyecto: navegadores soportados, fallbacks por feature y detección automática de regresiones en el pipeline. | texto | no | "Errores y fallbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La matriz define soporte y fallbacks por feature
- [ ] Las regresiones de compatibilidad se detectan en CI

## Ejemplos de prompts

- "Diseñá la matriz de compatibilidad del proyecto: navegadores soportados, fallbacks por feature y detección automática de regresiones en el pipeline."
- "Aplica Errores y fallbacks (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza La matriz define soporte y fallbacks por feature"
- "Revisa mi web-apis-fetch y dime qué pasos de Errores y fallbacks me faltan en este nivel"