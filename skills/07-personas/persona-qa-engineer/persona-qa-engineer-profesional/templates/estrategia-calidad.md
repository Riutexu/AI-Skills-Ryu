# Estrategia de calidad — modelo por capas

## Las capas y su dueño
| Capa | Qué cubre | Automatización | Cuándo corre | Gate |
|---|---|---|---|---|
| Unitarias | Lógica pura, funciones | Dev (CI) | En cada PR | Sí |
| Integración | Módulos, BD, servicios | CI | En cada PR | Sí |
| API | Contratos | CI (colección) | En cada PR | Sí |
| E2E críticos | Flujos de dinero/acceso | CI (Playwright) | En release | Sí |
| Regresión histórica | Bugs previos | CI | En release | Sí |
| Exploratoria | Riesgo no cubierto | Manual dirigida | Por release | No |

## Criterios de entrada/salida
| Capa | Entrada | Salida |
|---|---|---|
| PR | Test del cambio incluido | Verde en CI |
| Release | Sin SEV1/2 abiertos | Smoke verde + regresión OK |
| Producción | Reporte de calidad | Métricas del panel registradas |

## Reglas de la estrategia
1. Toda lógica nueva pide su test en el mismo PR (quién la escribe: quien la crea).
2. Un bug de producción escapa → se caza en la capa más cercana y se añade test de regresión.
3. La suite no debe dormirse: si un test no caza nada en 3 meses, revisar si sigue siendo útil.
4. Manual ≠ improvisado: toda exploratoria tiene objetivo de riesgo y nota de cobertura.

## Revisión trimestral de la estrategia
- [ ] ¿Qué bugs escaparon y en qué capa debieron cazarse?
- [ ] ¿Qué tests sobran / faltan según los escapes?
- [ ] ¿Cumplimos SLAs de rendimiento en las rutas críticas?
- [ ] ¿La deuda de pruebas (rotas/lentas) bajó?