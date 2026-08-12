---
name: js-seguridad-xss-sanitizacion-basico
description: XSS y sanitización · nivel Básico · Seguridad web JS. Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. Objetivo del nivel: Escapar y sanitizar datos antes de insertarlos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "xss-sanitizacion"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# XSS y sanitización — Básico

## Qué hace este skill

Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. En este nivel se entrega: **Escapar y sanitizar datos antes de insertarlos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **XSS y sanitización** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escapar valores al interpolar en HTML
2. Evitar innerHTML con datos del usuario
3. Usar textContent para texto plano
4. Sanitizar con una librería confiable donde haga falta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escapar y sanitizar datos antes de insertarlos | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Escapar valores al interpolar en HTML · Evitar innerHTML con datos del usuario · Usar textContent para texto plano · Sanitizar con una librería confiable donde haga falta | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún dato del usuario entra sin escapar al DOM · No hay innerHTML con datos sin sanitizar | lista | sí | calidad verificable |
| $prompt_guia | Auditá la SPA por XSS: escapá las interpolaciones, reemplazá los innerHTML con datos del usuario por textContent y sanitizá donde haya markup legítimo. | texto | no | "XSS y sanitización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún dato del usuario entra sin escapar al DOM
- [ ] No hay innerHTML con datos sin sanitizar

## Ejemplos de prompts

- "Auditá la SPA por XSS: escapá las interpolaciones, reemplazá los innerHTML con datos del usuario por textContent y sanitizá donde haya markup legítimo."
- "Aplica XSS y sanitización (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza Ningún dato del usuario entra sin escapar al DOM"
- "Revisa mi js-seguridad y dime qué pasos de XSS y sanitización me faltan en este nivel"