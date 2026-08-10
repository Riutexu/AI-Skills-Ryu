/**
 * middlewares/errorHandler.js — Clase AppError y error handler centralizado.
 *
 * Todos los errores operacionales se lanzan como `new AppError(status, codigo, mensaje)`
 * y este handler los convierte en una respuesta JSON uniforme. Los errores
 * no operacionales (bugs) se registran con detalle y responden 500 genérico.
 */
class AppError extends Error {
  /**
   * @param {number} statusCode Código HTTP (400, 401, 403, 404, 409...)
   * @param {string} codigo Código interno legible para el cliente
   * @param {string} mensaje Mensaje seguro para exponer al cliente
   * @param {unknown} [detalle] Detalles adicionales (p. ej. errores de validación)
   */
  constructor(statusCode, codigo, mensaje, detalle) {
    super(mensaje);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.codigo = codigo;
    this.detalle = detalle;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

function errorHandler(err, req, res, _next) {
  const esOperacional = err instanceof AppError;

  if (!esOperacional) {
    // Bug real: registrar con detalle completo para debugging
    console.error('[ERROR NO OPERACIONAL]', err);
  }

  const status = esOperacional ? err.statusCode : 500;
  const codigo = esOperacional ? err.codigo : 'ERROR_INTERNO';

  const cuerpo = {
    error: {
      codigo,
      mensaje: esOperacional ? err.message : 'Ocurrió un error inesperado en el servidor',
    },
  };

  if (esOperacional && err.detalle !== undefined) {
    cuerpo.error.detalle = err.detalle;
  }

  res.status(status).json(cuerpo);
}

module.exports = { AppError, errorHandler };