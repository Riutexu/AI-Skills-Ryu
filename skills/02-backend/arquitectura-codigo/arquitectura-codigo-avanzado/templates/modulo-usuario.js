/**
 * modulo-usuario.js — Caso completo de arquitectura por capas.
 *
 * Concentra las cuatro capas del modulo usuario en un unico archivo para
 * su lectura; en produccion cada clase vive en su carpeta (ver
 * estructura-capas.md) con un import por archivo.
 *
 * Flujo: routes -> controller (HTTP) -> service (negocio) -> repository (datos)
 * Errores: el repository lanza, el service traduce a AppError, el controller
 * delega en el error handler global.
 */

// ===========================================================================
// CAPA DE DOMINIO — pura, sin dependencias externas
// ===========================================================================

class Usuario {
  constructor({ id, email, nombre, edad, passwordHash }) {
    if (!email || !email.includes('@')) {
      throw new Error('Email inválido');
    }
    if (edad < 18) {
      throw new Error('Solo mayores de 18 años');
    }
    this.id = id;
    this.email = email;
    this.nombre = nombre;
    this.edad = edad;
    this.passwordHash = passwordHash;
  }
}

// ===========================================================================
// CAPA DE APLICACION — servicios y DTOs
// ===========================================================================

class CrearUsuarioDto {
  constructor({ email, nombre, edad, password }) {
    this.email = email;
    this.nombre = nombre;
    this.edad = edad;
    this.password = password;
  }
}

class UsuarioDto {
  constructor(usuario) {
    this.id = usuario.id;
    this.email = usuario.email;
    this.nombre = usuario.nombre;
    this.edad = usuario.edad;
  }
}

class UsuarioServicio {
  // Inyeccion de dependencias manual por constructor
  constructor({ usuarioRepositorio }) {
    this.repositorio = usuarioRepositorio;
  }

  async crear({ dto }) {
    const existente = await this.repositorio.buscarPorEmail(dto.email);
    if (existente) {
      throw new AppError(409, 'EMAIL_DUPLICADO', 'Ya existe una cuenta con ese email');
    }
    // En produccion: hash con bcrypt aqui (argon2/bcrypt)
    const entidad = new Usuario({
      email: dto.email,
      nombre: dto.nombre,
      edad: dto.edad,
      passwordHash: `hash-de-${dto.password}`,
    });
    const guardado = await this.repositorio.insertar(entidad);
    return new UsuarioDto(guardado);
  }

  async obtenerPorId({ id }) {
    const usuario = await this.repositorio.buscarPorId(id);
    if (!usuario) {
      throw new AppError(404, 'USUARIO_NO_ENCONTRADO', 'Usuario inexistente');
    }
    return new UsuarioDto(usuario);
  }

  async eliminar({ id }) {
    const eliminado = await this.repositorio.eliminar(id);
    if (!eliminado) {
      throw new AppError(404, 'USUARIO_NO_ENCONTRADO', 'Usuario inexistente');
    }
    return new UsuarioDto(eliminado);
  }
}

// ===========================================================================
// CAPA DE INFRAESTRUCTURA — repositorios (interfaz + implementacion)
// ===========================================================================

// Interfaz: define el contrato que cualquier persistencia debe cumplir
class UsuarioRepositorio {
  buscarPorId(_id) { throw new Error('Metodo no implementado'); }
  buscarPorEmail(_email) { throw new Error('Metodo no implementado'); }
  insertar(_usuario) { throw new Error('Metodo no implementado'); }
  eliminar(_id) { throw new Error('Metodo no implementado'); }
}

// Implementacion concreta en memoria; sustituible por PostgreSQL/Prisma
// sin tocar ni el service ni el controller.
class UsuarioRepositorioMemoria extends UsuarioRepositorio {
  constructor() {
    super();
    this.usuarios = [];
    this.siguienteId = 1;
  }

  async buscarPorId(id) {
    return this.usuarios.find((u) => u.id === id) || null;
  }

  async buscarPorEmail(email) {
    return this.usuarios.find((u) => u.email === email) || null;
  }

  async insertar(usuario) {
    const conId = { ...usuario, id: this.siguienteId };
    this.siguienteId += 1;
    this.usuarios.push(conId);
    return conId;
  }

  async eliminar(id) {
    const indice = this.usuarios.findIndex((u) => u.id === id);
    if (indice === -1) return null;
    const [eliminado] = this.usuarios.splice(indice, 1);
    return eliminado;
  }
}

// ===========================================================================
// CAPA DE PRESENTACION — controller y rutas (solo HTTP)
// ===========================================================================

class UsuarioController {
  constructor({ servicio }) {
    this.servicio = servicio;
  }

  // El controller NO captura errores con try/catch: next() los delega
  // al error handler global (AppError).
  crear = async (req, res, next) => {
    try {
      const dto = new CrearUsuarioDto(req.body || {});
      const usuario = await this.servicio.crear({ dto });
      res.status(201).json(usuario);
    } catch (error) {
      next(error);
    }
  };

  obtener = async (req, res, next) => {
    try {
      const usuario = await this.servicio.obtenerPorId({ id: Number(req.params.id) });
      res.status(200).json(usuario);
    } catch (error) {
      next(error);
    }
  };

  eliminar = async (req, res, next) => {
    try {
      const usuario = await this.servicio.eliminar({ id: Number(req.params.id) });
      res.status(200).json(usuario);
    } catch (error) {
      next(error);
    }
  };
}

// ===========================================================================
// COMPOSICION — wire-up manual centralizado (contenedor.js)
// ===========================================================================

const repositorio = new UsuarioRepositorioMemoria();
const servicio = new UsuarioServicio({ usuarioRepositorio: repositorio });
const controller = new UsuarioController({ servicio });

// const router = require('express').Router();
// router.post('/usuarios', controller.crear);
// router.get('/usuarios/:id', controller.obtener);
// router.delete('/usuarios/:id', controller.eliminar);
// module.exports = router;

module.exports = { Usuario, CrearUsuarioDto, UsuarioDto, UsuarioServicio, UsuarioRepositorioMemoria, controller };