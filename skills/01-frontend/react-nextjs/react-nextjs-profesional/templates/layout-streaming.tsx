import { Suspense } from "react";
import type { ReactNode } from "react";

function Skeleton() {
  return <div className="skeleton h-40 w-full" aria-hidden="true" />;
}

function ListaProductos() {
  const productos = [
    { id: "p1", nombre: "Producto demo", precio: 29 },
    { id: "p2", nombre: "Producto demo 2", precio: 49 },
  ];
  return (
    <ul className="grid grid-cols-2 gap-4">
      {productos.map((p) => (
        <li key={p.id}>
          <strong>{p.nombre}</strong> — {p.precio} €
        </li>
      ))}
    </ul>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>Mi tienda</header>
      <main>
        <Suspense fallback={<Skeleton />}>
          <ListaProductos />
        </Suspense>
        {children}
      </main>
    </div>
  );
}