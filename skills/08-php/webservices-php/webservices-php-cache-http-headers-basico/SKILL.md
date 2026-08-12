---
name: webservices-php-cache-http-headers-basico
description: Caché HTTP y headers · nivel Básico · Servicios web y APIs en PHP. Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. Objetivo del nivel: headers de caché básicos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cache-http-headers"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Caché HTTP y headers — Básico

## Qué hace este skill

Caché correcta por headers: Cache-Control, ETag, stale-while-revalidate y CDN. En este nivel se entrega: **headers de caché básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caché HTTP y headers** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Cache-Control (max-age, private/public)
2. Usar ETag para revalidación
3. Evitar caché de datos privados

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | headers de caché básicos | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Configurar Cache-Control (max-age, private/public) · Usar ETag para revalidación · Evitar caché de datos privados | lista | sí | 3-4 pasos |
| $criterios_clave | Las respuestas públicas se cachean en el navegador · Los datos privados llevan no-cache | lista | sí | calidad verificable |
| $prompt_guia | Configura Cache-Control y ETag en mi API según el tipo de dato | texto | no | "Caché HTTP y headers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las respuestas públicas se cachean en el navegador
- [ ] Los datos privados llevan no-cache

## Ejemplos de prompts

- "Configura Cache-Control y ETag en mi API según el tipo de dato"
- "Aplica Caché HTTP y headers (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Las respuestas públicas se cachean en el navegador"
- "Revisa mi webservices-php y dime qué pasos de Caché HTTP y headers me faltan en este nivel"