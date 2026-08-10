---
name: testing-calidad-avanzado
description: Testing de componentes React con Testing Library, mocks con vi.mock, cobertura, integracion con base de datos y tests de hooks. Usar en proyectos React con UI real que testear.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "testing-calidad"
  nivel: avanzado
  stack: "vitest, react, testing-library, jsdom, msw, testcontainers"
---

# Testing Avanzado: Componentes, Hooks e Integración

## Qué hace este skill

Lleva el testing a la interfaz y a las fronteras del sistema: prueba componentes React de la forma en que una persona usuaria los usa (queries accesibles), aísla APIs y módulos con mocks/spies, mide la cobertura con umbrales por módulo, testea hooks con wrappers y hooks de testing-library, y cubre integraciones reales con base de datos de test.

## Cuándo usarlo

- Al escribir tests para componentes React (render, interacción, estados vacíos y de error).
- Al testear hooks personalizados y su ciclo de vida.
- Cuando la UI depende de una API: mock de fetch/modulos o red controlada con MSW.
- Al querer reportes de cobertura con umbrales que bloqueen regresiones.
- Al testear integraciones con base de datos (SQLite de test o Postgres en contenedor).

## Requisitos previos

- Nivel básico de testing superado (Vitest + funciones puras).
- Proyecto React (Vite o Next) con `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom` y `jsdom` instalados.
- Conceptos: renderizado, hooks, props, estado local.
- Para integración con BD: sabes qué base usa tu proyecto (SQLite/Postgres).

## Workflow paso a paso

1. Verifica dependencias: `npm i -D @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom` y activa jest-dom en la config (setup file, ver plantilla).
2. Prepara la config: entorno `jsdom`, `setupFiles` con `jest-dom`, alias de imports y `coverage` con provider v8 (ver `templates/vitest.coverage.config.ts`).
3. Elige el componente con más lógica de estado (formularios, listas con filtros, estados de carga/error) y lee su implementación antes de testear.
4. Escribe el test de componente: `render(<Componente />)`, interacción con `userEvent` (no `fireEvent` salvo casos puntuales), y assertions accesibles por texto visible/rol (`getByRole`, `getByLabelText`, `getByText`), nunca por clases CSS o ids internos.
5. Si el componente consume API, mockea en el borde correcto: `vi.mock` del módulo de servicio, o mejor red con MSW (`msw/node`), y cubre al menos: éxito, error y carga.
6. Para spies de comportamiento interno usa `vi.spyOn(objeto, "metodo")` y restaura con `afterEach(() => vi.restoreAllMocks())`.
7. Testea el hook con `renderHook` y `waitFor`/`act` de `@testing-library/react`; cubre mount, actualización y cleanup.
8. Si hay integración con BD: configura una BD de test (SQLite en memoria o Postgres con testcontainers) y data de seed mínima; cada test limpia y re-siembra.
9. Ejecuta la suite, genera cobertura con `vitest run --coverage` y ajusta los umbrales de `templates/vitest.coverage.config.ts` a la realidad del módulo (no los bajes para "pasar").
10. Revisa que los tests fallan por el comportamiento, no por detalles de implementación: si el test se rompe solo por un cambio de clase CSS, está mal escrito.
11. Marca el checklist avanzado y reporta: tests por componente, cobertura por módulo y decisiones de mock tomadas.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `ruta_componente` | Ruta del componente a testear | string | Sí | `src/components/FormPago.tsx` |
| `entorno` | jsdom o node | string | No | `jsdom` |
| `mocks_api` | Modulos a mockear con vi.mock | array | No | `["src/services/pagos.ts"]` |
| `usuario_eventos` | Si usar userEvent realista | boolean | No | `true` |
| `cobertura_umbral` | Umbral de cobertura por módulo (%) | number | No | `80` |
| `con_bd` | Si el test usa base de datos real | boolean | No | `false` |
| `motor_bd` | sqlite | postgres | string | No | `postgres` |
| `hook_a_probar` | Ruta del hook bajo prueba | string | No | `src/hooks/usePaginacion.ts` |

## Reglas y checklist

- [ ] Dependencias instaladas: testing-library react, user-event, jest-dom, jsdom.
- [ ] Setup de jest-dom cargado en la config (setupFiles).
- [ ] Queries accesibles: `getByRole`/`getByLabelText`/`getByText`; sin queries por clase o id CSS.
- [ ] Interacción con `userEvent` (eventos realistas) y `waitFor` para lo asíncrono.
- [ ] UI testeada como persona usuaria: qué ve, con qué interactúa, qué resultado espera.
- [ ] Mocks limitados al borde del sistema; spied con `vi.spyOn` y restaurados en `afterEach`.
- [ ] Estados cubiertos: éxito, error y carga para cada API mockeada.
- [ ] Hooks con `renderHook`: montaje, actualización de estado y cleanup.
- [ ] BD de test aislada por test (transacción o truncado + seed) y sin datos residuales.
- [ ] Cobertura generada y umbrales coherentes (no rebajados para pasar).
- [ ] Tests de UI no dependen de clases CSS ni estructura interna del DOM.

## Ejemplos de prompts

- "Instala las dependencias de Testing Library y configura el entorno jsdom de este proyecto."
- "Escribe el test del componente `FormPago`: renderiza, escribe en los campos con userEvent, valida el error de tarjeta y simula envío exitoso mockeando `src/services/pagos.ts`."
- "Testea el hook `usePaginacion` con renderHook cubriendo página inicial, cambio de página y reset."
- "Configura cobertura con umbral de 80% por módulo y dime qué módulos quedan por debajo."
- "Prepara tests de integración para `repositorioUsuarios` usando Postgres en testcontainer y semilla mínima por test."

## Plantillas y recursos

- [Config de cobertura de Vitest (v8)](templates/vitest.coverage.config.ts)
- [Test de componente React con mock](templates/componente-formulario.test.tsx)
- [Test de hook con renderHook](templates/hook-usePaginacion.test.tsx)
- [Checklist de verificación del nivel avanzado](resources/checklist.md)