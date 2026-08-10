---
name: api-design-profesional
description: Arquitectura de APIs a escala: REST vs GraphQL, contratos retrocompatibles, webhooks y event-driven, API gateway, monitoreo, rate limiting con quotas y seguridad OAuth2/API keys.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "api-design"
  nivel: profesional
  stack: "REST, GraphQL, OAuth2, OpenAPI, webhooks"
---

# Diseño de APIs profesional: escala, contratos y evolución

## Qué hace este skill

Cubre las decisiones de arquitectura que separan una API funcional de una plataforma: cuándo elegir REST o GraphQL, gestionar contratos con retrocompatibilidad, exponer webhooks con reintentos y firmas, orquestar acceso tras un API gateway, definir monitoreo con SLAs, aplicar rate limiting y quotas por consumidor, y asegurar el acceso con API keys u OAuth2.

## Cuándo usarlo

- Cuando la API la consumen terceros (integradores, partners) y cada cambio es contractual.
- Cuando necesitas empujar eventos al exterior (webhooks) además de servir respuestas síncronas.
- Cuando crece el número de consumidores y necesitas por-consumidor: límites, cuotas, claves y observabilidad.
- Cuando evalúas GraphQL frente a REST para un producto nuevo.

## Requisitos previos

- Dominar los niveles básico y avanzado de `api-design` (OpenAPI 3, RFC 7807, paginación, versionado).
- Conocer conceptos de colas y mensajería (eventos, retries, dead-letter).
- Noción de OAuth2 (flujos básicos) y de observabilidad (métricas, logs).

## Workflow paso a paso

1. Decidir el paradigma por caso de uso: REST para CRUD y contratos estables; GraphQL para agregaciones flexibles y clientes móviles con múltiples pantallas; nunca ambos para el mismo recurso sin un gateway de mediación.
2. Definir el contrato como convenio firmado: cada versión pública se congela; los cambios aditivos se añaden como no rupturistas y los rupturistas lanzan una versión nueva con solapamiento.
3. Inventariar los eventos de dominio y decidir cuáles se exponen como webhooks (eventos de negocio notificables) frente a polling.
4. Diseñar el contrato de webhook: payload con `id` de evento, `type`, `timestamp`, `data`, plus la política de firmas (`X-Signature` con HMAC) y de reintentos con backoff y dead-letter.
5. Definir la entrega: confirmación rápida 202, `X-Webhook-ID` para idempotencia y un endpoint de delivery sin estado asumido.
6. Colocar un API gateway para: terminación TLS, autenticación unificada, rate limiting por consumidor, transformación y ruteo de versiones.
7. Configurar rate limiting y quotas por consumidor: límites de ráfaga y de cuota diaria/mensual con cabeceras de estado y respuestas 429/403 con `Retry-After`.
8. Implementar monitoreo: latencia por percentil (p50/p95/p99), tasa de errores, disponibilidad y al menos un SLO por nivel de servicio (plan free vs plan business).
9. Definir la seguridad del acceso: API keys para integraciones servidor-a-servidor (con scopes), OAuth2 con authorization code + PKCE para clientes que actúan en nombre de usuarios.
10. Documentar el modelo de evolución: calendario de deprecación (anuncio, doble soporte, desactivación), changelog público y guía de migración.
11. Validar los contratos con pruebas de contrato (pact o probes) y revisar la estrategia contra los checklist del nivel antes de publicar.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `paradigma` | Modelo de intercambio principal | string | sí | `rest` |
| `eventosWebhook` | Eventos de dominio expuestos por webhook | array | sí | `['pedido.pagado', 'pedido.enviado']` |
| `algoritmoFirma` | Algoritmo para firmar webhooks | string | no | `hmac-sha256` |
| `retriesMaximos` | Número máximo de reintentos de entrega | number | no | `8` |
| `ventanaCuota` | Período de la cuota por consumidor | string | sí | `diaria` |
| `maximoRafaga` | Límite de ráfaga por segundo | number | sí | `10` |
| `maximoCuota` | Total de peticiones por ventana | number | sí | `10000` |
| `percentilesSlo` | Percentiles a monitorear | array | no | `['p50', 'p95', 'p99']` |
| `objetivoSlo` | Meta de disponibilidad | string | sí | `99.9%` |
| `mecanismoAuth` | Sistema de autenticación externo | string | sí | `oauth2-pkce` |

## Reglas y checklist

- [ ] REST y GraphQL se eligen por caso de uso; el mismo recurso no se expone por ambos sin mediación explícita.
- [ ] Los contratos públicos versionados nunca se cambian en silencio: aditivos van a la misma versión, rupturistas crean versión nueva con solapamiento.
- [ ] Los webhooks: responden 202, llevan `X-Webhook-ID` idempotente, se firman con HMAC secreto compartido y se reintentan con backoff exponencial hasta un máximo, después dead-letter.
- [ ] El receptor del webhook no debe poder duplicar procesamiento: el `id` del evento es único por remitente.
- [ ] El gateway concentra auth, TLS, rate limiting y ruteo de versiones; los servicios internos no exponen puertos públicos.
- [ ] Cada consumidor tiene identificación propia: API key u OAuth2, con scopes mínimos y revocación inmediata.
- [ ] Rate limiting con dos capas: ráfaga (429) y cuota (403 o 429 con `Retry-After`), ambas con cabeceras de consumo restante.
- [ ] Monitoreo con p50/p95/p99 de latencia, tasa de errores y disponibilidad contra un SLO declarado por plan.
- [ ] Deprecación planificada: anuncio, doble soporte, desactivación, con changelog y guía de migración públicos.
- [ ] Seguridad siguiendo OWASP API Security Top 10: inventario de endpoints, autenticación no requerida prohibida en producción.

## Ejemplos de prompts

- "Analiza si esta API de catálogo debe ser REST o GraphQL considerando tres clientes con necesidades de datos distintas."
- "Diseña el contrato de webhook para el evento pedido.pagado: payload, firma HMAC, reintentos con backoff y política de dead-letter."
- "Define la estrategia de versionado retrocompatible: qué cambios son aditivos, cuáles rupturistas y cómo se solapan las versiones."
- "Configura rate limiting y quotas por consumidor tras un API gateway con cabeceras de consumo y respuestas 429/403."
- "Elabora el plan de monitoreo y SLAs: métricas p50/p95/p99, disponibilidad 99.9% y alertas."
- "Diseña el modelo de acceso: API keys con scopes para integraciones y OAuth2 con PKCE para usuarios finales."

## Plantillas y recursos

- `templates/webhook-esquema.md` — contrato de webhook: payload, eventos, firma, reintentos y ejemplo de entrega.
- `templates/estrategia-versionado.md` — clasificación de cambios, proceso de deprecación y cronograma de ejemplo.
- Checklist del nivel: `resources/checklist.md`.