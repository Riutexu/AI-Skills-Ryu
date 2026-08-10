---
name: typescript-avanzado
description: Tipa con TypeScript avanzado: generics, unions discriminadas, utility types (Partial, Pick, Omit), strict mode, narrowing, enums y tipado de async/fetch. Úsalo para clientes de API y dominios con varios estados.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "typescript"
  nivel: avanzado
  stack: "TypeScript 5, NodeNext, fetch, strict mode"
---

# TypeScript — Nivel Avanzado

## Qué hace este skill

Escribe y revisa TypeScript de nivel intermedio: funciones y tipos genéricos, uniones y uniones discriminadas, utility types (`Partial`, `Pick`, `Omit`, `Record`), configuración estricta, narrowing por comprobación, enums y literales, y tipado completo de flujos asíncronos con `fetch`. Produce un cliente de API tipado que reutiliza el mismo modelo en entrada y salida.

## Cuándo usarlo

- Cuando se construye un cliente de API con todos los tipos alineados (petición, respuesta y errores).
- Para modelar estados de una entidad con uniones discriminadas (borrador, publicado, archivado).
- Para transformar DTOs de una API a modelos de dominio con `Pick`/`Omit` y mapeos.
- Para tipar funciones genéricas que operan sobre colecciones: paginar, buscar, agrupar.
- Cuando el proyecto necesita `strict: true` y narrowing correcto en props opcionales y `unknown`.

## Requisitos previos

- Nivel básico dominado: interfaces, tipos, funciones tipadas, tuplas y tsconfig.
- Node.js >= 18 con TypeScript instalado y `module: "NodeNext"`.
- Familiaridad con `fetch` y promesas en JavaScript.
- Nociones de utilidades de TypeScript (`Partial`, `Pick`, `Omit`, `Record`).

## Workflow paso a paso

1. Activar `strict: true` en tsconfig junto con `noUncheckedIndexedAccess` si el acceso por índice es frecuente.
2. Modelar la entidad con interface y sus variantes de estado con uniones discriminadas (campo `estado` como discriminante literal).
3. Definir las funciones genéricas con tipo parámetro: restricción con `extends` y retorno derivado del propio tipo.
4. Derivar tipos de entrada/salida con utility types: `Pick` para lo que envía la API, `Omit` para lo que devuelve, `Partial` para actualizaciones.
5. Tipar el cliente de API con sobrecarga o con un genérico `<Recurso, Respuesta>` que el llamador instancia.
6. Mapear DTO de API a modelo de dominio en funciones de transformación explícita con el retorno anotado.
7. Comprobar `response.ok` y tipar el error de red en una clase `ErrorApi` con campos de estado.
8. Reducir `unknown` con narrowing: `typeof`, `instanceof`, comparación de literal y guardas de tipo (`type predicates`).
9. Usar `as const` y enums con preferencia por objetos `as const` cuando el runtime no los necesita.
10. Sustituir cualquier `any` por `unknown` + narrowing o por un genérico.
11. Compilar con `npx tsc --noEmit`, revisar cada error y verificar que el modelo viaja completo: JSON bruto → DTO → dominio → respuesta de función.
12. Escribir pruebas de tipos rápidas con `@ts-expect-error` en casos que deben fallar.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `entidad` | Entidad principal del cliente de API | texto | sí | "Usuario con estados activo e inactivo" |
| `genericos` | Funciones que deben quedar genéricas | texto | no | "paginador, buscador, agrupador" |
| `estados` | Estados de la entidad para la unión discriminada | texto | no | "borrador, publicado, archivado" |
| `tipos_privilegiados` | Preferencia entre enum o unión `as const` | texto | no | "as const" |
| `strict_extra` | Flags extra de strict: noUncheckedIndexedAccess | texto | no | "noUncheckedIndexedAccess" |
| `idioma_codigo` | Idioma de identificadores y comentarios | texto | no | "es" |

## Reglas y checklist

- [ ] `strict: true` activado y sin `any` en el código entregado.
- [ ] Uniones discriminadas para estados de entidad con campo literal común.
- [ ] Generics restringidos con `extends` y sin pérfida pérdida de tipos por `as any`.
- [ ] `Partial`, `Pick` y `Omit` usados para derivar DTOs de entrada/salida.
- [ ] Cliente fetch con tipos de petición y respuesta parametrizados.
- [ ] `response.ok` comprobado y error tipado en clase propia.
- [ ] Narrowing aplicado a `unknown` y props opcionales sin `as` innecesarios.
- [ ] Ningún `any` silencioso en callbacks de map/filter/reduce.
- [ ] `npx tsc --noEmit` termina sin errores.

## Ejemplos de prompts

- "Crea un cliente de API genérico con GET y POST donde el recurso sea un parámetro de tipo y la respuesta se valide contra el modelo."
- "Modela un Articulo con estados borrador/publicado/archivado usando uniones discriminadas y funciones que solo aceptan el estado correcto."
- "Tipa la transformación de un DTO de la API a mi modelo de dominio con Pick y Omit."
- "Refactoriza este código para strict mode: sustituye los any por unknown con narrowing y guardas de tipo."
- "Dame una función genérica paginar<T> que devuelva una página tipada y no pierda el tipo del elemento."

## Plantillas y recursos

- [Templates](templates/) — `templates/tipos.ts` (uniones discriminadas y utility types), `templates/api-cliente.ts` (cliente fetch genérico reutilizable) y `templates/uso-cliente.ts` (ejemplo completo de consumo).
- [Checklist de autoevaluación](resources/checklist.md)