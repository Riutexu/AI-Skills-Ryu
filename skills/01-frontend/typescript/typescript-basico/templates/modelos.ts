// modelos.ts — Modelos de dominio del nivel básico.
// Las interfaces describen la forma de los objetos de negocio.

export interface Usuario {
  readonly id: number;
  nombre: string;
  email: string;
  telefono?: string;
  fechaRegistro: Date;
}

export interface Producto {
  readonly id: number;
  nombre: string;
  precio: number;
  categoria: CategoriaProducto;
  enStock: boolean;
}

// Type alias: unión de literales para valores cerrados.
export type CategoriaProducto = "alimentos" | "bebidas" | "limpieza" | "otros";

// Type alias para una tupla: [id, nombre, precio].
export type LineaTicket = readonly [id: number, nombre: string, precio: number];

// Type alias para funciones tipadas reutilizables.
export type ConDescuento = (precio: number) => number;

export const aplicarDescuento: ConDescuento = (precio) => precio * 0.9;