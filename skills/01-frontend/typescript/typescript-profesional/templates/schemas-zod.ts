// schemas-zod.ts — Zod como única fuente de verdad del runtime y del tipo.
import { z } from "zod";

// Los mensajes de error se escriben en español: la validación es UX.
export const EmailSchema = z
  .string({ error: "El email es obligatorio" })
  .email({ error: "El email no tiene un formato válido" });

export const UsuarioSchema = z.object({
  id: z.number().int().positive(),
  nombre: z.string({ error: "El nombre es obligatorio" }).min(2, {
    error: "El nombre debe tener al menos 2 caracteres",
  }),
  email: EmailSchema,
  rol: z.enum(["admin", "editor", "lector"], {
    error: "El rol debe ser admin, editor o lector",
  }),
  activo: z.boolean().default(true),
});

export const PedidoItemSchema = z.object({
  productoId: z.number().int().positive(),
  cantidad: z.number().int().min(1, { error: "La cantidad mínima es 1" }),
});

export const PedidoSchema = z.object({
  id: z.number().int().positive(),
  usuarioId: z.number().int().positive(),
  items: z.array(PedidoItemSchema).min(1, { error: "El pedido debe tener al menos un item" }),
  total: z.number().nonnegative(),
});

// Tipos inferidos: derivados del esquema, jamás duplicados a mano.
export type Usuario = z.infer<typeof UsuarioSchema>;
export type Pedido = z.infer<typeof PedidoSchema>;

// Parsea en frontera de entrada (fetch, formulario): lanza error detallado.
export function validarUsuario(datos: unknown): Usuario {
  return UsuarioSchema.parse(datos);
}

// Versión segura: devuelve el resultado en vez de lanzar.
export const validarPedidoSeguro = PedidoSchema.safeParse;