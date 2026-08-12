---
name: webservices-php-webhooks-callbacks-avanzado
description: Webhooks y callbacks · nivel Avanzado · Servicios web y APIs en PHP. Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. Objetivo del nivel: firmas y entregas fiables
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "webhooks-callbacks"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Webhooks y callbacks — Avanzado

## Qué hace este skill

Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. En este nivel se entrega: **firmas y entregas fiables**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Webhooks y callbacks** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar firmas HMAC de los webhooks
2. Implementar retries con backoff y cola de reintentos
3. Garantizar idempotencia por event id
4. Registrar la entrega y su estado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | firmas y entregas fiables | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Verificar firmas HMAC de los webhooks · Implementar retries con backoff y cola de reintentos · Garantizar idempotencia por event id · Registrar la entrega y su estado | lista | sí | 3-4 pasos |
| $criterios_clave | Los webhooks falsos se rechazan por firma · Un reintento no duplica el efecto (idempotencia probada) | lista | sí | calidad verificable |
| $prompt_guia | Haz mis webhooks fiables: verificación de firma HMAC, retries con backoff e idempotencia | texto | no | "Webhooks y callbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los webhooks falsos se rechazan por firma
- [ ] Un reintento no duplica el efecto (idempotencia probada)

## Ejemplos de prompts

- "Haz mis webhooks fiables: verificación de firma HMAC, retries con backoff e idempotencia"
- "Aplica Webhooks y callbacks (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los webhooks falsos se rechazan por firma"
- "Revisa mi webservices-php y dime qué pasos de Webhooks y callbacks me faltan en este nivel"