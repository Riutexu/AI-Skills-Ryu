// funciones.ts — Funciones tipadas que consumen los modelos.
import type { CategoriaProducto, LineaTicket, Producto, Usuario } from "./modelos.js";

// Parámetros y retorno tipados de forma explícita.
export function nombreCompleto(usuario: Usuario): string {
  return `${usuario.nombre} <${usuario.email}>`;
}

// Parámetro opcional con valor por defecto.
export function saludar(usuario: Usuario, prefijo = "Hola"): string {
  return `${prefijo}, ${usuario.nombre}`;
}

// Arrays tipados: filter devuelve Producto[].
export function productosEnStock(productos: readonly Producto[]): Producto[] {
  return productos.filter((producto) => producto.enStock);
}

// Tuplas: calcula el total de una línea de ticket.
export function totalLinea(linea: LineaTicket): number {
  const [, , precio] = linea;
  return precio;
}

// Agrupación sencilla con reduce y acceso a prop opcional.
export function calcularTotal(lineas: readonly LineaTicket[]): number {
  return lineas.reduce((acumulado, linea) => acumulado + totalLinea(linea), 0);
}

// Objetos literales con retorno de interface.
export function crearProducto(
  id: number,
  nombre: string,
  precio: number,
  categoria: CategoriaProducto
): Producto {
  return { id, nombre, precio, categoria, enStock: true };
}

// Propiedad opcional tratada con comprobación de narrowing.
export function mostrarTelefono(usuario: Usuario): string {
  return usuario.telefono ? `Tel: ${usuario.telefono}` : "Sin teléfono registrado";
}