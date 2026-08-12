---
name: webservices-php-rate-limiting-php-basico
description: Rate limiting y throttling · nivel Básico · Servicios web y APIs en PHP. Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. Objetivo del nivel: límite simple por IP
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rate-limiting-php"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Rate limiting y throttling — Básico

## Qué hace este skill

Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. En este nivel se entrega: **límite simple por IP**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rate limiting y throttling** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Contar peticiones por IP en un periodo
2. Devolver 429 con Retry-After
3. Exponer el estado en headers (X-RateLimit-*)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | límite simple por IP | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Contar peticiones por IP en un periodo · Devolver 429 con Retry-After · Exponer el estado en headers (X-RateLimit-*) | lista | sí | 3-4 pasos |
| $criterios_clave | El exceso de peticiones recibe 429 con Retry-After · Los headers de límite son correctos | lista | sí | calidad verificable |
| $prompt_guia | Implementa rate limiting por IP con 429, Retry-After y headers X-RateLimit | texto | no | "Rate limiting y throttling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El exceso de peticiones recibe 429 con Retry-After
- [ ] Los headers de límite son correctos

## Ejemplos de prompts

- "Implementa rate limiting por IP con 429, Retry-After y headers X-RateLimit"
- "Aplica Rate limiting y throttling (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El exceso de peticiones recibe 429 con Retry-After"
- "Revisa mi webservices-php y dime qué pasos de Rate limiting y throttling me faltan en este nivel"