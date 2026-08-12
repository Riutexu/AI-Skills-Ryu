---
name: js-seguridad-secrets-cliente-profesional
description: Secrets del cliente · nivel Profesional · Seguridad web JS. Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. Objetivo del nivel: Diseñar la estrategia de secretos del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "secrets-cliente"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Secrets del cliente — Profesional

## Qué hace este skill

Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. En este nivel se entrega: **Diseñar la estrategia de secretos del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Secrets del cliente** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir qué puede conocer el cliente y qué no
2. Crear el flujo de emisión de claves por el backend
3. Implementar la detección de secretos en el CI
4. Documentar la matriz de secretos por entorno

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de secretos del proyecto | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir qué puede conocer el cliente y qué no · Crear el flujo de emisión de claves por el backend · Implementar la detección de secretos en el CI · Documentar la matriz de secretos por entorno | lista | sí | 3-4 pasos |
| $criterios_clave | La detección de secretos corre en cada push · La matriz documenta cada secreto y su manejo | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia de secretos: matriz por entorno, emisión de claves vía backend, escaneo de secretos en el CI con las tools de detección y documentación. | texto | no | "Secrets del cliente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La detección de secretos corre en cada push
- [ ] La matriz documenta cada secreto y su manejo

## Ejemplos de prompts

- "Diseñá la estrategia de secretos: matriz por entorno, emisión de claves vía backend, escaneo de secretos en el CI con las tools de detección y documentación."
- "Aplica Secrets del cliente (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La detección de secretos corre en cada push"
- "Revisa mi js-seguridad y dime qué pasos de Secrets del cliente me faltan en este nivel"