---
name: js-seguridad-csp-avanzado
description: CSP · nivel Avanzado · Seguridad web JS. Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. Objetivo del nivel: Endurecer la CSP con nonces y hashes
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "csp"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# CSP — Avanzado

## Qué hace este skill

Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. En este nivel se entrega: **Endurecer la CSP con nonces y hashes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSP** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar nonces para scripts inline
2. Usar hashes donde los nonces no aplican
3. Restringir connect-src a los dominios reales
4. Manejar la compatibilidad con el service worker

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Endurecer la CSP con nonces y hashes | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Usar nonces para scripts inline · Usar hashes donde los nonces no aplican · Restringir connect-src a los dominios reales · Manejar la compatibilidad con el service worker | lista | sí | 3-4 pasos |
| $criterios_clave | Los scripts inline están permitidos con nonce o hash · connect-src solo permite los dominios necesarios | lista | sí | calidad verificable |
| $prompt_guia | Endurecé la CSP: nonces para los scripts inline de la SPA, connect-src mínimo con los endpoints reales y verificación con el service worker. | texto | no | "CSP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los scripts inline están permitidos con nonce o hash
- [ ] connect-src solo permite los dominios necesarios

## Ejemplos de prompts

- "Endurecé la CSP: nonces para los scripts inline de la SPA, connect-src mínimo con los endpoints reales y verificación con el service worker."
- "Aplica CSP (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Los scripts inline están permitidos con nonce o hash"
- "Revisa mi js-seguridad y dime qué pasos de CSP me faltan en este nivel"