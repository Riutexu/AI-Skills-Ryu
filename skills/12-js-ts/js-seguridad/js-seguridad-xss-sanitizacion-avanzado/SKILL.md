---
name: js-seguridad-xss-sanitizacion-avanzado
description: XSS y sanitización · nivel Avanzado · Seguridad web JS. Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. Objetivo del nivel: Prevenir XSS en contextos complejos (URLs, atributos, JS)
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "xss-sanitizacion"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# XSS y sanitización — Avanzado

## Qué hace este skill

Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. En este nivel se entrega: **Prevenir XSS en contextos complejos (URLs, atributos, JS)**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **XSS y sanitización** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Sanitizar URLs en href y src con allowlist de protocolos
2. Validar el contenido de atributos dinámicos
3. Evitar eval y contraseñas de funciones dinámicas
4. Manejar scripts enriquecidos solo con librerías sanitizantes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Prevenir XSS en contextos complejos (URLs, atributos, JS) | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Sanitizar URLs en href y src con allowlist de protocolos · Validar el contenido de atributos dinámicos · Evitar eval y contraseñas de funciones dinámicas · Manejar scripts enriquecidos solo con librerías sanitizantes | lista | sí | 3-4 pasos |
| $criterios_clave | Los protocolos peligrosos se bloquean en URLs · No hay ejecución de código dinámico sin validar | lista | sí | calidad verificable |
| $prompt_guia | El módulo de comentarios permite formato: sanitizá con allowlist bien configurada, validá las URLs con protocolos seguros y bloqueá javascript:. | texto | no | "XSS y sanitización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los protocolos peligrosos se bloquean en URLs
- [ ] No hay ejecución de código dinámico sin validar

## Ejemplos de prompts

- "El módulo de comentarios permite formato: sanitizá con allowlist bien configurada, validá las URLs con protocolos seguros y bloqueá javascript:."
- "Aplica XSS y sanitización (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Los protocolos peligrosos se bloquean en URLs"
- "Revisa mi js-seguridad y dime qué pasos de XSS y sanitización me faltan en este nivel"