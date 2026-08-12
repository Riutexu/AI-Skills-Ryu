# Threat model — plantilla STRIDE por feature

## Feature: <nombre> · Fecha: · Dueño: · Estado de la revisión: previa a codificar / pre-release

## Componentes y flujo
```
[Usuario] --> [Web] --> [API] --> [BD]
                    \--> [Servicio de pagos externo]
```

## Threat model STRIDE
| STRIDE | Amenaza | Probabilidad | Impacto | Mitigación requerida | Estado |
|---|---|---|---|---|---|
| Spoofing | Suplantar usuario/servicio | Media | Alto | Auth con MFA, firmas en webhooks | ✅ |
| Tampering | Modificar datos en tránsito/reposo | Baja | Alto | TLS, validación en servidor | ✅ |
| Repudiation | Negar acciones (pagos) | Media | Medio | Logs de auditoría inmutables | 🔲 |
| Information disclosure | Fuga de datos de otros usuarios | Media | Alto | Control de acceso por entidad (IDOR) | 🔲 |
| DoS | Saturar con requests | Alta | Medio | Rate limiting + límites | ✅ |
| Elevation | Escalar a admin | Baja | Crítico | RBAC verificado + tests de permisos | 🔲 |

## Decisiones
- Mitigaciones requeridas: <lista> → se implementan en la feature (no después).
- Riesgos aceptados (con justificación): <...> → aprobado por <rol>.

## Cómo se verifica
- [ ] Tests de autorización por rol (el usuario B no ve datos de A)
- [ ] Rate limiting probado
- [ ] Logs de auditoría revisados en el flujo de pago
- [ ] Revisión de seguridad con la checklist avanzada

## Lección de esta revisión
> <qué aprenderá el equipo para la próxima feature>