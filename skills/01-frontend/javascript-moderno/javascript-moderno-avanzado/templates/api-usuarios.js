// api-usuarios.js — Módulo ESM: capa de red con fetch y manejo de errores.
// Exporta funciones reutilizables; nada de esto se ejecuta al importar.

const URL_BASE = "https://jsonplaceholder.typicode.com";

// Error de dominio con contexto para los catch del llamador.
export class ErrorApi extends Error {
  constructor(mensaje, { estado = null, causa = null } = {}) {
    super(mensaje);
    this.name = "ErrorApi";
    this.estado = estado;
    this.causa = causa;
  }
}

// GET con comprobación de response.ok y parseo seguro.
export async function obtenerUsuarios() {
  const respuesta = await fetch(`${URL_BASE}/users`);
  if (!respuesta.ok) {
    throw new ErrorApi(`La API respondió con estado ${respuesta.status}`, {
      estado: respuesta.status,
    });
  }
  return respuesta.json();
}

// POST con cuerpo JSON y encabezados. Validación de red separada de validación de datos.
export async function crearUsuario(datos) {
  const respuesta = await fetch(`${URL_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!respuesta.ok) {
    throw new ErrorApi(`No se pudo crear el usuario (${respuesta.status})`, {
      estado: respuesta.status,
    });
  }
  return respuesta.json();
}

// Llamadas paralelas e independientes con Promise.all.
export async function obtenerUsuariosYPosts() {
  const [usuarios, posts] = await Promise.all([
    fetch(`${URL_BASE}/users`).then((r) => r.json()),
    fetch(`${URL_BASE}/posts`).then((r) => r.json()),
  ]);
  return { usuarios, posts };
}