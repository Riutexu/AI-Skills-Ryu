---
name: webservices-php-webhooks-callbacks-basico
description: Webhooks y callbacks · nivel Básico · Servicios web y APIs en PHP. Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. Objetivo del nivel: recibir y procesar webhooks
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "webhooks-callbacks"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Webhooks y callbacks — Básico

## Qué hace este skill

Integraciones que avisan: exponer webhooks, verificar firmas, reintentar y entregar de forma idempotente. En este nivel se entrega: **recibir y procesar webhooks**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Webhooks y callbacks** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Exponer un endpoint de webhook
2. Validar el payload y responder 200 rápido
3. Procesar el evento sin bloquear la respuesta

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | recibir y procesar webhooks | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Exponer un endpoint de webhook · Validar el payload y responder 200 rápido · Procesar el evento sin bloquear la respuesta | lista | sí | 3-4 pasos |
| $criterios_clave | El endpoint responde 200 y procesa en background · Los payloads inválidos se rechazan sin efecto | lista | sí | calidad verificable |
| $prompt_guia | Crea un endpoint de webhook que procesa eventos en background y responde rápido | texto | no | "Webhooks y callbacks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El endpoint responde 200 y procesa en background
- [ ] Los payloads inválidos se rechazan sin efecto

## Ejemplos de prompts

- "Crea un endpoint de webhook que procesa eventos en background y responde rápido"
- "Aplica Webhooks y callbacks (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El endpoint responde 200 y procesa en background"
- "Revisa mi webservices-php y dime qué pasos de Webhooks y callbacks me faltan en este nivel"