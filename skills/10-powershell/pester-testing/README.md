# Pester: testing de scripts

Testing de scripts con Pester 5: Describe/It, Mock, cobertura y la disciplina de una suite de 18 tests como la de RYU-TUI.

**Stack:** Pester 5, PSScriptAnalyzer, pwsh 7 · **Familia:** PowerShell y automatización de Windows (10-powershell)

| Tema | Resumen | Niveles |
|---|---|---|
| **Primer test con Describe/It** | Escribir el primer test real: estructura Describe/It/Should y cómo correrlo con Invoke-Pester. | [basico](/pester-testing-primer-test-describe-it-basico/) · [avanzado](/pester-testing-primer-test-describe-it-avanzado/) · [profesional](/pester-testing-primer-test-describe-it-profesional/) |
| **Assertions Should** | Todas las formas de Should: -Be, -BeTrue, -Contain, -Throw, -BeLike y cuándo usar cada una. | [basico](/pester-testing-assertions-should-basico/) · [avanzado](/pester-testing-assertions-should-avanzado/) · [profesional](/pester-testing-assertions-should-profesional/) |
| **Mocks y fakes** | Aislar el código bajo test: Mock de cmdlets y funciones, verificación de llamadas y parámetros. | [basico](/pester-testing-mocks-fakes-basico/) · [avanzado](/pester-testing-mocks-fakes-avanzado/) · [profesional](/pester-testing-mocks-fakes-profesional/) |
| **Parámetros de test** | Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. | [basico](/pester-testing-parametros-test-basico/) · [avanzado](/pester-testing-parametros-test-avanzado/) · [profesional](/pester-testing-parametros-test-profesional/) |
| **Antes y después (BeforeAll)** | Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. | [basico](/pester-testing-beforeall-setup-basico/) · [avanzado](/pester-testing-beforeall-setup-avanzado/) · [profesional](/pester-testing-beforeall-setup-profesional/) |
| **Testing de funciones sin archivos** | Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. | [basico](/pester-testing-testing-funciones-sin-archivos-basico/) · [avanzado](/pester-testing-testing-funciones-sin-archivos-avanzado/) · [profesional](/pester-testing-testing-funciones-sin-archivos-profesional/) |
| **Cobertura de código** | Medir qué parte del código ejecutan los tests con -CodeCoverage y usar el número con criterio. | [basico](/pester-testing-cobertura-codigo-basico/) · [avanzado](/pester-testing-cobertura-codigo-avanzado/) · [profesional](/pester-testing-cobertura-codigo-profesional/) |
| **Tests de integración** | Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. | [basico](/pester-testing-tests-integracion-basico/) · [avanzado](/pester-testing-tests-integracion-avanzado/) · [profesional](/pester-testing-tests-integracion-profesional/) |
| **Organización de suites** | Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. | [basico](/pester-testing-organizacion-suites-basico/) · [avanzado](/pester-testing-organizacion-suites-avanzado/) · [profesional](/pester-testing-organizacion-suites-profesional/) |
| **CI con tests** | Los tests en el pipeline: correr la suite en GitHub Actions, artefactos y gate de calidad. | [basico](/pester-testing-ci-tests-basico/) · [avanzado](/pester-testing-ci-tests-avanzado/) · [profesional](/pester-testing-ci-tests-profesional/) |
| **Tests de bootstrap/instalación** | Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. | [basico](/pester-testing-tests-bootstrap-instalacion-basico/) · [avanzado](/pester-testing-tests-bootstrap-instalacion-avanzado/) · [profesional](/pester-testing-tests-bootstrap-instalacion-profesional/) |
| **Convenciones de la suite (18 tests estilo RYU-TUI)** | El estándar de la suite de RYU-TUI: qué cubren los 18 tests, sus convenciones y cómo crecen sin romperse. | [basico](/pester-testing-convenciones-suite-18-tests-basico/) · [avanzado](/pester-testing-convenciones-suite-18-tests-avanzado/) · [profesional](/pester-testing-convenciones-suite-18-tests-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/10-powershell.json](../../catalogos/10-powershell.json).