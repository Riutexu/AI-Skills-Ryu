---
name: webservices-php-observabilidad-api-avanzado
description: Observabilidad de APIs · nivel Avanzado · Servicios web y APIs en PHP. Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. Objetivo del nivel: métricas y dashboards
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "observabilidad-api"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Observabilidad de APIs — Avanzado

## Qué hace este skill

Saber qué pasa: logs estructurados, métricas, tracing y dashboards de negocio. En este nivel se entrega: **métricas y dashboards**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Observabilidad de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Exponer métricas Prometheus (latencia, errores, tráfico)
2. Definir métricas de negocio (pedidos, registros)
3. Montar dashboards con SLOs visibles
4. Alertas por error rate y latencia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | métricas y dashboards | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Exponer métricas Prometheus (latencia, errores, tráfico) · Definir métricas de negocio (pedidos, registros) · Montar dashboards con SLOs visibles · Alertas por error rate y latencia | lista | sí | 3-4 pasos |
| $criterios_clave | Las métricas se exponen y consultan en el dashboard · Las alertas están configuradas y probadas | lista | sí | calidad verificable |
| $prompt_guia | Instrumenta mi API con métricas Prometheus, dashboard de SLOs y alertas | texto | no | "Observabilidad de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las métricas se exponen y consultan en el dashboard
- [ ] Las alertas están configuradas y probadas

## Ejemplos de prompts

- "Instrumenta mi API con métricas Prometheus, dashboard de SLOs y alertas"
- "Aplica Observabilidad de APIs (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Las métricas se exponen y consultan en el dashboard"
- "Revisa mi webservices-php y dime qué pasos de Observabilidad de APIs me faltan en este nivel"