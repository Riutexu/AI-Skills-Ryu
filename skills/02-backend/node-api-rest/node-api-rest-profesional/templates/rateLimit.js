/**
 * rateLimit.js — Rate limiting por IP para Express y Fastify.
 *
 * Express:  npm install express-rate-limit
 * Fastify:  npm install @fastify/rate-limit
 *
 * Colocar el limiter ANTES de los middlewares que parsean el body para
 * rechazar abusos sin costo innecesario de CPU.
 */

// ---------------------------------------------------------------------------
// Opción para Express
// ---------------------------------------------------------------------------
const rateLimit = require('express-rate-limit');

const limitadorExpress = rateLimit({
  windowMs: 15 * 60 * 1000, // ventana de 15 minutos
  limit: 100, // máximo de peticiones por ventana e IP
  standardHeaders: 'draft-7', // RateLimit-* y Retry-After
  legacyHeaders: false,
  message: {
    error: {
      codigo: 'DEMASIADAS_PETICIONES',
      mensaje: 'Has superado el límite de peticiones. Intenta más tarde.',
    },
  },
  // Identifica clientes por IP; en producción tras un proxy confiable usar app.set('trust proxy', 1)
  keyGenerator: (req) => req.ip,
});

// ---------------------------------------------------------------------------
// Opción para Fastify
// ---------------------------------------------------------------------------
// const rateLimitOpts = {
//   max: 100,
//   timeWindow: '15 minutes',
//   errorResponseBuilder: () => ({
//     statusCode: 429,
//     error: {
//       codigo: 'DEMASIADAS_PETICIONES',
//       mensaje: 'Has superado el límite de peticiones. Intenta más tarde.',
//     },
//   }),
// };
//
// const app = require('fastify')({ logger: true });
// app.register(require('@fastify/rate-limit'), rateLimitOpts);

module.exports = { limitadorExpress };