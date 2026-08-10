# Testing y Calidad

Skills en español para construir una estrategia de testing sólida y sostenible: desde los primeros tests unitarios con Vitest hasta E2E con Playwright, mutation testing y presupuestos de cobertura. Cada nivel incluye plantillas ejecutables y checklist de calidad para verificar que los tests aportan valor real.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `testing-calidad-basico` | Básico | Tipos de testing, assertions Vitest, tests de funciones puras, ejecución con watch |
| `testing-calidad-avanzado` | Avanzado | React Testing Library, mocks/spies, cobertura, tests de integración con BD, hooks |
| `testing-calidad-profesional` | Profesional | TDD, pirámide y presupuestos, Playwright E2E, visual regression, mutation testing, supertest, CI |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| unidades bajo test | Funciones puras y utilidades | Componentes React, hooks, integraciones | Aplicación completa + APIs + navegadores |
| herramientas | Vitest | Vitest + Testing Library | Playwright, Stryker, supertest |
| cobertura | Sin requisito formal | Umbral por módulo (80%+) | Presupuesto por capa y en CI |
| metodología | Test después del código | Tests durante el desarrollo | TDD rojo-verde-refactor |
| datos de prueba | literales inline | Mocks controlados | Fixtures y factories versionados |
| ejecución | Local con watch | Local + reportes de coverage | Multi-navegador en CI, pararelos |

## Instalación

Copia la carpeta del tema (o solo los niveles que necesites) dentro de tu árbol de skills de opencode:

```powershell
# Proyecto
Copy-Item -Recurse "05-ingenieria\testing-calidad" ".opencode\skills\"

# Global (Windows)
Copy-Item -Recurse "05-ingenieria\testing-calidad" "$env:USERPROFILE\.config\opencode\skills\"
```

En Linux/macOS el destino global es `~/.config/opencode/skills/`. Reinicia opencode tras copiar los archivos para que se carguen los skills.

## Ruta de aprendizaje

1. **Básico**: escribe tests unitarios legibles con Vitest sobre funciones puras y entiende qué aporta cada tipo de test.
2. **Avanzado**: cubre la interfaz de usuario real con Testing Library (testing accesible), aísla dependencias con mocks y genera reportes de cobertura.
3. **Profesional**: aplica TDD, dimensiona la pirámide de testing con presupuestos, automatiza E2E y visual regression en CI y refuerza la confianza con mutation testing.

Cada checklist del nivel anterior se da por superada antes de pasar al siguiente.

## Referencias clave

- [Documentación oficial de Vitest](https://vitest.dev/guide/)
- [Testing Library (React)](https://testing-library.com/docs/react-testing-library/intro/)
- [Documentación de Playwright](https://playwright.dev/docs/intro)
- [Stryker (mutation testing)](https://stryker-mutator.io/docs/)
- [Jest: testing de hooks con wrappers](https://jestjs.io/docs/tutorial-react#testing-hooks)
- [Pirámide de testing de Agile Testing](https://martinfowler.com/articles/practical-test-pyramid.html)