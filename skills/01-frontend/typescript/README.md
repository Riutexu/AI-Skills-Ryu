# TypeScript

Skill de opencode para escribir y revisar TypeScript en español: desde el tipado básico de datos y funciones hasta los tipos avanzados con inferencia condicional, generics y validación en runtime con Zod. Cubre strict mode, narrowing, arquitectura tipada por dominios y rendimiento del compilador.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `typescript-basico` | Básico | Tipos primitivos, interfaces y type aliases, funciones tipadas, arrays y tuplas, propiedades opcionales |
| `typescript-avanzado` | Avanzado | Generics, unions y discriminated, utility types (Partial/Pick/Omit), strict mode, narrowing, enums, tipado asíncrono y fetch |
| `typescript-profesional` | Profesional | Tipos condicionales (extends/infer), template literal types, tipado desde Zod, declaration merging, arquitectura por dominios y rendimiento de tipos |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| `objetivo` | Tipar modelos y funciones simples | Tipar flujos asíncronos y APIs | Diseñar la arquitectura de tipos del proyecto |
| `compilador` | tsconfig base | strict mode activado | strict + noUncheckedIndexedAccess + verbatim |
| `generics` | No aplica | Funciones y tipos genéricos | Condicionales, infer y template literal types |
| `validacion` | Anotaciones manuales | Unions discriminadas | Zod como única fuente de verdad |
| `escala` | Archivos sueltos | Cliente de API completo | Múltiples dominios con merges y carpetas |
| `diagnostico` | Errores de compilador | Narrowing estricto | Rendimiento con materia de tipos |

## Instalación

Copia la carpeta `typescript` completa dentro de tu biblioteca de skills:

- Por proyecto: `C:\Users\hecto\Downloads\skills\01-frontend\typescript` → `.opencode\skills\typescript\`
- Global: copia la carpeta a `~\.config\opencode\skills\typescript\`

Cada nivel es una skill independiente (`typescript-basico`, `typescript-avanzado`, `typescript-profesional`); puedes instalar solo las que necesites. Después de copiar, reinicia opencode.

## Ruta de aprendizaje

1. **Básico** — tipa variables, interfaces, funciones, arrays y tuplas. Compila el modelo de ejemplo con `tsc`.
2. **Avanzado** — domina generics, narrowing, utility types y el tipado completo de un cliente fetch en strict mode.
3. **Profesional** — construye tipos avanzados, valida en runtime con Zod y organiza la arquitectura de tipos por dominios con buen rendimiento de compilación.

## Referencias clave

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [Playground de TypeScript](https://www.typescriptlang.org/play)
- [Documentación de Zod](https://zod.dev/)
- [Type Error Analysis: rendimiento de tipos](https://github.com/microsoft/TypeScript/wiki/Performance)