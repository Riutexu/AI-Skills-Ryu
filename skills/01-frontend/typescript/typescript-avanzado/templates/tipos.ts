// tipos.ts — Uniones discriminadas, enums y utility types del nivel avanzado.

// Estados de la entidad con un campo discriminante literal.
export type EstadoArticulo =
  | { estado: "borrador"; version: number }
  | { estado: "publicado"; publicadoEn: Date }
  | { estado: "archivado"; motivo: string };

export interface Articulo extends RecursosBase {
  titulo: string;
  contenido: string;
  estado: EstadoArticulo;
}

// RecursosBase: campos comunes a todos los recursos de la API.
export interface RecursosBase {
  id: number;
  creadoEn: Date;
  actualizadoEn: Date;
}

// DTO tal y como lo devuelve la API (snake_case, fechas en texto).
export interface ArticuloDTO {
  id: number;
  titulo: string;
  contenido: string;
  estado: string;
  created_at: string;
  updated_at: string;
}

// Utility types: entrada de creación, actualización parcial y salida pública.
export type CrearArticulo = Omit<Articulo, "id" | "creadoEn" | "actualizadoEn">;
export type ActualizarArticulo = Partial<CrearArticulo>;
export type ArticuloPublico = Pick<
  Articulo,
  "id" | "titulo" | "estado" | "actualizadoEn"
>;

// Registro tipado para catálogos fijos.
export const CATEGORIAS = ["tecnologia", "diseno", "negocio"] as const;
export type Categoria = (typeof CATEGORIAS)[number];

// Mapeo de DTO a dominio con validación del estado.
export function deDto(dto: ArticuloDTO): Articulo {
  const estado: EstadoArticulo =
    dto.estado === "publicado"
      ? { estado: "publicado", publicadoEn: new Date(dto.updated_at) }
      : dto.estado === "archivado"
        ? { estado: "archivado", motivo: "Archivado por el autor" }
        : { estado: "borrador", version: 1 };

  return {
    id: dto.id,
    titulo: dto.titulo,
    contenido: dto.contenido,
    estado,
    creadoEn: new Date(dto.created_at),
    actualizadoEn: new Date(dto.updated_at),
  };
}