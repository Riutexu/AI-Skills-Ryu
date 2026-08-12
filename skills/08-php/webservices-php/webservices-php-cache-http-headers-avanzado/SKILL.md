---
name: webservices-php-cache-http-headers-avanzado
description: Caché HTTP y headers · nivel Avanzado · Servicios web y APIs en PHP. Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. Objetivo del nivel: revalidación y stale
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cache-http-headers"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Caché HTTP y headers — Avanzado

## Qué hace este skill

Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. En este nivel se entrega: **revalidación y stale**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caché HTTP y headers** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar revalidación condicional (If-None-Match)
2. Usar stale-while-revalidate para resiliencia
3. Cachear por variación (Vary) correctamente
4. Medir el hit rate real del caché

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | revalidación y stale | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Implementar revalidación condicional (If-None-Match) · Usar stale-while-revalidate para resiliencia · Cachear por variación (Vary) correctamente · Medir el hit rate real del caché | lista | sí | 3-4 pasos |
| $criterios_clave | La revalidación 304 ahorra payloads (medido) · Vary evita servir contenido mezclado | lista | sí | calidad verificable |
| $prompt_guia | Implementa revalidación condicional con stale-while-revalidate y Vary en mi API | texto | no | "Caché HTTP y headers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La revalidación 304 ahorra payloads (medido)
- [ ] Vary evita servir contenido mezclado

## Ejemplos de prompts

- "Implementa revalidación condicional con stale-while-revalidate y Vary en mi API"
- "Aplica Caché HTTP y headers (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La revalidación 304 ahorra payloads (medido)"
- "Revisa mi webservices-php y dime qué pasos de Caché HTTP y headers me faltan en este nivel"