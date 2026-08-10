// tipos-avanzados.ts — Tipos condicionales, template literals e inferencia.
// Cada tipo aquí está pensado para compilar sin costes innecesarios.

// Convierte un literal en su versión en mayúsculas del sistema de tipos.
type Capitalizar<S extends string> = S extends `${infer Primera}${infer Resto}`
  ? `${Uppercase<Primera>}${Resto}`
  : S;

export type EventoCrear = `crear:${Capitalizar<"usuario">}`; // "crear:Usuario"

// Extrae el elemento de un tipo de colección (Array, Promise o Set).
export type ElementoDe<T> = T extends readonly (infer Elemento)[]
  ? Elemento
  : T extends Promise<infer Resuelto>
    ? Resuelto
    : T extends Set<infer Item>
      ? Item
      : never;

// Rutas tipadas con parámetros capturados por infer.
export type RutaInventario = `/api/${string}`;
type ParametrosDe<Ruta extends string> = Ruta extends `${string}/:${infer Param}`
  ? Param
  : never;

export const rutaArticulo = (id: number): RutaInventario => `/api/articulo/${id}`;

// Función genérica que conserva las claves de un objeto.
export function clavesDe<T extends Record<string, unknown>>(objeto: T): (keyof T)[] {
  return Object.keys(objeto) as (keyof T)[];
}

// Condicional en cadena simplificado: evita recursión innecesaria.
export type EsNullish<T> = T extends null | undefined ? true : false;

// Pruebas de tipos: los casos negativos deben fallar en compilación.
const resultado: ElementoDe<Promise<string[]>> = ["a", "b"];

// @ts-expect-error: un string no es ElementoDe<Promise<string[]>>
const invalido: ElementoDe<Promise<string[]>> = "este texto no compila";