# Checklist — JavaScript Moderno Avanzado

Marca cada punto cuando lo domines. Ejecútalo en el navegador (es obligatorio servirlo por HTTP: `npx serve` o Live Server, no funciona con `file://`).

## Sintaxis expresiva

- [ ] Extraigo propiedades con destructuring de objetos, con valores por defecto y alias.
- [ ] Intercambio variables y extraigo elementos con destructuring de arrays.
- [ ] Combino objetos y arrays con spread sin mutar los originales.
- [ ] Uso rest (`...resto`) para agrupar argumentos sobrantes.
- [ ] Interpolo template strings con `${}` y cadenas multilínea.

## Funciones, closures y scope

- [ ] Explico la diferencia entre `function`, arrow y cuándo elijo cada una.
- [ ] Describo el ciclo de vida de un closure y para qué sirve (fábricas, contadores privados).
- [ ] Identifico el scope de `let`/`const` (bloque) frente a `var` (función).
- [ ] Comprendo por qué `this` no se reenlaza en las arrow functions.

## Asíncrono

- [ ] Construyo una promesa con `new Promise` y la consumo con `.then/.catch`.
- [ ] Convierto promesas a `async/await` con `try/catch`.
- [ ] Compruebo `response.ok` antes de `response.json()` en fetch.
- [ ] Uso `Promise.all` para peticiones independientes en paralelo.
- [ ] Creo errores de dominio con `class MiError extends Error`.

## Módulos ESM

- [ ] Exporto con `export` nombrado y por defecto cuando corresponde.
- [ ] Importo con `import { ... } from "./archivo.js"` usando extensiones relativas.
- [ ] Cargo el módulo de entrada con `<script type="module">`.
- [ ] Mantengo módulos sin efectos secundarios al importar.

## Práctica final

- [ ] Levanto el template `api-usuarios.js` + `main.js` con un servidor local y veo los tres estados: cargando, ok y error.
- [ ] Rompo a propósito la URL de la API y verifico que el catch muestra el mensaje sin romper la página.
- [ ] Escribo un cliente fetch GET+POST para una API propia sin mirar la plantilla.
- [ ] Explico qué ocurre con la UI si la API tarda 5 segundos: dónde se pinta "cargando" y dónde se actualiza.