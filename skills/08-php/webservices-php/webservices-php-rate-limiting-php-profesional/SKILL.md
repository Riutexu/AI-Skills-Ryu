---
name: webservices-php-rate-limiting-php-profesional
description: Rate limiting y throttling · nivel Profesional · Servicios web y APIs en PHP. Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. Objetivo del nivel: protección de API como producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rate-limiting-php"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Rate limiting y throttling — Profesional

## Qué hace este skill

Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. En este nivel se entrega: **protección de API como producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rate limiting y throttling** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el modelo de cuotas (planes, burst, soft/hard limits)
2. Prevenir abuso de negocio (scraping, fraudes) con heurísticas
3. Observabilidad de límites: métricas y alertas de abuso
4. Comunicar límites y planes al cliente (documentación y headers)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | protección de API como producto | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar el modelo de cuotas (planes, burst, soft/hard limits) · Prevenir abuso de negocio (scraping, fraudes) con heurísticas · Observabilidad de límites: métricas y alertas de abuso · Comunicar límites y planes al cliente (documentación y headers) | lista | sí | 3-4 pasos |
| $criterios_clave | El modelo de cuotas está documentado y aplicado por plan · Las alertas de abuso detectan picos anómalos | lista | sí | calidad verificable |
| $prompt_guia | Diseña el modelo de cuotas de mi API como producto: planes, heurísticas anti-abuso y métricas | texto | no | "Rate limiting y throttling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modelo de cuotas está documentado y aplicado por plan
- [ ] Las alertas de abuso detectan picos anómalos

## Ejemplos de prompts

- "Diseña el modelo de cuotas de mi API como producto: planes, heurísticas anti-abuso y métricas"
- "Aplica Rate limiting y throttling (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El modelo de cuotas está documentado y aplicado por plan"
- "Revisa mi webservices-php y dime qué pasos de Rate limiting y throttling me faltan en este nivel"