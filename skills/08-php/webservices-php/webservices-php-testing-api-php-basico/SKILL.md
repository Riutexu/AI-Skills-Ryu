---
name: webservices-php-testing-api-php-basico
description: Testing de APIs · nivel Básico · Servicios web y APIs en PHP. Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. Objetivo del nivel: primeros tests de endpoints
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "testing-api-php"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Testing de APIs — Básico

## Qué hace este skill

Pruebas de API de verdad: happy paths, errores, contratos y fuzzing controlado. En este nivel se entrega: **primeros tests de endpoints**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear endpoints con cliente HTTP de test
2. Cubrir happy path y errores 4xx
3. Verificar el contrato JSON de respuesta

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primeros tests de endpoints | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Testear endpoints con cliente HTTP de test · Cubrir happy path y errores 4xx · Verificar el contrato JSON de respuesta | lista | sí | 3-4 pasos |
| $criterios_clave | Los endpoints centrales tienen tests de status y forma · Los errores esperados están cubiertos | lista | sí | calidad verificable |
| $prompt_guia | Escribe tests de mi API cubriendo éxito y errores 4xx | texto | no | "Testing de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los endpoints centrales tienen tests de status y forma
- [ ] Los errores esperados están cubiertos

## Ejemplos de prompts

- "Escribe tests de mi API cubriendo éxito y errores 4xx"
- "Aplica Testing de APIs (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los endpoints centrales tienen tests de status y forma"
- "Revisa mi webservices-php y dime qué pasos de Testing de APIs me faltan en este nivel"