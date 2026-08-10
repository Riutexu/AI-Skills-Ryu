# JavaScript Moderno

Skill de opencode para escribir, revisar y migrar código JavaScript moderno en español: desde los fundamentos de ES6+ hasta patrones profesionales de rendimiento y mantenibilidad. Cubre el lenguaje, el DOM, programación asíncrona, módulos ESM, Web Workers, Streams y buenas prácticas de memoria.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `javascript-moderno-basico` | Básico | let/const, tipos, operadores, funciones, arrays y objetos con map/filter/reduce, DOM básico (querySelector, eventos click) |
| `javascript-moderno-avanzado` | Avanzado | ES2024: destructuring, spread/rest, template strings, arrow functions, closures y scope, async/await, promesas, fetch, módulos ESM, try/catch |
| `javascript-moderno-profesional` | Profesional | Patrones module/factory/singleton, delegación de eventos, memoria y fugas, Web Workers, Streams, debounce/throttle, requestAnimationFrame, browserslist |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| `objetivo` | Aprender y aplicar fundamentos | Escribir código asíncrono y modular | Diseñar arquitecturas y optimizar rendimiento |
| `estandar_ecma` | ES2015 (ES6) | ES2023/ES2024 | ES2024 con transpilación según browserslist |
| `manejo_errores` | try/catch básico | try/catch + promesas rechazadas | Errores tipados, circuit breakers y logging |
| `modularidad` | Scripts únicos con funciones | Módulos ESM con imports/exports | Módulos + workers + lazy loading |
| `dom` | querySelector y eventos click | Delegación y datos en atributos `data-*` | Delegación completa y observadores |
| `rendimiento` | No aplica | Async/await para evitar bloqueos | Debounce, throttle, rAF, Web Workers |

## Instalación

Copia la carpeta `javascript-moderno` completa dentro de tu biblioteca de skills:

- Por proyecto: `C:\Users\hecto\Downloads\skills\01-frontend\javascript-moderno` → `.opencode\skills\javascript-moderno\`
- Global: copia la carpeta a `~\.config\opencode\skills\javascript-moderno\`

Cada nivel es una skill independiente (`javascript-moderno-basico`, `javascript-moderno-avanzado`, `javascript-moderno-profesional`); puedes instalar solo las que necesites. Después de copiar, reinicia opencode.

## Ruta de aprendizaje

1. **Básico** — domina sintaxis, tipos, funciones, arrays y DOM sin dependencias. Crea la plantilla de formulario con lista dinámica.
2. **Avanzado** — programa de forma asíncrona y modular: promesas, fetch, ESM y closures. Construye el cliente de API con manejo de errores.
3. **Profesional** — aplica patrones de diseño, aisla trabajo pesado en Web Workers y optimiza rendimiento con debounce, throttle y rAF.

## Referencias clave

- [MDN: Guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [MDN: Referencia de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference)
- [TC39: Propuestas ECMAScript](https://github.com/tc39/proposals)
- [JavaScript.info (en español)](https://es.javascript.info/)
- [MDN: Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [MDN: Web Workers](https://developer.mozilla.org/es/docs/Web/API/Web_Workers_API)