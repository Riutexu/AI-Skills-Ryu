---
name: webservices-php-cliente-curl-http-avanzado
description: cURL y clientes HTTP · nivel Avanzado · Servicios web y APIs en PHP. Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. Objetivo del nivel: cliente robusto y fakes
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "cliente-curl-http"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# cURL y clientes HTTP — Avanzado

## Qué hace este skill

Consumir APIs de forma robusta: cURL, timeouts, retries, manejo de errores y fakes de test. En este nivel se entrega: **cliente robusto y fakes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **cURL y clientes HTTP** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar retries con backoff y timeouts por intento
2. Cachear respuestas GET con TTL
3. Serializar/deserializar con tipos
4. Inyectar fakes para tests sin red

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | cliente robusto y fakes | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Configurar retries con backoff y timeouts por intento · Cachear respuestas GET con TTL · Serializar/deserializar con tipos · Inyectar fakes para tests sin red | lista | sí | 3-4 pasos |
| $criterios_clave | Un fallo de red se reintenta y degrada con gracia · Los tests usan fakes sin llamadas reales | lista | sí | calidad verificable |
| $prompt_guia | Fortalece mi cliente HTTP: retries con backoff, caché GET y fakes para tests | texto | no | "cURL y clientes HTTP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un fallo de red se reintenta y degrada con gracia
- [ ] Los tests usan fakes sin llamadas reales

## Ejemplos de prompts

- "Fortalece mi cliente HTTP: retries con backoff, caché GET y fakes para tests"
- "Aplica cURL y clientes HTTP (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Un fallo de red se reintenta y degrada con gracia"
- "Revisa mi webservices-php y dime qué pasos de cURL y clientes HTTP me faltan en este nivel"