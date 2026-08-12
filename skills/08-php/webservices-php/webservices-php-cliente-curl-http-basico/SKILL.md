---
name: webservices-php-cliente-curl-http-basico
description: cURL y clientes HTTP · nivel Básico · Servicios web y APIs en PHP. Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. Objetivo del nivel: peticiones HTTP con cURL
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cliente-curl-http"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# cURL y clientes HTTP — Básico

## Qué hace este skill

Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. En este nivel se entrega: **peticiones HTTP con cURL**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **cURL y clientes HTTP** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Hacer GET/POST con curl_init/curl_exec
2. Manejar headers, códigos de estado y body
3. Envolver el cliente en una función reutilizable

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | peticiones HTTP con cURL | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Hacer GET/POST con curl_init/curl_exec · Manejar headers, códigos de estado y body · Envolver el cliente en una función reutilizable | lista | sí | 3-4 pasos |
| $criterios_clave | Las llamadas tienen timeout y capturan errores · El cliente devuelve datos estructurados, no crudos | lista | sí | calidad verificable |
| $prompt_guia | Crea un cliente cURL reutilizable para consumir la API de X con manejo de errores | texto | no | "cURL y clientes HTTP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las llamadas tienen timeout y capturan errores
- [ ] El cliente devuelve datos estructurados, no crudos

## Ejemplos de prompts

- "Crea un cliente cURL reutilizable para consumir la API de X con manejo de errores"
- "Aplica cURL y clientes HTTP (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Las llamadas tienen timeout y capturan errores"
- "Revisa mi webservices-php y dime qué pasos de cURL y clientes HTTP me faltan en este nivel"