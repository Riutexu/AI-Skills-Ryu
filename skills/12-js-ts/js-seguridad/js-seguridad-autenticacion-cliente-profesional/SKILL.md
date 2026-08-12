---
name: js-seguridad-autenticacion-cliente-profesional
description: Autenticación en el cliente · nivel Profesional · Seguridad web JS. Manejás la sesión y las credenciales en el cliente sin exponer secretos. Objetivo del nivel: Diseñar el sistema de autenticación del cliente
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "autenticacion-cliente"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Autenticación en el cliente — Profesional

## Qué hace este skill

Manejás la sesión y las credenciales en el cliente sin exponer secretos. En este nivel se entrega: **Diseñar el sistema de autenticación del cliente**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Autenticación en el cliente** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato de auth con el backend
2. Diseñar los flujos de login, refresh y revocación
3. Manejar la expiración y el force logout controlado
4. Documentar el modelo de sesión del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de autenticación del cliente | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir el contrato de auth con el backend · Diseñar los flujos de login, refresh y revocación · Manejar la expiración y el force logout controlado · Documentar el modelo de sesión del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | El modelo de sesión está documentado y es consistente · La revocación se propaga a todas las pestañas | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el sistema de auth del cliente: contrato con el backend, flujos de login/refresh/revocación, propagación del logout a todas las pestañas y documentación. | texto | no | "Autenticación en el cliente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modelo de sesión está documentado y es consistente
- [ ] La revocación se propaga a todas las pestañas

## Ejemplos de prompts

- "Diseñá el sistema de auth del cliente: contrato con el backend, flujos de login/refresh/revocación, propagación del logout a todas las pestañas y documentación."
- "Aplica Autenticación en el cliente (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza El modelo de sesión está documentado y es consistente"
- "Revisa mi js-seguridad y dime qué pasos de Autenticación en el cliente me faltan en este nivel"