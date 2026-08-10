# Estrategia de versionado de API

Estrategia de referencia para evolucionar una API pública sin romper a los clientes existentes. Documenta esta estrategia en tu contrato OpenAPI y en los ADRs del proyecto.

## 1. Reglas fundamentales

1. Una versión publicada es inmutable: nunca se cambian sus respuestas, status codes ni semántica en silencio.
2. Todo cambio rupturista requiere una versión nueva y un periodo de soporte para la anterior.
3. Los cambios aditivos (nuevos campos opcionales, nuevos endpoints) se pueden publicar en la misma versión sin deprecar nada, siempre que no cambien la semántica existente.
4. La deprecación se anuncia con tiempo (mínimo 3-6 meses) y respuesta 410 Gone si el recurso se elimina.

## 2. Qué es un cambio rupturista

| Tipo de cambio | Rupturista | Ejemplo |
| --- | --- | --- |
| Eliminar un campo de la respuesta | Sí | Quitar `marca` de la respuesta de producto |
| Cambiar el tipo de un campo | Sí | `precio` de number a string |
| Cambiar la semántica de un status | Sí | Devolver 200 en vez de 204 |
| Renombrar un endpoint | Sí | `/productos/:id` -> `/articulos/:id` |
| Añadir un campo opcional | No | Añadir `descuento` nullable |
| Añadir un endpoint nuevo | No | Añadir `GET /productos/:id/reviews` |
| Añadir un valor nuevo a un enum | No* | Añadir estado `devuelto` (*si los clientes lo admiten) |
| Relajar una validación de entrada | No* | Permitir un rango mayor (*verificar contratos) |

## 3. Mecanismo: prefijo de URL (recomendado para REST)

```
/api/v1/...   -> version estable
/api/v2/...   -> version vigente
```

- El prefijo permite que ambas versiones coexistan en la misma infraestructura.
- Anuncia deprecación: cabecera `Deprecation: true` y/o `Sunset: <fecha>` en las respuestas de v1.
- Política de soporte documentada: p. ej. "v1 se retira 6 meses después del lanzamiento de v2".

## 4. Alternativas y cuándo no usarlas

| Mecanismo | Uso adecuado | Desventaja |
| --- | --- | --- |
| Prefijo de URL (`/api/v1`) | Cambios rupturistas claros, API pública | Contaminación de rutas, doble mantenimiento |
| Cabecera personalizada (ej. `API-Version: 2`) | Control explícito por el cliente | Fuera de estándar; los proxies pueden ignorarla |
| Media type (`application/vnd.miapi.v2+json`) | Versión por representación | Compleja de comunicar y depurar |
| Query param (`?version=2`) | Solo para compatibilidad puntual | Fácil de olvidar y cachear por error |
| GraphQL | Evita versionados repetidos | Cambio de paradigma, no REST |

## 5. Retrocompatibilidad pragmática

- **Campos nuevos** en respuestas: añadir siempre `nullable` en OpenAPI para que los clientes estrictos no fallen.
- **Paginación**: nunca cambiar la forma de paginar dentro de la misma versión (offset -> cursor es rupturista).
- **Errores**: añadir miembros nuevos a RFC 7807 es aditivo; cambiar `type` de un error existente es rupturista.
- **IDs**: si migras de `id` numérico a UUID, publica ambos campos una temporada (`id` + `uid`).
- **Fechas**: establecer ISO 8601 desde el día uno; cambiarlo después es rupturista.
- Mantener un **registro de cambios por versión** (`CHANGELOG`) que enumere aditivos, deprecados y rupturistas.

## 6. Checklist de publicación de una versión nueva

- [ ] Contrato OpenAPI completo de la versión nueva, validado con linter
- [ ] Fecha de deprecación de la anterior comunicada con `Sunset` y anuncio público
- [ ] CHANGELOG actualizado clasificando los cambios (aditivo/deprecado/rupturista)
- [ ] Pruebas de contrato (contract tests) de ambas versiones en CI
- [ ] Clientes internos actualizados antes del corte de la versión anterior