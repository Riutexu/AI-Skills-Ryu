---
name: js-seguridad-hardening-navegador-basico
description: Hardening del navegador · nivel Básico · Seguridad web JS. Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. Objetivo del nivel: Aplicar headers de seguridad básicos de la respuesta
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "hardening-navegador"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Hardening del navegador — Básico

## Qué hace este skill

Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. En este nivel se entrega: **Aplicar headers de seguridad básicos de la respuesta**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Hardening del navegador** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar X-Content-Type-Options y nosniff
2. Configurar X-Frame-Options o frame-ancestors
3. Configurar Referrer-Policy
4. Verificar los headers con herramientas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar headers de seguridad básicos de la respuesta | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Configurar X-Content-Type-Options y nosniff · Configurar X-Frame-Options o frame-ancestors · Configurar Referrer-Policy · Verificar los headers con herramientas | lista | sí | 3-4 pasos |
| $criterios_clave | Los headers de seguridad están presentes · La página no se deja embeder sin permiso | lista | sí | calidad verificable |
| $prompt_guia | La SPA no tiene headers de seguridad desde el server: configurá X-Content-Type-Options, frame-ancestors y Referrer-Policy en el backend PHP. | texto | no | "Hardening del navegador" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los headers de seguridad están presentes
- [ ] La página no se deja embeder sin permiso

## Ejemplos de prompts

- "La SPA no tiene headers de seguridad desde el server: configurá X-Content-Type-Options, frame-ancestors y Referrer-Policy en el backend PHP."
- "Aplica Hardening del navegador (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza Los headers de seguridad están presentes"
- "Revisa mi js-seguridad y dime qué pasos de Hardening del navegador me faltan en este nivel"