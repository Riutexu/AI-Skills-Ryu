---
name: webservices-php-api-performance-avanzado
description: Rendimiento de APIs · nivel Avanzado · Servicios web y APIs en PHP. APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. Objetivo del nivel: caché de API y queries
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "api-performance"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Rendimiento de APIs — Avanzado

## Qué hace este skill

APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. En este nivel se entrega: **caché de API y queries**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cachear respuestas GET con TTL y claves correctas
2. Optimizar queries de listados (índices, eager)
3. Usar compression (gzip/brotli) y keep-alive
4. Medir p50/p95/p99 reales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | caché de API y queries | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Cachear respuestas GET con TTL y claves correctas · Optimizar queries de listados (índices, eager) · Usar compression (gzip/brotli) y keep-alive · Medir p50/p95/p99 reales | lista | sí | 3-4 pasos |
| $criterios_clave | Las respuestas cacheables se sirven desde caché (headers) · Los percentiles quedan documentados | lista | sí | calidad verificable |
| $prompt_guia | Optimiza mi API: caché de respuestas, queries de listado y medición de percentiles | texto | no | "Rendimiento de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las respuestas cacheables se sirven desde caché (headers)
- [ ] Los percentiles quedan documentados

## Ejemplos de prompts

- "Optimiza mi API: caché de respuestas, queries de listado y medición de percentiles"
- "Aplica Rendimiento de APIs (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Las respuestas cacheables se sirven desde caché (headers)"
- "Revisa mi webservices-php y dime qué pasos de Rendimiento de APIs me faltan en este nivel"