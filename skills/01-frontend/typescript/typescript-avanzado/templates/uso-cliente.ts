// uso-cliente.ts — Ejemplo completo: consume el cliente genérico con tipos.
import { ApiCliente } from "./api-cliente.js";
import { esErrorApi } from "./errores.js";
import { Articulo, ArticuloDTO, CrearArticulo, deDto } from "./tipos.js";

const api = new ApiCliente<Articulo>("https://api.ejemplo.com/v1");

// 1. Listar: el cliente devuelve DTOs crudos; se mapean al dominio.
async function cargarArticulos(): Promise<Articulo[]> {
  const dto: ArticuloDTO[] = await api.listar<ArticuloDTO>("/articulos");
  return dto.map(deDto);
}

// 2. Crear con entrada parcial derivada de la entidad.
async function crearNuevo(titulo: string, contenido: string): Promise<Articulo> {
  const entrada: CrearArticulo = {
    titulo,
    contenido,
    estado: { estado: "borrador", version: 1 },
  };
  return api.crear<CrearArticulo, ArticuloDTO>("/articulos", entrada).then(deDto);
}

// 3. Narrowing sobre unknown: mensaje útil sin perder seguridad.
export async function iniciar(): Promise<string> {
  try {
    const articulos = await cargarArticulos();
    return `Cargados ${articulos.length} artículos.`;
  } catch (error: unknown) {
    if (esErrorApi(error)) {
      return `Error de API (${error.estado ?? "sin estado"}): ${error.message}`;
    }
    if (error instanceof Error) {
      return `Error inesperado: ${error.message}`;
    }
    return "Error desconocido.";
  }
}