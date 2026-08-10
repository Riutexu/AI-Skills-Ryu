---
name: javascript-moderno-basico
description: Escribe, revisa y migra JavaScript ES6+ básico: let/const, tipos, operadores, funciones, arrays con map/filter/reduce y DOM con querySelector y eventos click. Úsalo para código JS sin framework.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "javascript-moderno"
  nivel: basico
  stack: "JavaScript ES2015, HTML5, DOM"
---

# JavaScript Moderno — Nivel Básico

## Qué hace este skill

Enseña y aplica los fundamentos de JavaScript moderno (ES6+): declaración con `let`/`const`, tipos y operadores, funciones, trabajo con arrays y objetos mediante `map`/`filter`/`reduce`, y manipulación del DOM con `querySelector` y eventos `click`. Produce scripts autónomos que funcionan sin framework ni herramienta de build.

## Cuándo usarlo

- Cuando el usuario pide crear interacción en una página web con JavaScript puro.
- Para migrar código antiguo con `var`, bucles `for` clásicos o `document.getElementById` a JS moderno.
- Para revisar o refactorizar funcionalidad de formularios, listas y contadores.
- Cuando el proyecto no usa React, Vue ni otras bibliotecas y no necesita herramientas de build.

## Requisitos previos

- Editor de texto o IDE (VS Code recomendado).
- Navegador moderno (Chrome, Firefox, Edge) con consola de desarrollador.
- Nociones mínimas de HTML y CSS (estructura de etiquetas, `id` y `class`).
- Node.js opcional (>= 18) solo para probar scripts en terminal.

## Workflow paso a paso

1. Identificar el objetivo del script: qué interacción debe resolver (formulario, lista, contador, validación).
2. Seleccionar los elementos del DOM con `document.querySelector` y `document.querySelectorAll`; `id` para elementos únicos y `class`/`[data-*]` para grupos.
3. Declarar todo el estado con `const` cuando el valor no se reasigna y con `let` solo si la variable cambia; nunca usar `var`.
4. Cargar el script al final del `body` o con `defer` para garantizar que el DOM ya parseado esté disponible.
5. Crear manejadores de eventos con `element.addEventListener('click', handler)`; evitar `onclick` inline en HTML.
6. Leer valores de entrada con `.value` y validarlos de forma simple (longitud, tipo) antes de procesarlos.
7. Construir la lista dinámica creando elementos con `document.createElement` y agregándolos con `appendChild` o `append`.
8. Recorrer y transformar datos con `Array.prototype.map`, `filter` y `reduce` en lugar de bucles `for` clásicos.
9. Actualizar el DOM solo cuando los datos cambien; mantener una única fuente de verdad en variables de estado.
10. Limpiar estados vacíos: mensaje "sin resultados" cuando una lista o filtro no devuelva elementos.
11. Comprobar el resultado en consola con `console.log` puntuales y depurar con breakpoints en vez de dejar logs.
12. Verificar la sintaxis con el linter del editor (ESLint con reglas `es6` y `no-var`).
13. Probar manualmente los casos: entrada válida, entrada vacía y doble clic en botones.
14. Documentar el script con comentarios breves en cada bloque de responsabilidad.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `objetivo` | Qué interacción debe resolver el script | texto | sí | "formulario que agrega productos a una lista" |
| `idioma_codigo` | Idioma de variables, funciones y comentarios | texto | sí | "es" |
| `estandar_ecma` | Versión de ECMAScript a usar | texto | no | "ES2015" |
| `nivel_comentarios` | Nivel de comentarios en el código | texto | no | "bloques" |
| `incluir_html` | Si se genera también el HTML de soporte | booleano | no | "true" |
| `nociones_dom` | Si el usuario domina querySelector y eventos | booleano | no | "false" |

## Reglas y checklist

- [ ] Uso exclusivo de `const`/`let`, sin `var` en ningún punto del código.
- [ ] Todas las funciones con nombre descriptivo en español o flecha asignada a constante.
- [ ] Selección del DOM con `querySelector`/`querySelectorAll`, sin `getElementById` salvo justificación.
- [ ] Eventos registrados con `addEventListener`, sin atributos `onclick` inline.
- [ ] Colecciones transformadas con `map`/`filter`/`reduce`, no con bucles clásicos.
- [ ] El estado vive en variables declaradas al inicio y se actualiza solo desde las funciones que lo modifican.
- [ ] El HTML no contiene lógica: solo estructura, clases e `id` que el script usa.
- [ ] El script no produce errores en consola al cargar la página.
- [ ] Entrada vacía o inválida manejada con mensaje visible, no con exception silenciosa.
- [ ] Comentarios en español que expliquen bloques, no líneas obvias.

## Ejemplos de prompts

- "Crea un script.js que lea un formulario de tareas y agregue cada tarea a una lista dinámica. Idioma del código: español."
- "Migra este bloque con var y bucles for a const/let, map y filter, y selección con querySelector."
- "Agrega un contador de clics y un botón de reinicio a esta página usando addEventListener."
- "Refactoriza mi script para que el estado de los productos esté en un array y la lista se renderice con map."
- "Valida el formulario: si el nombre está vacío muestra un mensaje de error y no agrega el elemento."

## Plantillas y recursos

- [Templates](templates/) — `templates/index.html` y `templates/script.js`: formulario con lista dinámica funcional (abre `index.html` en el navegador).
- [Checklist de autoevaluación](resources/checklist.md)