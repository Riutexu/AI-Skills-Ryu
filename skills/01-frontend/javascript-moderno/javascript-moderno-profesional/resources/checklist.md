# Checklist — JavaScript Moderno Profesional

Marca cada punto cuando lo domines. Recomendado ejecutar junto a DevTools con la pestaña Performance y el panel Memory abiertos.

## Arquitectura y patrones

- [ ] Organizo el proyecto en módulos ESM con una responsabilidad por archivo.
- [ ] Aplico el patrón factory cuando creo objetos con estado y entendimiento de su ciclo de vida.
- [ ] Uso singleton solo para recursos únicos (conexión al worker, caché) sin estado mutable global injustificado.
- [ ] La capa de red, la de render y la de eventos viven en módulos separados.

## Eventos y memoria

- [ ] Delego eventos en el ancestro común con `closest("[data-accion]")` en lugar de un listener por elemento.
- [ ] Limpio listeners, intervalos y observadores al destruir cada vista.
- [ ] Cancelo peticiones en curso con `AbortController`.
- [ ] Tomo un snapshot de heap antes y después de montar y desmontar la interfaz y no veo crecimiento.
- [ ] Utilizo `limpiar()` o un limpiador centralizado en cada módulo desmontable.

## Rendimiento

- [ ] Muevo a un Web Worker el cómputo que tarda en bloqueo del hilo principal.
- [ ] Verifico en Performance que la tarea pesada ya no produce picos de bloqueo.
- [ ] Aplico `debounce` a eventos de ráfaga con espera de silencio (búsqueda, resize).
- [ ] Aplico `throttle` a eventos continuos con límite de frecuencia (scroll, mousemove).
- [ ] Conduzco animaciones con `requestAnimationFrame` y delta de tiempo real.
- [ ] Explico la diferencia entre debounce y throttle con un caso concreto de cada uno.

## Streams y compatibilidad

- [ ] Uso `ReadableStream` y `TextDecoderStream` para procesar respuestas de red por fragmentos cuando los datos son grandes.
- [ ] Tengo `browserslist` declarado y sé qué características no soportan los navegadores objetivo.
- [ ] Compruebo `"browsers"` con `npx browserslist` y alineo la sintaxis del código.

## Práctica final

- [ ] Genero 200.000 registros en el hilo principal y los proceso en `worker.js` sin congelar la página.
- [ ] Filtro una lista de 1.000 elementos con el buscador con debounce y mido que no se dispara en cada tecla.
- [ ] Animo una barra de progreso con `animar()` y la detengo a mitad con la función de parada.
- [ ] Explico por qué delegar eventos es imprescindible en listas con cientos de elementos dinámicos.