---
name: webservices-php-observabilidad-api-basico
description: Observabilidad de APIs · nivel Básico · Servicios web y APIs en PHP. Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. Objetivo del nivel: logs útiles
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "observabilidad-api"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Observabilidad de APIs — Básico

## Qué hace este skill

Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. En este nivel se entrega: **logs útiles**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Observabilidad de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Loggear requests con código de estado y tiempo
2. Añadir request id para correlacionar
3. Evitar datos sensibles en logs

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | logs útiles | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Loggear requests con código de estado y tiempo · Añadir request id para correlacionar · Evitar datos sensibles en logs | lista | sí | 3-4 pasos |
| $criterios_clave | Cada request tiene request id en la respuesta y el log · No hay datos sensibles en logs (revisado) | lista | sí | calidad verificable |
| $prompt_guia | Añade logging de requests con request id y tiempos a mi API | texto | no | "Observabilidad de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada request tiene request id en la respuesta y el log
- [ ] No hay datos sensibles en logs (revisado)

## Ejemplos de prompts

- "Añade logging de requests con request id y tiempos a mi API"
- "Aplica Observabilidad de APIs (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Cada request tiene request id en la respuesta y el log"
- "Revisa mi webservices-php y dime qué pasos de Observabilidad de APIs me faltan en este nivel"