// worker.js — Web Worker: trabajo pesado fuera del hilo principal.
// Recibe los datos por postMessage, procesa y devuelve el resultado.

// Evento de entrada: el hilo principal envía el array a procesar.
self.addEventListener("message", (evento) => {
  const { id, datos, criterio } = evento.data;
  const inicio = performance.now();

  const procesado = datos
    .filter((item) => criterio(item))
    .sort((a, b) => b.puntaje - a.puntaje)
    .slice(0, 100);

  const duracion = performance.now() - inicio;

  // Devuelve la respuesta con el mismo id para peticiones concurrentes.
  self.postMessage({ id, procesado, duracion });
});

// Notificación de error propagada al hilo principal.
self.addEventListener("error", (evento) => {
  self.postMessage({ error: evento.message });
});