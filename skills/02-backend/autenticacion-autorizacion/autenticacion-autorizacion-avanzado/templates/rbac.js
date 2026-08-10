/**
 * rbac.js — Middlewares de autenticación y autorización por roles (RBAC).
 *
 * Uso:
 *   router.get('/mi-perfil', autenticar, verPerfil);
 *   router.post('/productos', autenticar, autorizar('admin', 'editor'), crearProducto);
 *
 * autenticar -> verifica el Bearer token y adjunta req.usuario
 * autorizar  -> comprueba el rol de req.usuario contra los permitidos
 */
const { verificarAccessToken } = require('./jwt-auth');

// ---------------------------------------------------------------------------
// Middleware 1: autenticar
// ---------------------------------------------------------------------------
function autenticar(req, res, next) {
  const header = req.headers.authorization || '';

  if (!header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Se requiere un token Bearer' });
  }

  const token = header.slice(7);

  try {
    const payload = verificarAccessToken(token);
    req.usuario = { id: payload.sub, rol: payload.rol };
    next();
  } catch {
    // Token inválido o expirado: misma respuesta en ambos casos
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

// ---------------------------------------------------------------------------
// Middleware 2: autorizar (RBAC)
// ---------------------------------------------------------------------------
function autorizar(...rolesPermitidos) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ error: 'Autenticación requerida' });
    }

    if (!rolesPermitidos.includes(req.usuario.rol)) {
      return res.status(403).json({ error: 'No tienes permisos para esta operación' });
    }

    next();
  };
}

// ---------------------------------------------------------------------------
// Middleware 3: autorizar propietario o admin (autorización por recurso)
// ---------------------------------------------------------------------------
function autorizarPropietarioOAdmin(rolesAdmin = ['admin']) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ error: 'Autenticación requerida' });
    }

    const esAdmin = rolesAdmin.includes(req.usuario.rol);
    const esPropietario = String(req.params.usuarioId) === String(req.usuario.id);

    if (!esAdmin && !esPropietario) {
      return res.status(403).json({ error: 'Solo el propietario o un admin pueden hacer esto' });
    }

    next();
  };
}

module.exports = { autenticar, autorizar, autorizarPropietarioOAdmin };