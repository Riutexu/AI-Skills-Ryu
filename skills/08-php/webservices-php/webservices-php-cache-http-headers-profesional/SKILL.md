---
name: webservices-php-cache-http-headers-profesional
description: Caché HTTP y headers · nivel Profesional · Servicios web y APIs en PHP. Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. Objetivo del nivel: arquitectura de caché edge
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cache-http-headers"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Caché HTTP y headers — Profesional

## Qué hace este skill

Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. En este nivel se entrega: **arquitectura de caché edge**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caché HTTP y headers** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la arquitectura de caché (CDN + edge + origin)
2. Gestionar purgas y TTLs por tipo de contenido
3. Proteger el origen ante purgas masivas (stampede)
4. Documentar la estrategia y medir su efecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | arquitectura de caché edge | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar la arquitectura de caché (CDN + edge + origin) · Gestionar purgas y TTLs por tipo de contenido · Proteger el origen ante purgas masivas (stampede) · Documentar la estrategia y medir su efecto | lista | sí | 3-4 pasos |
| $criterios_clave | La CDN absorbe la mayor parte del tráfico (métrica) · Una purga masiva no tumba el origen | lista | sí | calidad verificable |
| $prompt_guia | Diseña la arquitectura de caché edge de mi contenido con CDN, purgas controladas y métricas | texto | no | "Caché HTTP y headers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La CDN absorbe la mayor parte del tráfico (métrica)
- [ ] Una purga masiva no tumba el origen

## Ejemplos de prompts

- "Diseña la arquitectura de caché edge de mi contenido con CDN, purgas controladas y métricas"
- "Aplica Caché HTTP y headers (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La CDN absorbe la mayor parte del tráfico (métrica)"
- "Revisa mi webservices-php y dime qué pasos de Caché HTTP y headers me faltan en este nivel"