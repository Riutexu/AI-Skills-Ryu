---
name: webservices-php-webhooks-callbacks-profesional
description: Webhooks y callbacks · nivel Profesional · Servicios web y APIs en PHP. Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. Objetivo del nivel: sistema de webhooks de producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "webhooks-callbacks"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Webhooks y callbacks — Profesional

## Qué hace este skill

Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. En este nivel se entrega: **sistema de webhooks de producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Webhooks y callbacks** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el sistema de webhooks de salida (suscripciones, URLs de cliente)
2. Versionar eventos y manejar versiones de consumidor
3. Dashboard de entregas fallidas y resend manual
4. Contratos de seguridad: secreto por suscripción y rotación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | sistema de webhooks de producto | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar el sistema de webhooks de salida (suscripciones, URLs de cliente) · Versionar eventos y manejar versiones de consumidor · Dashboard de entregas fallidas y resend manual · Contratos de seguridad: secreto por suscripción y rotación | lista | sí | 3-4 pasos |
| $criterios_clave | El resend manual de entregas fallidas funciona sin duplicar · La rotación de secretos no rompe suscriptores activos | lista | sí | calidad verificable |
| $prompt_guia | Diseña el sistema de webhooks de salida de mi plataforma: suscripciones, versiones, resend y rotación de secretos | texto | no | "Webhooks y callbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El resend manual de entregas fallidas funciona sin duplicar
- [ ] La rotación de secretos no rompe suscriptores activos

## Ejemplos de prompts

- "Diseña el sistema de webhooks de salida de mi plataforma: suscripciones, versiones, resend y rotación de secretos"
- "Aplica Webhooks y callbacks (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El resend manual de entregas fallidas funciona sin duplicar"
- "Revisa mi webservices-php y dime qué pasos de Webhooks y callbacks me faltan en este nivel"