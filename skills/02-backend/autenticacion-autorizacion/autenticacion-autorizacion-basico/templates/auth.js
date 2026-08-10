/**
 * auth.js — Autenticación básica con express-session y bcrypt.
 *
 * Dependencias: npm install express express-session bcrypt
 * Variables de entorno: SESSION_SECRET (obligatoria en producción)
 *
 * Flujo: POST /registro -> POST /login (crea sesión) ->
 *        GET /perfil (protegido) -> POST /logout (destruye sesión)
 */
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// ---------------------------------------------------------------------------
// Almacén de usuarios en memoria (en producción: base de datos)
// ---------------------------------------------------------------------------
const usuarios = [
  {
    id: 1,
    email: 'admin@ejemplo.com',
    nombre: 'Administradora',
    passwordHash: '$2b$12$C6UzMDM.H6dfI/f/IKcEeO7l3p4m0eX9zM8p1oXBYl7VY9zH2k8iK',
  },
];
let siguienteId = 2;

// Hash generado arriba solo como ejemplo de arranque; el registro real
// siempre se hace con bcrypt.hash en tiempo de ejecución.

// ---------------------------------------------------------------------------
// Sesión con cookie httpOnly
// ---------------------------------------------------------------------------
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET || 'secreto-de-desarrollo-cambiar',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000, // 1 hora
    },
  })
);

// ---------------------------------------------------------------------------
// POST /registro
// ---------------------------------------------------------------------------
app.post('/registro', async (req, res, next) => {
  try {
    const { email, nombre, password } = req.body || {};

    if (!email || !nombre || typeof password !== 'string' || password.length < 8) {
      return res
        .status(400)
        .json({ error: 'Email, nombre y contraseña (mínimo 8 caracteres) son obligatorios' });
    }

    if (usuarios.some((u) => u.email === email)) {
      return res.status(409).json({ error: 'Ya existe una cuenta con ese email' });
    }

    // bcrypt genera un salt aleatorio e incluye el salt dentro del hash
    const passwordHash = await bcrypt.hash(password, 12);

    const nuevoUsuario = { id: siguienteId, email, nombre, passwordHash };
    siguienteId += 1;
    usuarios.push(nuevoUsuario);

    res.status(201).json({ id: nuevoUsuario.id, email, nombre });
  } catch (error) {
    next(error);
  }
});

// ---------------------------------------------------------------------------
// POST /login
// ---------------------------------------------------------------------------
app.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body || {};
    if (!email || typeof password !== 'string') {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
    }

    const usuario = usuarios.find((u) => u.email === email);
    // Mismo mensaje para email inexistente y contraseña errónea:
    // evita que un atacante enumere cuentas válidas.
    const contrasenaCorrecta =
      usuario === undefined ? false : await bcrypt.compare(password, usuario.passwordHash);

    if (!usuario || !contrasenaCorrecta) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Crear sesión autenticada
    req.session.usuarioId = usuario.id;
    res.status(200).json({ id: usuario.id, email: usuario.email, nombre: usuario.nombre });
  } catch (error) {
    next(error);
  }
});

// ---------------------------------------------------------------------------
// Middleware de protección de rutas (autorización básica)
// ---------------------------------------------------------------------------
function requiereAutenticacion(req, res, next) {
  if (!req.session.usuarioId) {
    return res.status(401).json({ error: 'Se requiere iniciar sesión' });
  }
  next();
}

// ---------------------------------------------------------------------------
// GET /perfil — ruta protegida
// ---------------------------------------------------------------------------
app.get('/perfil', requiereAutenticacion, (req, res) => {
  const usuario = usuarios.find((u) => u.id === req.session.usuarioId);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json({ id: usuario.id, email: usuario.email, nombre: usuario.nombre });
});

// ---------------------------------------------------------------------------
// POST /logout — destruir sesión y limpiar cookie
// ---------------------------------------------------------------------------
app.post('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ error: 'No se pudo cerrar la sesión' });
    }
    res.clearCookie('sid');
    res.status(200).json({ mensaje: 'Sesión cerrada' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));