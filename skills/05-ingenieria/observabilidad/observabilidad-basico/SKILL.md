---
name: observabilidad-basico
description: Fundamentos de observabilidad: qué son logs, métricas y traces; logging útil, manejo de errores con contexto y estructura de mensajes
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "observabilidad"
  nivel: basico
  stack: "Node.js"
---

# Observabilidad — Nivel básico

## Qué hace este skill

Guía para los fundamentos: entender los tres pilares (logs, métricas, traces), dejar de usar `console.log` como único medio y escribir logs con contexto (mensaje + datos + nivel) que permitan depurar producción sin adivinar.

## Cuándo usarlo

- Producción falla y necesitas saber "qué pasó" en lugar de revisar código a ciegas.
- Tu código solo tiene `console.log` sueltos sin contexto.
- Quieres crear la base antes de pasar a pino/Prometheus (nivel avanzado).

## Requisitos previos

- Node.js básico y try/catch.

## Workflow paso a paso

1. **Entiende los pilares**: **logs** = eventos con contexto; **métricas** = números agregados (latencia media, error rate); **traces** = recorrido de una petición entre servicios. En este nivel trabajamos los logs.
2. **Escribe mensajes con contexto**: formato `[nivel] mensaje contexto`: `[error] fallo al pagar order=123 userId=7` — no separados, un único string.
3. **Niveles**: `debug` (solo dev), `info` (eventos normales: request completada), `warn` (algo raro pero recuperable), `error` (fallo que rompe el flujo). No uses `console.log` para `error`.
4. **Maneja errores**: en `catch` registra siempre el mensaje + stack + identificadores (userId, orderId, correlación) — nunca solo `console.error(e)` ni comer el error con `catch {}`.
5. **Nunca loguees secretos**: passwords, tokens, headers de auth, datos completos de tarjetas; sanitiza.
6. **Un formateador simple**: crea una utilidad `logger.js` con niveles y timestamp para reemplazar console en todo el proyecto.
7. **No loguees en bucles calientes**: logs por request, no por iteración interna.
8. **Prueba el flujo**: haz fallar un endpoint y verifica que el log identifica la petición exacta.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `framework` | Servidor usado | texto | sí | "Express" |
| `nivel_minimo` | Nivel de log por entorno | texto | no | "info en prod" |
| `campos_contexto` | Datos a incluir | lista | no | userId, orderId, ip |
| `secretos` | Campos que NUNCA loguear | lista | no | token, password, cvv |
| `entornos` | dev/staging/prod | lista | no | dev, prod |

## Reglas y checklist

- [ ] Niveles usados coherentemente (info/warn/error)
- [ ] Mensajes con contexto (identificadores), no strings sueltos
- [ ] catch con stack + contexto; sin `catch {}` vacíos
- [ ] Sin secretos en logs (sanitización documentada)
- [ ] Logger centralizado (no console disperso)
- [ ] Sin logs en bucles calientes
- [ ] Un fallo reproducido y localizado solo con los logs

## Ejemplos de prompts

- "Reemplaza mis console.log por un logger centralizado con niveles"
- "Revisa mis catch y añade contexto: orderId, stack y mensaje claro"
- "Detecta dónde se loguean secretos en mi backend y sanitízalo"
- "Mejora el mensaje de error de pago para localizar la petición exacta"

## Plantillas y recursos

- [templates/logger-simple.js](templates/logger-simple.js) — utilidad de logging con niveles y timestamp
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel