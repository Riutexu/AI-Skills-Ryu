---
name: webservices-php-cliente-curl-http-profesional
description: cURL y clientes HTTP · nivel Profesional · Servicios web y APIs en PHP. Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. Objetivo del nivel: integración de cliente a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cliente-curl-http"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# cURL y clientes HTTP — Profesional

## Qué hace este skill

Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. En este nivel se entrega: **integración de cliente a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **cURL y clientes HTTP** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el cliente como librería con contratos y errores de dominio
2. Soportar auth (OAuth2 flow completo) y renovación de tokens
3. Instrumentar métricas y tracing por llamada
4. Probar contra un servidor de pruebas local (wiremock)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | integración de cliente a escala | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar el cliente como librería con contratos y errores de dominio · Soportar auth (OAuth2 flow completo) y renovación de tokens · Instrumentar métricas y tracing por llamada · Probar contra un servidor de pruebas local (wiremock) | lista | sí | 3-4 pasos |
| $criterios_clave | El flujo OAuth2 renueva tokens sin interrupción · Cada llamada emite métricas (latencia, estado) | lista | sí | calidad verificable |
| $prompt_guia | Convierte mi cliente HTTP en librería con OAuth2 completo, métricas y pruebas con wiremock | texto | no | "cURL y clientes HTTP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El flujo OAuth2 renueva tokens sin interrupción
- [ ] Cada llamada emite métricas (latencia, estado)

## Ejemplos de prompts

- "Convierte mi cliente HTTP en librería con OAuth2 completo, métricas y pruebas con wiremock"
- "Aplica cURL y clientes HTTP (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El flujo OAuth2 renueva tokens sin interrupción"
- "Revisa mi webservices-php y dime qué pasos de cURL y clientes HTTP me faltan en este nivel"