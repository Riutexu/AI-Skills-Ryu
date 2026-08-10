# Contrato de webhooks — Eventos de negocio notificables

Plantilla de referencia para exponer eventos de dominio a integradores externos.
Completa los eventos y adapta la política de entrega a tu plataforma.

## 1. Eventos expuestos

| Evento | Kind | Quién lo emite | Qué contiene `data` |
| --- | --- | --- | --- |
| `pedido.pagado` | negocio | servicio de pagos | id del pedido, total, fecha de pago |
| `pedido.enviado` | negocio | servicio de logística | id del pedido, número de seguimiento |
| `pedido.cancelado` | negocio | servicio de pedidos | id del pedido, motivo |
| `usuario.verificado` | cuenta | servicio de identidad | id del usuario |

Reglas de selección: solo se exponen eventos que un cliente externo puede necesitar en
tiempo real. La consulta de estado puntual se sigue haciendo por REST (GET), el webhook
es una notificación, no una fuente de datos.

## 2. Formato del payload (HTTP POST, Content-Type: application/json)

```json
{
  "id": "evt_9b2f4c1e-8a1d-4e7a-9c63-4f2b0a5d7e31",
  "type": "pedido.pagado",
  "created": "2026-08-04T14:22:10Z",
  "data": {
    "pedidoId": "7f9c1d2e-4b5a-4c3d-9e8f-1a2b3c4d5e6f",
    "total": 129.5,
    "fechaPago": "2026-08-04T14:22:10Z"
  }
}
```

- `id`: UUID único por evento. El receptor lo usa para idempotencia; no procesar dos veces el mismo `id`.
- `type`: identificador de dominio con formato `<entidad>.<verbo en pasado>`.
- `created`: fecha del evento en ISO 8601 UTC.
- `data`: objeto con los datos mínimos del evento. Enriquecer solo lo estable; el resto se consulta por API.

## 3. Firma y seguridad

Cada entrega lleva dos cabeceras:

```
X-Webhook-ID: evt_9b2f4c1e-8a1d-4e7a-9c63-4f2b0a5d7e31
X-Webhook-Signature: t=2026-08-04T14:22:10Z,h=0cf5f2c7a1...
```

- `t`: timestamp de la firma para evitar replay (rechazar entregas con más de 5 minutos de desviación).
- `h`: HMAC-SHA256 del cuerpo con el secreto compartido del receptor:

```
HMAC-SHA256(secreto, t + "." + cuerpo_raw)
```

- El receptor comprueba la firma antes de procesar y rechaza con 400 si no coincide.
- El secreto se rota vía dashboard del proveedor; al rotar, ambos secretos son válidos durante 24 h.

## 4. Política de entrega y reintentos

| Parámetro | Valor recomendado |
| --- | --- |
| Código de aceptación | 202 Accepted (el receptor confirma recepción) |
| Tiempo máximo de respuesta del receptor | 10 segundos |
| Percentil objetivo de latencia | p99 < 10 s |
| Reintentos | 8 máximos (patrón ~1 m, 5 m, 30 m, 2 h, 5 h, 12 h, 1 d, 3 d) |
| Tras agotar reintentos | Evento a dead-letter (columna) y alerta al equipo |
| Duplicados tolerados | Sí, gracias a `X-Webhook-ID` (receptor idempotente) |

El remitente responde 200 solo si el receptor respondió 2xx y firmó correctamente;
en otro caso programa el siguiente reintento con backoff exponencial y jitter.

## 5. Suscripción

El receptor se suscribe indicando las URL y los eventos deseados:

```json
{
  "url": "https://tienda.cliente.com/api/webhooks",
  "eventos": ["pedido.pagado", "pedido.enviado"],
  "secreto": "generado-por-el-proveedor"
}
```

- Verificación inicial: el proveedor envía `POST` con payload `{"type":"webhook.verificado"}` y el receptor responde con `X-Challenge` espejado.
- Lista blanca de IP del proveedor documentada, protocolo HTTPS obligatorio.
- El receptor puede añadir/eliminar suscripciones vía API de administración (nunca por email).

## 6. Ejemplo de entrega completa

```
POST /api/webhooks HTTP/1.1
Host: tienda.cliente.com
Content-Type: application/json
X-Webhook-ID: evt_9b2f4c1e-...
X-Webhook-Signature: t=2026-08-04T14:22:10Z,h=0cf5f2c7a1f...

{"id":"evt_9b2f4c1e-...","type":"pedido.pagado","created":"2026-08-04T14:22:10Z",
 "data":{"pedidoId":"7f9c1d2e-...","total":129.5,"fechaPago":"2026-08-04T14:22:10Z"}}

--> 202 Accepted
```