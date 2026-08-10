/**
 * app.js — Aplicación Express modular con versionado, middlewares
 * globales, validación y manejo centralizado de errores.
 *
 * Estructura esperada:
 *   src/
 *     app.js
 *     server.js
 *     config/env.js
 *     routes/productos.routes.js
 *     controllers/productos.controller.js
 *     schemas/producto.schema.js
 *     middlewares/validate.js
 *     middlewares/errorHandler.js
 *     middlewares/auth.swift.js (placeholder)
 */
const express = require('express');
const cors = require('cors');

const { env } = require('./config/env');
const productosRoutes = require('./routes/productos.routes');
const { errorHandler } = require('./middlewares/errorHandler');

function crearApp() {
  const app = express();

  // Middlewares globales
  app.use(cors({ origin: env.corsOrigen }));
  app.use(express.json());
  app.use(logPeticiones);

  // Rutas versionadas: /api/v1/...
  app.use(`/api/${env.versionApi}`, productosRoutes);

  // Ruta de estado básica (sin dependencias externas)
  app.get('/health', (req, res) => {
    res.status(200).json({ estado: 'ok', version: env.versionApi });
  });

  // 404 para rutas no definidas
  app.use((req, res) => {
    res.status(404).json({
      error: {
        codigo: 'RUTA_NO_ENCONTRADA',
        mensaje: `La ruta ${req.method} ${req.originalUrl} no existe`,
      },
    });
  });

  // El error handler SIEMPRE va al final de la cadena
  app.use(errorHandler);

  return app;
}

// Logging simple de peticiones (reemplazable por morgan/pino)
function logPeticiones(req, res, next) {
  const inicio = Date.now();
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - inicio}ms`);
  });
  next();
}

module.exports = { crearApp };

// server.js — punto de entrada separado (este archivo continua en server.js)
// const { crearApp } = require('./app');
// const { env } = require('./config/env');
// const app = crearApp();
// app.listen(env.puerto, () => console.log(`API escuchando en http://localhost:${env.puerto}`));