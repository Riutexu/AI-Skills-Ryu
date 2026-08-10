// main.js — Módulo ESM de arranque: interacción, estados de UI y render.
import { obtenerUsuarios, ErrorApi } from "./api-usuarios.js";

const lista = document.querySelector("#lista");
const estado = document.querySelector("#estado");

// Escapar texto del usuario antes de inyectarlo en el HTML (protección XSS).
function escapar(texto) {
  const reemplazos = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return String(texto).replace(/[&<>"']/g, (caracter) => reemplazos[caracter]);
}

// Función pura: datos de entrada, marcado de salida. Fácil de probar.
function marcarUsuarios(usuarios) {
  return usuarios
    .map(
      ({ id, name, email, address: { city } }) =>
        `<li>
          <strong>${escapar(name)}</strong>
          <span>${escapar(email)} — ${escapar(city)}</span>
          <small>id ${id}</small>
        </li>`
    )
    .join("");
}

// Estados visibles: cargando, error, ok.
function mostrarEstado(tipo, mensaje = "") {
  estado.textContent = mensaje;
  estado.dataset.tipo = tipo;
}

// Punto de entrada único para el flujo asíncrono.
export async function iniciar() {
  mostrarEstado("cargando", "Cargando usuarios…");
  try {
    const usuarios = await obtenerUsuarios();
    if (usuarios.length === 0) {
      mostrarEstado("vacio", "No hay usuarios registrados.");
      lista.innerHTML = "";
      return;
    }
    lista.innerHTML = marcarUsuarios(usuarios);
    mostrarEstado("ok", `${usuarios.length} usuarios cargados.`);
  } catch (error) {
    const detalle =
      error instanceof ErrorApi ? error.message : "Error de red o de parseo.";
    mostrarEstado("error", `No se pudo cargar: ${detalle}`);
  }
}

iniciar();