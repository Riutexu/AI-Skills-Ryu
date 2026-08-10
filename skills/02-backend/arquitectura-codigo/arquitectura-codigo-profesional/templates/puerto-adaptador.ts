/**
 * puerto-adaptador.ts — Ejemplo hexagonal en TypeScript.
 *
 * Estructura:
 *   domain/        Usuario (entidad pura)
 *   application/   UsuarioRepositorio (puerto de salida),
 *                  CrearUsuarioCommand + handler (caso de uso)
 *   infrastructure/ UsuarioRepositorioPrisma (adaptador)
 *   composicion/   contenedor.ts (wire-up por inyeccion)
 */

// ===========================================================================
// DOMINIO: entidad pura, sin dependencias
// ===========================================================================

export class Usuario {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly nombre: string,
    readonly passwordHash: string
  ) {}

  static crear(input: { email: string; nombre: string; passwordHash: string }): Usuario {
    if (!input.email.includes('@')) {
      throw new Error('Email inválido');
    }
    return new Usuario(crypto.randomUUID(), input.email, input.nombre, input.passwordHash);
  }
}

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

// ===========================================================================
// APLICACION: puertos (interfaces que la app necesita) y casos de uso
// ===========================================================================

// Puerto de salida: escrito por la aplicación, implementado por la infra
export interface UsuarioRepositorio {
  buscarPorEmail(email: string): Promise<Usuario | null>;
  insertar(usuario: Usuario): Promise<void>;
}

// Puerto de entrada (opcional): expone el caso de uso a los adaptadores HTTP/CLI
export interface CrearUsuario {
  ejecutar(input: { email: string; nombre: string; password: string }): Promise<Usuario>;
}

export class CrearUsuarioCommand implements CrearUsuario {
  // Inyeccion de dependencias: solo conoce la interfaz, no la implementacion
  constructor(
    private readonly repositorio: UsuarioRepositorio,
    private readonly hashearPassword: (texto: string) => Promise<string>
  ) {}

  async ejecutar(input: { email: string; nombre: string; password: string }): Promise<Usuario> {
    const existente = await this.repositorio.buscarPorEmail(input.email);
    if (existente) {
      throw new Error('USUARIO_DUPLICADO');
    }
    const hash = await this.hashearPassword(input.password);
    const usuario = Usuario.crear({ email: input.email, nombre: input.nombre, passwordHash: hash });
    await this.repositorio.insertar(usuario);
    return usuario;
  }
}

// ===========================================================================
// INFRAESTRUCTURA: adaptador del puerto (detalle intercambiable)
// ===========================================================================

// Adaptador de ejemplo con Prisma. Cambiar a DynamoDB o memoria implica
// crear otra clase que implemente UsuarioRepositorio; el caso de uso no cambia.
export class UsuarioRepositorioPrisma implements UsuarioRepositorio {
  constructor(private readonly prisma: { usuario: { findUnique: Function; create: Function } }) {}

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const fila = await this.prisma.usuario.findUnique({ where: { email } });
    if (!fila) return null;
    return new Usuario(fila.id, fila.email, fila.nombre, fila.passwordHash);
  }

  async insertar(usuario: Usuario): Promise<void> {
    await this.prisma.usuario.create({
      data: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        passwordHash: usuario.passwordHash,
      },
    });
  }
}

// ===========================================================================
// COMPOSICION: wire-up manual centralizado (contenedor)
// ===========================================================================

// const prisma = new PrismaClient();
// const repositorio = new UsuarioRepositorioPrisma(prisma);
// const hashear = (password: string) => bcrypt.hash(password, 12);
// export const crearUsuario = new CrearUsuarioCommand(repositorio, hashear);
//
// En los tests se inyecta un repositorio fake:
//
// class UsuarioRepositorioMemoria implements UsuarioRepositorio {
//   private filas = new Map<string, Usuario>();
//   async buscarPorEmail(email) { return [...this.filas.values()].find((u) => u.email === email) ?? null; }
//   async insertar(usuario) { this.filas.set(usuario.id, usuario); }
// }