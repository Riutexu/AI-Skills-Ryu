# Checklist — TypeScript Básico

Marca cada punto cuando lo domines. Para comprobar tus progresos compila con `npx tsc --noEmit` desde la carpeta del proyecto.

## Tipos primitivos e inferencia

- [ ] Anoto `number`, `string`, `boolean`, `null`, `undefined` cuando corresponde.
- [ ] Entiendo cuándo confío en la inferencia de TypeScript y cuándo anoto de forma explícita.
- [ ] Uso `readonly` para arrays y propiedades que no deben mutar.
- [ ] Explico la diferencia entre `string` y el literal `"hola"` en el sistema de tipos.

## Interfaces y type aliases

- [ ] Defino interfaces con nombre descriptivo para objetos de dominio.
- [ ] Declaro propiedades opcionales con `?` solo cuando el dato puede faltar.
- [ ] Defino type aliases para uniones, tuplas y alias simples.
- [ ] Elijo `interface` o `type` según el caso y justifico la elección.

## Funciones tipadas

- [ ] Escribo funciones con parámetros y retorno anotados explícitamente.
- [ ] Tipifico callbacks de `map`, `filter` y `reduce`.
- [ ] Uso valores por defecto y parámetros opcionales del modo correcto.
- [ ] Defino tipos de función reutilizables con alias.

## Arrays y tuplas

- [ ] Escribo `T[]` y `Array<T>` de ambas formas.
- [ ] Sé diferenciar array (longitud variable) de tupla (longitud fija).
- [ ] Usé tuplas con etiquetas legibles: `[id: number, nombre: string]`.

## Compilación

- [ ] Ejecuté `npx tsc --noEmit` sobre las plantillas del nivel y salió sin errores.
- [ ] Corrijo todos los errores del compilador sin recurrir a `any`.
- [ ] No uso `as` para silenciar errores de tipo evitables con narrowing.
- [ ] Tengo un `tsconfig.json` propio con `target`, `module` y `outDir`.

## Práctica final

- [ ] Modelo una entidad nueva (pedido, factura, reserva) con interface.
- [ ] Escribo 3 funciones tipadas que consumen el modelo.
- [ ] Migro un archivo JavaScript pequeño a TypeScript añadiendo tipos.
- [ ] Explico en voz alta el error "La propiedad x no existe en el tipo Y" y cómo resolverlo.