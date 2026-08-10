# Checklist — TypeScript Avanzado

Marca cada punto cuando lo domines. Verifica con `npx tsc --noEmit` sobre las plantillas del nivel.

## Generics

- [ ] Escribo funciones genéricas con tipo parámetro y restricciones `extends`.
- [ ] El retorno de mis genéricos conserva el tipo de entrada (sin `any`).
- [ ] Comprendo cuándo TypeScript infiere el tipo genérico y cuándo conviene anotarlo.
- [ ] Creé un cliente de API genérico donde el recurso es un parámetro de tipo.

## Uniones y narrowing

- [ ] Modelo estados con uniones discriminadas y campo literal común.
- [ ] Escribo switch exhaustivo sobre el discriminante.
- [ ] Uso guardas de tipo (`x is T`) para estrechar `unknown`.
- [ ] Aplico `typeof`, `instanceof`, `in` y comparación de literales sin abusar de `as`.

## Utility types y enums

- [ ] Derivo DTOs con `Partial`, `Pick`, `Omit` y `Record`.
- [ ] Defino enums o uniones `as const` con criterio y justificación.
- [ ] Uso `keyof` y `typeof` combinados para derivar tipos de catálogos.
- [ ] Mapeo DTO de API a dominio en funciones de transformación explícitas.

## Tipado asíncrono

- [ ] Tipé `fetch` completo: petición, `response.ok`, parseo y error de red.
- [ ] Defino una clase `ErrorApi` con estado y mensaje.
- [ ] Encadeno `async/await` con tipos que viajan sin perder información.
- [ ] No dejo ningún `Promise<any>` en el código.

## Configuración estricta

- [ ] Requiero `strict: true` en tsconfig propio.
- [ ] Opcionalmente activo `noUncheckedIndexedAccess` y lo asumo en accesos por índice.
- [ ] Corrijo los errores de la plantilla `api-cliente.ts` si los modifico, sin `any`.

## Práctica final

- [ ] Construyo un cliente genérico para otra entidad (pedidos, reservas) sin copiar la plantilla.
- [ ] Escribo una función `paginar<T>` que mantiene el tipo del elemento.
- [ ] Transformo un DTO snake_case a dominio con `Pick`/`Omit`.
- [ ] Explico en voz alta la diferencia entre `unknown` y `any`.