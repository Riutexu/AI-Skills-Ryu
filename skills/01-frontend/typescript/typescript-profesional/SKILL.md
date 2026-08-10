---
name: typescript-profesional
description: Diseña la arquitectura de tipos de TypeScript profesional: tipos condicionales (extends/infer), template literal types, validación con Zod, declaration merging y tipado por dominios. Úsalo en sistemas con contratos complejos y muchas entidades.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "typescript"
  nivel: profesional
  stack: "TypeScript 5, Zod 3/4, tsc, dominio tipado"
---

# TypeScript — Nivel Profesional

## Qué hace este skill

Construye el sistema de tipos completo de una aplicación profesional con TypeScript y Zod: tipos condicionales con `extends`/`infer`, template literal types para rutas y eventos, esquemas Zod como única fuente de verdad del runtime, declaration merging para ampliar librerías, arquitectura de tipos por dominios y control del rendimiento de compilación con tipos pesados.

## Cuándo usarlo

- Cuando se define el contrato de tipado de toda una aplicación: rutas, eventos, API y modelos de dominio.
- Para validar en runtime datos que llegan de fuera (fetch, formularios, storages) con Zod e inferir sus tipos.
- Para ampliar tipos de librerías de tercera parte sin tocar sus fuentes (declaration merging).
- Para tipar rutas, patrones y eventos con template literal types (endpoint tipado, evento tipado).
- Cuando el proyecto crece y el compilador tarda por tipos que se recomputan.

## Requisitos previos

- Niveles básico y avanzado dominados: generics, utility types, narrowing, strict mode y cliente de API genérico.
- TypeScript 5+ instalado y `module: "NodeNext"` en tsconfig.
- Zod instalado: `npm install zod`.
- Nociones de testing de tipos: `@ts-expect-error` y `expectTypeOf`.

## Workflow paso a paso

1. Dividir los tipos por dominio de negocio (usuario, pedido, carrito) en carpetas propias; cada dominio exporta sus modelos, esquemas y funciones.
2. Declarar en cada dominio el modelo con interfaces y los estados; los tipos derivados (crear, actualizar, salida pública) salen de utility types.
3. Crear esquemas Zod por entidad como única fuente de verdad: `z.object({...})` con mensajes en español y banderas de transformación.
4. Inferir los tipos de los esquemas con `z.infer<typeof esquema>` y usarlos en funciones; eliminar interfaces duplicadas.
5. Tipar rutas y eventos con template literal types: `type Ruta = \`/api/${Recurso}/${Id}\`` y mapeo por cliente.
6. Escribir tipos condicionales con `extends` + `infer` para los casos de transformación: extraer el elemento de un array, el resultado de una promesa, la forma de un objeto.
7. Ampliar tipos externos con declaration merging cuando la librería los define como interfaces (extender la sesión de una librería de auth, por ejemplo).
8. Centralizar en cada dominio la transformación DTO ↔ dominio con esquemas de parseo en vez de casteos.
9. Medir el rendimiento de tipos: `tsc --extendedDiagnostics`, evitar tipos recursivos descontrolados y simplificar los condicionales innecesarios.
10. Testear los tipos críticos con `@ts-expect-error` en casos negativos y `expectTypeOf` (vitest) en casos positivos.
11. Compilar con `strict: true` y `noUncheckedIndexedAccess`; verificar cero `any` en el código de aplicación.
12. Documentar en el README del dominio los invariantes que los tipos garantizan (qué errores quedan fuera de compilación).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `dominios` | Lista de dominios de negocio a tipar | texto | sí | "usuario, pedido, carrito" |
| `runtime_validacion` | Biblioteca de validación de runtime | texto | no | "zod" |
| `librerias_a_extender` | Librerías con interfaces a ampliar | texto | no | "libreria-auth" |
| `tipos_condicionales` | Casos documentados de extends/infer | texto | no | "extraer elemento de Promise<T>" |
| `idioma_codigo` | Idioma de identificadores y comentarios | texto | no | "es" |
| `metricas_tsc` | Si se reporta el tiempo de compilación con extendedDiagnostics | booleano | no | "true" |

## Reglas y checklist

- [ ] Los tipos viven por dominio de negocio y cada dominio exporta una API pública explícita.
- [ ] Zod es la única fuente de verdad para datos que entran del exterior; nada de `as` en fronteras de entrada.
- [ ] Ningún `any` en el código de aplicación ni en las fronteras de validación.
- [ ] Tipos condicionales con `infer` solo donde aportan: sus resultados se verifican con pruebas de tipo.
- [ ] Template literal types usados para rutas y eventos, con garantía de tipos derivados automáticamente.
- [ ] Declaration merging aplicado sin tocar node_modules y documentado.
- [ ] `tsc --noEmit` sin errores y `tsc --extendedDiagnostics` con tiempo de compilación razonable.
- [ ] No hay tipos recursivos ilimitados ni condicionales en cadena sin necesidad.
- [ ] Los esquemas Zod validan los casos inválidos con mensajes en español.

## Ejemplos de prompts

- "Crea la arquitectura de tipos por dominios de una tienda: usuario, pedido y carrito, cada uno con su carpeta, su esquema Zod y sus transformaciones."
- "Define esquemas Zod para el formulario de registro y deriva los tipos; valida el input y los errores en español."
- "Usa template literal types para tipar las rutas /api/usuario/:id y el evento 'pedido:creado:{id}', verificando que los parámetros se infieran."
- "Escribe un tipo condicional ElementoDe<T> que extraiga el elemento de Array<T> y Promise<T>, y prueba su uso con @ts-expect-error."
- "Ensambla el tsconfig con strict, verbatimModuleSyntax y un diagnóstico de rendimiento de tipos del proyecto."

## Plantillas y recursos

- [Templates](templates/) — `templates/schemas-zod.ts` (esquemas con validación en español e inferencia), `templates/tipos-avanzados.ts` (condicionales, template literals e infer) y `templates/dominios.ts` (arquitectura por dominio con transformaciones).
- [Checklist de autoevaluación](resources/checklist.md)