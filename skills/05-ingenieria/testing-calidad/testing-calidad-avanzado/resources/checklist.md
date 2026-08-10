# Checklist Nivel Avanzado — Testing y Calidad

Superado el nivel básico. Verifica cada punto antes de dar por cerrada la tarea.

## Infraestructura avanzada

- [ ] `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom` y `jsdom` instalados.
- [ ] Setup de jest-dom cargado vía `setupFiles`.
- [ ] Entorno jsdom y aliases configurados en Vitest.
- [ ] Coverage configurado con provider v8 y umbrales por módulo.

## Tests de componente

- [ ] Render con `render`, interacción con `userEvent` y sincronización con `waitFor`/`findBy`.
- [ ] Queries accesibles (`getByRole`, `getByLabelText`, `getByText`); sin clases CSS ni ids.
- [ ] Estados cubiertos: éxito, error y carga de cada API consumida.
- [ ] Mocks de API en el borde del sistema (`vi.mock` del servicio o MSW).
- [ ] Spies con `vi.spyOn` restaurados en `afterEach`.
- [ ] UI testeada desde la perspectiva de la persona usuaria.

## Tests de hooks e integración

- [ ] Hooks testeados con `renderHook`: montaje, cambio de estado, dependencias y unmount.
- [ ] Integración con BD aislada por test (transacción/truncado + seed) o SQLite en memoria.
- [ ] Datos de seed mínimos y sin estado compartido entre tests.
- [ ] Sin `describe.skip`/`it.skip` ni `only` en la rama compartida.

## Cobertura

- [ ] `vitest run --coverage` ejecutado sin errores.
- [ ] Umbrales cumplidos: statements 80%, branches 70%, functions 80%, lines 80% (o justificados a la baja con razón real).
- [ ] Módulos sin cobertura identificados y reportados.

## Reporte

- [ ] Tests por componente, cobertura y decisiones de mock comunicadas al usuario.