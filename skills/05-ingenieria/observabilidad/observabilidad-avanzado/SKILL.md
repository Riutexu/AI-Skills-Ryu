---
name: observabilidad-avanzado
description: Logging estructurado JSON con pino, request ids en Express, métricas Prometheus (counters/histograms) y dashboards en Grafana
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "observabilidad"
  nivel: avanzado
  stack: "pino, Prometheus, Grafana, Express"
---

# Observabilidad — Nivel avanzado

## Qué hace este skill

Guía para la instrumentación seria: logging estructurado JSON con pino (niveles, redactors), `request id` propagado por middleware para correlacionar logs de una petición, métricas con client prometheus (counters, histograms) y una primera visualización en Grafana.

## Cuándo usarlo

- Necesitas correlacionar todos los logs de una misma petición en producción.
- Quieres métricas (errores, latencia, throughput) y un dashboard, no solo logs.
- El logging a producción con pino reemplaza al logger casero.

## Requisitos previos

- Nivel básico de este tema.
- Node/Express y Docker (para levantar Prometheus/Grafana local).

## Workflow paso a paso

1. **pino**: `npm install pino pino-http`; crea el logger con `redact` para rutas de secretos (`req.headers.authorization`, `password`) y nivel según entorno.
2. **Request id**: `pino-http` asigna `req.id` automáticamente; añade la cabecera `x-request-id` entrante si la trae el gateway (para correlación end-to-end).
3. **Aserción de logs por middleware**: registra `request completed` con método, ruta, status, duración y `userId` cuando exista; no lo hagas por cada iteración interna.
4. **Errores**: error middleware (Express) que loguea con `req.id`, status, mensaje y stack cuando sea error real, y responde sin filtrar internals al cliente.
5. **Métricas Prometheus**: `prom-client`: counter `http_requests_total` con labels (method, route, status), histogram `http_request_duration_seconds` con buckets (0.05–5 s); expón `/metrics` (no frente a internet; auth de red/vpn).
6. **Middleware de métricas**: cuenta por request usando la ruta normalizada (sin ids dinámicos: `/pedidos/:id`) para que las labels no exploten cardinalidad.
7. **Grafana**: levanta `grafana` + `prometheus` con docker-compose, añade el data source y crea un dashboard: errores por ruta, latencia P95, requests/s, logs recientes (data source Loki si quieres logs).
8. **Alertas simples**: reglas Prometheus: alta tasa de 5xx (>1% en 5m) y latencia P95 > 1 s en las rutas críticas.
9. **Sanidad**: verifica que `/metrics` no filtra datos de usuario y que tus labels son un conjunto finito.
10. Documenta: puertos, endpoints expuestos y cómo reproducir el stack local.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `rutas_criticas` | Rutas a métricas/alertas | lista | sí | "/checkout", "/api/v1/login" |
| `buckets` | Rangos de latencia | lista | no | 0.05..5 s |
| `redact` | Campos sensibles a borrar | lista | sí | authorization, password |
| `stack_local` | ¿Levantar Prometheus+Grafana? | booleano | no | true |
| `gateway` | ¿Existe gateway con request id? | booleano | no | false |

## Reglas y checklist

- [ ] pino con redact de secretos y nivel por entorno
- [ ] Request id en cada log (pino-http o propio)
- [ ] Log de request completado con status y duración
- [ ] Error middleware con req.id y stack reales
- [ ] Métricas por ruta normalizada (cardinalidad controlada)
- [ ] /metrics protegido; sin datos de usuario
- [ ] Grafana con dashboard de latencia/errores/throughput
- [ ] Alertas básicas de 5xx y latencia configuradas

## Ejemplos de prompts

- "Configura pino con redact y pino-http en mi Express"
- "Añade métricas prom-client: counters de errores y histograma de latencia"
- "Normaliza las rutas de mis labels para no explotar la cardinalidad"
- "Crea el docker-compose de Prometheus + Grafana y el dashboard de errores"

## Plantillas y recursos

- [templates/servidor-observable.js](templates/servidor-observable.js) — pino + request id + métricas Prometheus
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel