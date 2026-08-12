---
name: webservices-php-observabilidad-api-profesional
description: Observabilidad de APIs · nivel Profesional · Servicios web y APIs en PHP. Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. Objetivo del nivel: tracing y correlación completa
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "observabilidad-api"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Observabilidad de APIs — Profesional

## Qué hace este skill

Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. En este nivel se entrega: **tracing y correlación completa**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Observabilidad de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar OpenTelemetry (traces y context propagation)
2. Correlacionar trace con logs y métricas
3. Definir SLOs y error budget con política de acción
4. Realizar un drill de observabilidad (fallo intencionado detectado)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | tracing y correlación completa | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Integrar OpenTelemetry (traces y context propagation) · Correlacionar trace con logs y métricas · Definir SLOs y error budget con política de acción · Realizar un drill de observabilidad (fallo intencionado detectado) | lista | sí | 3-4 pasos |
| $criterios_clave | Un request completo se sigue de punta a punta por trace · El drill de observabilidad detecta el fallo intencional | lista | sí | calidad verificable |
| $prompt_guia | Integra OpenTelemetry en mi API con correlación trace-log-métrica y drill de observabilidad | texto | no | "Observabilidad de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un request completo se sigue de punta a punta por trace
- [ ] El drill de observabilidad detecta el fallo intencional

## Ejemplos de prompts

- "Integra OpenTelemetry en mi API con correlación trace-log-métrica y drill de observabilidad"
- "Aplica Observabilidad de APIs (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Un request completo se sigue de punta a punta por trace"
- "Revisa mi webservices-php y dime qué pasos de Observabilidad de APIs me faltan en este nivel"