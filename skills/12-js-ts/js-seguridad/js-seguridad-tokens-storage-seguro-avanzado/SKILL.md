---
name: js-seguridad-tokens-storage-seguro-avanzado
description: Tokens y storage seguro · nivel Avanzado · Seguridad web JS. Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. Objetivo del nivel: Manejar rotación de tokens y su ciclo de vida
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tokens-storage-seguro"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Tokens y storage seguro — Avanzado

## Qué hace este skill

Guardás y transmitís tokens con cookies httpOnly o memoria, nunca en localStorage. En este nivel se entrega: **Manejar rotación de tokens y su ciclo de vida**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tokens y storage seguro** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar la rotación de tokens con el backend
2. Manejar la expiración sin perder la sesión
3. Proteger contra el detección de tokens con lifespan corto
4. Sincronizar la rotación entre pestañas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar rotación de tokens y su ciclo de vida | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Implementar la rotación de tokens con el backend · Manejar la expiración sin perder la sesión · Proteger contra el detección de tokens con lifespan corto · Sincronizar la rotación entre pestañas | lista | sí | 3-4 pasos |
| $criterios_clave | Los tokens rotan según la política definida · La expiración no interrumpe flujos activos | lista | sí | calidad verificable |
| $prompt_guia | El backend rotará los tokens cada 15 minutos: implementá la rotación silenciosa, el refresh antes de expirar y la sincronización entre pestañas. | texto | no | "Tokens y storage seguro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tokens rotan según la política definida
- [ ] La expiración no interrumpe flujos activos

## Ejemplos de prompts

- "El backend rotará los tokens cada 15 minutos: implementá la rotación silenciosa, el refresh antes de expirar y la sincronización entre pestañas."
- "Aplica Tokens y storage seguro (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Los tokens rotan según la política definida"
- "Revisa mi js-seguridad y dime qué pasos de Tokens y storage seguro me faltan en este nivel"