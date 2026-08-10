import type { Metadata } from "next";
import type { Producto } from "@/lib/productos";

export const revalidate = 3600;

export async function generateStaticParams() {
  const productos: { id: string }[] = await fetch("https://api.example.com/v1/productos/ids").then((r) => r.json());
  return productos.map((p) => ({ id: p.id }));
}

export const metadata: Metadata = { title: "Catálogo de productos" };

export default async function PaginaProductos() {
  const productos: Producto[] = await fetch("https://api.example.com/v1/productos").then((r) => r.json());

  return (
    <main>
      <h1>Productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            <a href={`/productos/${p.id}`}>{p.nombre}</a> — {p.precio} €
          </li>
        ))}
      </ul>
    </main>
  );
}