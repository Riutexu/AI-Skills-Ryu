---
name: webservices-php-testing-api-php-profesional
description: Testing de APIs · nivel Profesional · Servicios web y APIs en PHP. Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. Objetivo del nivel: fuzzing y contract testing
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "testing-api-php"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Testing de APIs — Profesional

## Qué hace este skill

Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. En este nivel se entrega: **fuzzing y contract testing**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Añadir fuzzing controlado de entradas (sin romper la API)
2. Contract testing entre consumidor y proveedor
3. Mutation testing de la lógica de contrato
4. Automatizar todo en CI con cobertura por dominio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | fuzzing y contract testing | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Añadir fuzzing controlado de entradas (sin romper la API) · Contract testing entre consumidor y proveedor · Mutation testing de la lógica de contrato · Automatizar todo en CI con cobertura por dominio | lista | sí | 3-4 pasos |
| $criterios_clave | El fuzzing no encuentra validaciones omitidas críticas · El contract test falla cuando el contrato se rompe | lista | sí | calidad verificable |
| $prompt_guia | Integra fuzzing controlado y contract testing en el pipeline de mi API | texto | no | "Testing de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El fuzzing no encuentra validaciones omitidas críticas
- [ ] El contract test falla cuando el contrato se rompe

## Ejemplos de prompts

- "Integra fuzzing controlado y contract testing en el pipeline de mi API"
- "Aplica Testing de APIs (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El fuzzing no encuentra validaciones omitidas críticas"
- "Revisa mi webservices-php y dime qué pasos de Testing de APIs me faltan en este nivel"