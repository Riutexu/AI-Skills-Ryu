---
name: typescript-basico
description: Aplica TypeScript básico: tipos primitivos, interfaces y type aliases, funciones tipadas, arrays y tuplas, propiedades opcionales y tsconfig inicial. Úsalo al crear modelos de datos y funciones nuevas con tipos.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "typescript"
  nivel: basico
  stack: "TypeScript 5, Node.js, tsconfig"
---

# TypeScript — Nivel Básico

## Qué hace este skill

Escribe y revisa código TypeScript de nivel inicial: anotación de tipos primitivos, definición de interfaces y type aliases, funciones con parámetros y retornos tipados, arrays y tuplas, y propiedades opcionales. Configura un `tsconfig.json` mínimo y compila verificando que el tipado viaja del modelo a las funciones.

## Cuándo usarlo

- Cuando se crean modelos de datos (usuario, producto, pedido) y las funciones que los manipulan.
- Para migrar un archivo JavaScript a TypeScript y anotar sus tipos.
- Para revisar errores de compilador de tipo "no tiene la propiedad", "no es asignable" o "posiblemente undefined".
- Al iniciar un proyecto TS desde cero con un `tsconfig.json` básico.

## Requisitos previos

- Node.js >= 18 y `npm` o `pnpm`.
- TypeScript instalado en el proyecto: `npm install -D typescript`.
- Nociones de JavaScript moderno: objetos, funciones, arrays y `const`/`let`.
- Conocimiento básico de la terminal para ejecutar `npx tsc`.

## Workflow paso a paso

1. Instalar TypeScript como dependencia de desarrollo y crear el `tsconfig.json` mínimo con `target: "ES2022"` y `outDir`.
2. Modelar los datos con `interface` cuando representen objetos con forma descrita (usuario, producto) y con `type` para uniones, tuplas y alias simples.
3. Anotar propiedades opcionales con `?` solo cuando el dato puede faltar de verdad; no usar `?` para eludir el tipado.
4. Tipar funciones declarando el tipo de cada parámetro y el tipo de retorno explícitamente.
5. Tipar arrays con `T[]` o `Array<T>` y tuplas con `[string, number]` para secuencias de longitud y posición fijas.
6. Usar `readonly` en arrays y propiedades que no deben mutar después de crearse.
7. Crear funciones de fábrica ida y vuelta: datos tipados de entrada, manipulación con ayuda de `map`/`filter`, y retorno también tipado.
8. Compilar con `npx tsc --noEmit` y corregir cada error que el compilador señale, sin usar `any` ni `as`.
9. Reemplazar `as` por narrowing real (comprobación de tipo con `typeof`, `in` o comparación) siempre que sea posible.
10. Probar con datos de ejemplo que el modelo acepta los casos válidos y rechaza los inválidos en tiempo de compilación.
11. Documentar cada interface con un comentario breve que explique el dominio.
12. Verificar que el tsconfig no use `strict: false`; el nivel básico admite degradar solo reglas puntuales, nunca silenciar errores.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `dominio` | Entidad de negocio a modelar | texto | sí | "usuario con id, nombre y email" |
| `estilo_definicion` | Preferencia entre interface y type | texto | no | "interface" |
| `strict_mode` | Si se compila con strict activado | booleano | no | "true" |
| `idioma_codigo` | Idioma de identificadores y comentarios | texto | no | "es" |
| `target_tsconfig` | Target y modulo del tsconfig | texto | no | "ES2022, NodeNext" |
| `incluir_tsconfig` | Si se genera también el tsconfig.json | booleano | no | "true" |

## Reglas y checklist

- [ ] Cero apariciones de `any` y de `as unknown as` en el código entregado.
- [ ] Todos los objetos de dominio tienen una interface o type con nombre en español.
- [ ] Toda función declara parámetros y retorno; no hay funciones sin anotar.
- [ ] Propiedades opcionales usadas solo cuando el dato puede faltar legítimamente.
- [ ] Tuplas usadas solo para secuencias de longitud fija conocida.
- [ ] `readonly` aplicado a arrays y props que no cambian después de la creación.
- [ ] `npx tsc --noEmit` termina sin errores.
- [ ] El tsconfig.json existe con `target` y `module` razonables y `outDir` definido.
- [ ] Ningún error de compilación silenciado con comentarios `@ts-expect-error` innecesarios.

## Ejemplos de prompts

- "Crea un modelo Usuario con id, nombre, email y telefono opcional, y funciones tipadas para mostrar y actualizar su perfil."
- "Migra este archivo javascript.js a typescript.ts añadiendo interfaces y tipos a cada función."
- "Tipa mi lista de productos con una tupla [id, nombre, precio] y crea la función que calcula el total."
- "Explícame este error 'La propiedad x no existe en el tipo Y' y corrígelo sin usar any."
- "Genera el tsconfig.json mínimo para un proyecto de Node con TypeScript y target ES2022."

## Plantillas y recursos

- [Templates](templates/) — `templates/tsconfig.json` (configuración mínima), `templates/modelos.ts` (interfaces y tipos de dominio) y `templates/funciones.ts` (funciones tipadas que consumen los modelos).
- [Checklist de autoevaluación](resources/checklist.md)