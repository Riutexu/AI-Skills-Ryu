/**
 * jwt-auth.js — Autenticación JWT con access y refresh tokens.
 *
 * Dependencias: npm install jsonwebtoken
 * Variables de entorno: JWT_ACCESS_SECRET, JWT_REFRESH_SECRET
 *
 * Estrategia:
 *  - Access token de 15 minutos (stateless)
 *  - Refresh token de 7 días guardado en el servidor (tabla en memoria)
 *  - Rotación: cada renovación invalida el refresh anterior
 *  - Reutilizar un refresh revocado detecta robo y revoca la cadena
 */
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'desarrollo-access-secreto';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'desarrollo-refresh-secreto';
const DURACION_ACCESS = '15m';
const DURACION_REFRESH = '7d';

// Tabla de refresh tokens en memoria: refreshId -> { usuarioId, expiraEn }
// En producción: base de datos (tabla refresh_tokens) con índices por usuario.
const refreshTokens = new Map();
let siguienteRefreshId = 1;

// ---------------------------------------------------------------------------
// Firma y verificación
// ---------------------------------------------------------------------------
function firmarAccessToken(usuarioId, rol) {
  return jwt.sign({ sub: String(usuarioId), rol }, ACCESS_SECRET, {
    algorithm: 'HS256',
    expiresIn: DURACION_ACCESS,
  });
}

function verificarAccessToken(token) {
  // Lanza error si la firma no vale o el token expiró
  return jwt.verify(token, ACCESS_SECRET, { algorithms: ['HS256'] });
}

// ---------------------------------------------------------------------------
// Emisión y rotación de refresh tokens
// ---------------------------------------------------------------------------
function emitirRefreshToken(usuarioId) {
  const id = `rt_${siguienteRefreshId}`;
  siguienteRefreshId += 1;
  refreshTokens.set(id, {
    usuarioId,
    expiraEn: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 días
  });
  return id;
}

/**
 * Renueva el par de tokens. Implementa rotación y detección de reuso:
 * si el refresh ya no está activo (revocado o rotado), se considera un
 * posible robo y se revocan todos los refresh del usuario.
 */
function rotarRefreshToken(refreshId, usuarioId) {
  const registro = refreshTokens.get(refreshId);

  if (!registro || registro.usuarioId !== usuarioId) {
    // Token desconocido: el usuario quizá reutilizó uno robado
    if (registro) {
      revocarTodosDe(usuarioId);
    }
    return null;
  }

  if (registro.expiraEn < Date.now()) {
    refreshTokens.delete(refreshId);
    return null;
  }

  // Rotación: el anterior deja de servir
  refreshTokens.delete(refreshId);
  return emitirRefreshToken(usuarioId);
}

function revocarTodosDe(usuarioId) {
  for (const [id, registro] of refreshTokens) {
    if (registro.usuarioId === usuarioId) {
      refreshTokens.delete(id);
    }
  }
}

// ---------------------------------------------------------------------------
// Endpoints de ejemplo (requiere express, bcrypt y el modelo de usuarios)
// ---------------------------------------------------------------------------
// const express = require('express');
// const bcrypt = require('bcrypt');
// const router = express.Router();
//
// // POST /auth/login -> { accessToken, refreshToken }
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body || {};
//   const usuario = usuarios.find((u) => u.email === email);
//   const valida = usuario && (await bcrypt.compare(password, usuario.passwordHash));
//   if (!valida) {
//     return res.status(401).json({ error: 'Credenciales inválidas' });
//   }
//   const accessToken = firmarAccessToken(usuario.id, usuario.rol);
//   const refreshToken = emitirRefreshToken(usuario.id);
//   res.status(200).json({ accessToken, refreshToken });
// });
//
// // POST /auth/refresh -> nuevo par con rotación
// router.post('/refresh', (req, res) => {
//   const { refreshToken, usuarioId } = req.body || {};
//   const nuevoRefresh = rotarRefreshToken(refreshToken, String(usuarioId));
//   if (!nuevoRefresh) {
//     return res.status(401).json({ error: 'Sesión expirada o invalidada' });
//   }
//   const accessToken = firmarAccessToken(usuarioId, rolDe(usuarioId));
//   res.status(200).json({ accessToken, refreshToken: nuevoRefresh });
// });
//
// // POST /auth/logout -> revoca el refresh del usuario
// router.post('/logout', (req, res) => {
//   revocarTodosDe(req.body.usuarioId);
//   res.status(200).json({ mensaje: 'Sesión cerrada' });
// });
//
// module.exports = { firmarAccessToken, verificarAccessToken, emitirRefreshToken, rotarRefreshToken };