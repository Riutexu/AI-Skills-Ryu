---
name: js-seguridad-csrf-frontend-profesional
description: CSRF en frontend · nivel Profesional · Seguridad web JS. Protegés las peticiones de estado contra CSRF con tokens, SameSite y doble envío. Objetivo del nivel: Diseñar el esquema CSRF del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "csrf-frontend"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# CSRF en frontend — Profesional

## Qué hace este skill

Protegés las peticiones de estado contra CSRF con tokens, SameSite y doble envío. En este nivel se entrega: **Diseñar el esquema CSRF del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSRF en frontend** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato CSRF con el backend
2. Centralizar la inyección del token en la capa de fetch
3. Verificar la protección con tests de escenarios
4. Documentar el esquema y sus límites

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el esquema CSRF del proyecto | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir el contrato CSRF con el backend · Centralizar la inyección del token en la capa de fetch · Verificar la protección con tests de escenarios · Documentar el esquema y sus límites | lista | sí | 3-4 pasos |
| $criterios_clave | La capa de fetch inyecta el token en todas las mutaciones · Los escenarios CSRF están en los tests | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el esquema CSRF integrado: contrato con el backend, inyección centralizada en la capa de fetch y tests de los escenarios de ataque. | texto | no | "CSRF en frontend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa de fetch inyecta el token en todas las mutaciones
- [ ] Los escenarios CSRF están en los tests

## Ejemplos de prompts

- "Diseñá el esquema CSRF integrado: contrato con el backend, inyección centralizada en la capa de fetch y tests de los escenarios de ataque."
- "Aplica CSRF en frontend (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La capa de fetch inyecta el token en todas las mutaciones"
- "Revisa mi js-seguridad y dime qué pasos de CSRF en frontend me faltan en este nivel"