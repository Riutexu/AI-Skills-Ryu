# Checklist Nivel Básico — Testing y Calidad

Marca cada elemento antes de dar una tarea de testing básico por terminada.

## Infraestructura

- [ ] `vitest` instalado como devDependency.
- [ ] Scripts `test` (watch) y `test:run` (una vez) en el `package.json`.
- [ ] Config de Vitest presente y con entorno correcto (node o jsdom según el proyecto).
- [ ] La suite se ejecuta sin dependencias de red ni servicios externos.

## Calidad de los tests

- [ ] `describe` por módulo y `it` por comportamiento, con nombres legibles.
- [ ] Funciones puras cubiertas: caso feliz + casos límite (vacío, cero, negativos, bordes).
- [ ] Tests deterministas: sin hora actual, aleatoriedad ni estado global compartido.
- [ ] Una aserción clara (o grupo coherente) por test.
- [ ] No se forzó el código de producción para hacer pasar el test.
- [ ] Test enfocado en comportamiento observable, no en detalles de implementación.

## Ejecución

- [ ] `vitest run` ejecutado y toda la suite en verde.
- [ ] Fallos corregidos y comprendidos (leer `expected X received Y`).
- [ ] Cobertura aproximada reportada al usuario.

## Reporte

- [ ] Nº de tests, archivos y estado final comunicados al usuario.