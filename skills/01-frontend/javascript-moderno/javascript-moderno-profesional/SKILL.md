---
name: javascript-moderno-profesional
description: Diseña JavaScript de producción: patrones module/factory/singleton, delegación de eventos, memoria y fugas, Web Workers, Streams, debounce/throttle, requestAnimationFrame y browserslist. Úsalo para apps JS maduras y cargas pesadas.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "javascript-moderno"
  nivel: profesional
  stack: "JavaScript ES2024, Web Workers, Streams, Web Performance"
---

# JavaScript Moderno — Nivel Profesional

## Qué hace este skill

Aplica criterios de arquitectura y rendimiento a aplicaciones JavaScript de producción: patrones de diseño (module, factory, singleton), delegación de eventos, gestión de memoria y fugas, aislamiento de trabajo pesado en Web Workers, procesamiento con Streams, técnicas de limitación con debounce/throttle, animaciones con requestAnimationFrame y compatibilidad declarada con browserslist.

## Cuándo usarlo

- Cuando la aplicación procesa datos grandes o hace cálculos que bloquean el hilo principal.
- Para estructurar código orientado a eventos que crece (listas, tablas, tableros Kanban).
- Para diagnosticar pérdidas de memoria, listeners duplicados o timers sin limpiar.
- Para afinar búsquedas, autocompletado, scroll infinito y animaciones.
- Para definir qué navegadores soporta el proyecto y qué sintaxis se puede usar sin transpilar.

## Requisitos previos

- Dominio de los niveles básico y avanzado: DOM, asíncrono, ESM y fetch.
- Conocimiento de la pestaña Performance y del apartado Memory de DevTools.
- Navegador moderno (Chrome o Firefox) para workers, streams y requestAnimationFrame.
- Opcional: `npx browserslist` para validar la matriz de navegadores.

## Workflow paso a paso

1. Definir los navegadores objetivo en `browserslist` (package.json o `.browserslistrc`) y decidir si hay que transpilar con Babel o si el código moderno es compatible.
2. Arquitecturar el código en módulos ESM; aplicar el patrón factory para objetos con estado y singleton solo para recursos únicos, como la conexión con el worker.
3. Delegar eventos: un único listener en el ancestro común despacha según `event.target.closest("[data-accion]")`, eliminando listeners por elemento.
4. Prevenir fugas de memoria: remover listeners que ya no se usan con `AbortController`, limpiar `setInterval`, desconectar observadores y cancelar peticiones en curso.
5. Aislar el trabajo pesado (arrays grandes, parseo, hashing) en un Web Worker que devuelve resultados por `postMessage`.
6. Verificar con la pestaña Performance que el hilo principal ya no se bloquea durante la tarea pesada.
7. Encadenar o transformar grandes volúmenes de datos con Streams (`ReadableStream`, `TextDecoderStream`) cuando llegan de red o se procesan por lotes.
8. Limitar la frecuencia de eventos de alto ritmo con `debounce` (autocompletado, resize) y `throttle` (scroll infinito, mousemove).
9. Conducir las animaciones con `requestAnimationFrame`: un único bucle que calcula el progreso con `performance.now()`.
10. Medir el resultado: recuento de listeners en DevTools (Memory con Heap snapshot) y fotogramas por segundo durante la animación.
11. Documentar la matriz de navegadores soportados y las técnicas aplicadas en el README del proyecto.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `objetivo` | Problema de rendimiento o arquitectura a resolver | texto | sí | "filtrar 200.000 registros sin bloquear la UI" |
| `tecnica` | Técnicas a aplicar: worker, debounce, throttle, streams, rAF | texto | no | "worker + debounce" |
| `navegadores` | Matriz de navegadores objetivo para browserslist | texto | no | "Chrome >= 90, Firefox >= 88, Safari >= 14" |
| `duracion_debounce` | Milisegundos de espera para el debounce | número | no | "300" |
| `limite_throttle` | Milisegundos mínimos entre ejecuciones del throttle | número | no | "200" |
| `modo_pruebas` | Si se entregan también verificaciones de memoria y FPS | booleano | no | "true" |

## Reglas y checklist

- [ ] Un único listener de eventos por zona del DOM: delegación en el ancestro común.
- [ ] Todo listener, observer, worker e intervalo se limpia al destruir su contenedor (función `limpiar()` explícita).
- [ ] Snapshot de heap antes y después de montar/desmontar la interfaz: sin crecimiento de listeners ni detached nodes.
- [ ] El hilo principal no ejecuta trabajo síncrono superior a unos pocos milisegundos; lo pesado vive en el worker.
- [ ] Debounce y throttle con opciones de borde correctas (leading/trailing) según el caso.
- [ ] Animaciones conducidas por rAF: sin setInterval para el repintado, y el delta de tiempo calculado en milisegundos reales.
- [ ] `browserslist` declarado en package.json o `.browserslistrc` y coherente con el código entregado.
- [ ] Código probado en dos navegadores distintos al menos.

## Ejemplos de prompts

- "Crea un worker.js que ordene y filtre un array de 200.000 objetos y devuelva los 100 primeros por postMessage; main.js recibe y pinta."
- "Implementa debounce de 300 ms para un buscador y throttle de 200 ms para un contador de scroll infinito."
- "Detecta por qué crecen los listeners al navegar entre vistas y aplica AbortController para limpiarlos."
- "Crea un bucle de animación con requestAnimationFrame para una barra de progreso que respeta el tiempo real."
- "Declara browserslist para 'Chrome >= 90, Firefox >= 88, Safari >= 14' y dime qué sintaxis no necesito transpilar."

## Plantillas y recursos

- [Templates](templates/) — `templates/worker.js` (ordenamiento pesado fuera del hilo principal), `templates/utilidades-rendimiento.js` (debounce, throttle, rAF y limpieza) y `templates/main.js` (integración con delegación de eventos).
- [Checklist de autoevaluación](resources/checklist.md)