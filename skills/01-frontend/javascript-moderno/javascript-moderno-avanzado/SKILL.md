---
name: javascript-moderno-avanzado
description: Programa JavaScript ES2024 asíncrono y modular: destructuring, spread/rest, closures, promesas, async/await, fetch, módulos ESM y try/catch. Úsalo para clientes de API y código modular en el navegador.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "javascript-moderno"
  nivel: avanzado
  stack: "JavaScript ES2024, ESM, Fetch API, Promesas"
---

# JavaScript Moderno — Nivel Avanzado

## Qué hace este skill

Produce y revisa JavaScript ES2024 de calidad intermedia: sintaxis expresiva con destructuring, spread/rest y template strings, arrow functions, closures y scope, y programación asíncrona completa con promesas, `async/await`, `fetch` y `try/catch`. Organiza el código en módulos ESM reutilizables.

## Cuándo usarlo

- Cuando se necesita un cliente de API (fetch) con manejo de errores y estados de carga.
- Para organizar código en módulos ESM con `import`/`export` en lugar de scripts gigantes.
- Para transformar datos complejos (objetos y arrays anidados) con destructuring y spread.
- Cuando hay operaciones asíncronas encadenadas: cargar, transformar, renderizar.
- Para revisar fugas de contexto: closures, `this` en arrow functions y scope.

## Requisitos previos

- Dominio del nivel básico: `const`/`let`, `map`/`filter`/`reduce`, `querySelector` y `addEventListener`.
- Navegador moderno con soporte de módulos (`<script type="module">`) y Fetch API.
- Node.js >= 18 si se prueba en terminal (soporta ESM con `"type": "module"`).
- Opcional: servidor local como `npx serve` o VS Code Live Server (fetch no funciona con `file://`).

## Workflow paso a paso

1. Definir el contrato de datos: qué campos devuelve la API y su forma (array de objetos, objeto anidado).
2. Crear un módulo ESM por responsabilidad: `api-cliente.js` para red, `main.js` para interacción.
3. Extraer valores con destructuring de objetos y arrays; usar alias cuando el nombre de la API no sea claro.
4. Combinar objetos/arrays con spread (`...`) para crear copias inmutables en vez de mutar.
5. Interpolar cadenas con template strings y etiquetarlas cuando contengan HTML con `innerHTML`, escapando siempre el contenido del usuario.
6. Escribir promesas con `fetch` y encadenar `.then`/`.catch` o convertirlas a `async/await` con `try/catch`.
7. Validar la respuesta: comprobar `response.ok` antes de parsear JSON; una respuesta HTTP 404 no lanza error en fetch.
8. Tipificar el flujo asíncrono: `await` dentro de funciones `async`, nunca en el ámbito global de un módulo (usar un `main()` con `.catch`).
9. Centralizar el manejo de errores en el punto de entrada: un único `try/catch` por operación asíncrona completa.
10. Gestionar estados de UI: "cargando" antes del await, "error" en el catch, "vacío" si no hay datos.
11. Renderizar con mapeos derivados (map > join) y delegar el marcado a una función pura.
12. Cerrar closures con cuidado: variables capturadas por referencia se leen en el momento de la llamada.
13. Verificar el módulo: `node --check archivo.js` para sintaxis y pruebas manuales con datos reales y con un endpoint roto.
14. Eliminar código muerto y `console.log` de depuración antes de entregar.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `url_api` | Endpoint base para el cliente fetch | texto | no | "https://api.example.com/usuarios" |
| `token_auth` | Encabezado de autorización (Bearer) | texto | no | "Bearer abc123" |
| `formato_salida` | Destino del código: navegador o Node | texto | no | "navegador" |
| `manejo_errores` | Estrategia: try/catch centralizado o por operación | texto | no | "centralizado" |
| `idioma_codigo` | Idioma de identificadores y comentarios | texto | no | "es" |
| `inyeccion_html` | Si el marcado se construye con template strings | texto | no | "escapado" |

## Reglas y checklist

- [ ] Todos los módulos usan `export`/`import` explícitos; sin variables globales ni efectos secundarios al importar.
- [ ] Ningún `fetch` global: las llamadas de red viven en su módulo y se reutilizan.
- [ ] `response.ok` se comprueba antes de `response.json()`.
- [ ] Toda función asíncrona con `await` está envuelta en `try/catch` o encadena `.catch`.
- [ ] `Promise.all` se usa para peticiones paralelas independientes; `await` secuencial solo cuando hay dependencia.
- [ ] Destructuring y spread aplicados sin abusar: legibles en el primer vistazo.
- [ ] Todo dato que se pinta con `innerHTML`/template string se escapa antes (función `escapar`).
- [ ] Sin cierres que capturen variables de bucles (`let` por iteración o fábrica).
- [ ] El estado de la UI cubre cargando, error y vacío.
- [ ] El código funciona servido por HTTP local; documentado en el README cómo levantarlo.

## Ejemplos de prompts

- "Crea un módulo api-usuarios.js con fetch, async/await y manejo de errores para GET y POST de usuarios. URL: https://jsonplaceholder.typicode.com/users."
- "Refactoriza esta cadena de .then para usar async/await con try/catch y un solo punto de error."
- "Convierte este objeto anidado en variables planas con destructuring, renombrando las claves a español."
- "Crea una página que cargue los usuarios al inicio, muestre 'cargando', y pinte una tarjeta por usuario con fallback si la API falla."
- "Organiza mi app en módulos ESM: main.js para eventos, api.js para red y render.js para el DOM."

## Plantillas y recursos

- [Templates](templates/) — `templates/api-usuarios.js` (módulo ESM con fetch y errores), `templates/main.js` (arranque con render de usuarios) y `templates/index.html` (página de prueba).
- [Checklist de autoevaluación](resources/checklist.md)