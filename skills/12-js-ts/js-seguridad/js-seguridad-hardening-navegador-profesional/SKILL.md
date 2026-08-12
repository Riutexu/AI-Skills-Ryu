---
name: js-seguridad-hardening-navegador-profesional
description: Hardening del navegador · nivel Profesional · Seguridad web JS. Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. Objetivo del nivel: Diseñar la postura de seguridad del frontend
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "hardening-navegador"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Hardening del navegador — Profesional

## Qué hace este skill

Reducís la superficie de ataque con headers, iframes, referrers y políticas de privacidad. En este nivel se entrega: **Diseñar la postura de seguridad del frontend**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Hardening del navegador** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el conjunto de headers y políticas del proyecto
2. Automatizar la verificación de hardening en CI
3. Crear la matriz de hardening por entorno
4. Documentar la postura y sus excepciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la postura de seguridad del frontend | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir el conjunto de headers y políticas del proyecto · Automatizar la verificación de hardening en CI · Crear la matriz de hardening por entorno · Documentar la postura y sus excepciones | lista | sí | 3-4 pasos |
| $criterios_clave | La verificación de hardening corre en CI · La matriz cubre todos los entornos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la postura de seguridad del frontend: headers y políticas por entornos, verificación automática de hardening en CI y la documentación de excepciones. | texto | no | "Hardening del navegador" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La verificación de hardening corre en CI
- [ ] La matriz cubre todos los entornos

## Ejemplos de prompts

- "Diseñá la postura de seguridad del frontend: headers y políticas por entornos, verificación automática de hardening en CI y la documentación de excepciones."
- "Aplica Hardening del navegador (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La verificación de hardening corre en CI"
- "Revisa mi js-seguridad y dime qué pasos de Hardening del navegador me faltan en este nivel"