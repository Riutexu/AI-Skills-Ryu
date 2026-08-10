// utilidades-rendimiento.js — Debounce, throttle, animaciones y limpieza.

// Debounce: ejecuta la función solo después de un silencio de `espera` ms.
// Ideal para búsquedas y autocompletado (dispara al final de escribir).
export function debounce(funcion, espera = 300) {
  let temporizador = null;
  return function (...argumentos) {
    clearTimeout(temporizador);
    temporizador = setTimeout(() => funcion.apply(this, argumentos), espera);
  };
}

// Throttle: garantiza al menos `limite` ms entre ejecuciones.
// Ideal para scroll, resize y mousemove (limita la tasa, no la espera).
export function throttle(funcion, limite = 200) {
  let ultimaEjecucion = 0;
  let temporizador = null;
  return function (...argumentos) {
    const ahora = Date.now();
    const restante = limite - (ahora - ultimaEjecucion);
    const ejecutar = () => {
      ultimaEjecucion = Date.now();
      funcion.apply(this, argumentos);
    };
    if (restante <= 0) {
      clearTimeout(temporizador);
      temporizador = null;
      ejecutar();
    } else if (!temporizador) {
      temporizador = setTimeout(ejecutar, restante);
    }
  };
}

// Bucle de animación con requestAnimationFrame y tiempo real.
// Devuelve la función de parada para poder limpiar la animación.
export function animar(dibujar, { duracion = 1000 } = {}) {
  let cancelada = false;
  let ultimoTiempo = null;
  const inicio = performance.now();

  function paso(tiempoActual) {
    if (cancelada) return;
    if (ultimoTiempo === null) ultimoTiempo = tiempoActual;
    const delta = tiempoActual - ultimoTiempo;
    ultimoTiempo = tiempoActual;
    const progreso = Math.min((tiempoActual - inicio) / duracion, 1);
    dibujar({ progreso, delta });
    if (progreso < 1) requestAnimationFrame(paso);
  }

  requestAnimationFrame(paso);
  return () => {
    cancelada = true;
  };
}

// Utilidad para limpiar todo lo registrado por una sección de la UI.
export function crearLimpiador() {
  const controladores = new Set();
  return {
    add: (controlador) => controladores.add(controlador),
    limpiar: () => {
      controladores.forEach((controlador) => controlador.abort());
      controladores.clear();
    },
  };
}