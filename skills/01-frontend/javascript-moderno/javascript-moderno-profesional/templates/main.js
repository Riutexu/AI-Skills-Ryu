// main.js — Integración: worker, delegación de eventos y limpieza por sección.
import { debounce, throttle, animar, crearLimpiador } from "./utilidades-rendimiento.js";

const $ = (selector) => document.querySelector(selector);

// 1. Worker de procesamiento pesado.
const worker = new Worker("worker.js");
const solicitudes = new Map(); // id -> función de respuesta

worker.addEventListener("message", (evento) => {
  const { id, procesado, duracion } = evento.data;
  const resolver = solicitudes.get(id);
  if (resolver) {
    resolver(procesado, duracion);
    solicitudes.delete(id);
  }
});

export function procesarEnWorker(datos, criterio) {
  return new Promise((resolver) => {
    const id = crypto.randomUUID();
    solicitudes.set(id, resolver);
    worker.postMessage({ id, datos, criterio });
  });
}

// 2. Delegación de eventos: un solo listener sobre el contenedor.
const contenedor = $("#resultado");
contenedor.addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-accion]");
  if (!boton) return;
  const id = Number(boton.dataset.id);
  boton.dataset.accion === "eliminar" ? eliminar(id) : detallar(id);
});

// 3. Debounce para la búsqueda y throttle para el scroll.
const inputBusqueda = $("#busqueda");
inputBusqueda.addEventListener(
  "input",
  debounce(() => buscar(inputBusqueda.value), 300)
);
window.addEventListener("scroll", throttle(actualizarContadorScroll, 200));

// 4. Animación con rAF y limpieza de su bucle.
const detenerAnimacion = animar(
  ({ progreso }) => {
    $("#barra").style.width = `${progreso * 100}%`;
  },
  { duracion: 2000 }
);

// 5. Limpiador por sección: cancela listeners y peticiones al destruir la vista.
const limpiador = crearLimpiador();
const controlador = new AbortController();
limpiador.add(controlador);
$("#detalle").addEventListener("click", detallar, { signal: controlador.signal });

export function limpiarVista() {
  limpiador.limpiar();
  detenerAnimacion();
  worker.terminate();
}