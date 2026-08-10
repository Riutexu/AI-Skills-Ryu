# Checklist — api-design-avanzado

## Convenciones y naming

- [ ] Convenciones escritas: plurales, kebab-case, path params, ISO 8601, UUID
- [ ] Los nombres son consistentes entre todos los recursos
- [ ] Los ids usan un formato único declarado en el contrato (UUID)

## Versionado

- [ ] Estrategia declarada: prefijo de URL, cabecera o media type
- [ ] La versión vigente se sirve en `/api/v1`
- [ ] Un cambio rupturista en una versión publicada nunca se aplica en silencio
- [ ] Mecanismo de anuncio de deprecaciones definido

## Paginación, filtros y orden

- [ ] Cursor pagination en recursos de alta escritura o grandes
- [ ] Offset solo en conjuntos pequeños y estables
- [ ] Respuestas paginadas con `data` y `nextCursor` (o `total`/`page`/`limit`)
- [ ] Filtros con lista blanca de campos por recurso
- [ ] `sort` restringido a campos ordenables con dirección explícita (`campo:asc`)

## Errores RFC 7807

- [ ] Todo error operacional usa `type`, `title`, `status`, `detail` e `instance`
- [ ] `Content-Type: application/problem+json` en las respuestas de error
- [ ] Errores de validación con miembro de dominio `errors` (campo + mensaje)
- [ ] 429 incluye `Retry-After`

## Contrato OpenAPI 3

- [ ] `paths` documentan todas las rutas con sus respuestas 2xx y errores
- [ ] Parámetros reutilizables definidos en `components.parameters`
- [ ] Esquemas referenciados con `$ref` sin duplicación
- [ ] `securitySchemes` declarados y aplicados por defecto o por ruta
- [ ] El contrato pasa un linter (spectral o redocly) en CI
- [ ] El servidor valida entradas desde los mismos esquemas del contrato