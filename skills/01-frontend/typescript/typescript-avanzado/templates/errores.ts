// errores.ts — Error de dominio para la capa de red.
export class ErrorApi extends Error {
  readonly estado?: number;
  readonly url?: string;

  constructor(mensaje: string, detalle: { estado?: number; url?: string } = {}) {
    super(mensaje);
    this.name = "ErrorApi";
    this.estado = detalle.estado;
    this.url = detalle.url;
  }
}

// Guarda de tipo: distingue los errores de la capa de red.
export function esErrorApi(error: unknown): error is ErrorApi {
  return error instanceof ErrorApi;
}