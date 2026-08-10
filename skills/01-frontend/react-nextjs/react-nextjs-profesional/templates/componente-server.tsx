import { unstable_cache as cache } from "next/cache";

export const revalidate = 300;

interface Usuario {
  id: string;
  nombre: string;
  email: string;
}

const getUsuarios = cache(
  async (): Promise<Usuario[]> => {
    const res = await fetch("https://api.example.com/v1/usuarios", {
      next: { tags: ["usuarios"] },
    });
    if (!res.ok) throw new Error(`API usuarios ${res.status}`);
    return res.json();
  },
  ["usuarios"],
  { revalidate: 300 }
);

export default async function PanelUsuarios() {
  const usuarios = await getUsuarios();

  return (
    <section aria-labelledby="titulo">
      <h2 id="titulo">Usuarios ({usuarios.length})</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} — {u.email}
          </li>
        ))}
      </ul>
    </section>
  );
}