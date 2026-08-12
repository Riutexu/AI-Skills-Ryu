# Plan de regresión — plantilla por release

## Release: <versión> · Fecha objetivo: <fecha>

## Cambios incluidos y riesgo colateral
| PR | Feature | Áreas que PODRÍA romper |
|---|---|---|
| #80 | Nueva pasarela | Pagos, facturas, reembolsos |
| #81 | Refactor de sesión | Login, checkout, APIs |

## Suites a ejecutar
| Suite | Contenido | Automatizada | Gate |
|---|---|---|---|
| Smoke CI | Rutas críticas | ✅ | Sí |
| Funcional | Casos clave por feature | ⚠️ manual | Sí |
| Regresión histórica | BUG-12, BUG-34, BUG-56 | ✅ | Sí |
| API | Colección postman | ✅ | Sí |
| Compatibilidad | Chrome/Win, Safari/iOS | Manual | No |

## Criterio de salida
- [ ] Smoke CI verde
- [ ] Sin SEV1/SEV2 abiertos
- [ ] Históricos re-probados
- [ ] Riesgos conocidos documentados
- [ ] Reporte de calidad entregado