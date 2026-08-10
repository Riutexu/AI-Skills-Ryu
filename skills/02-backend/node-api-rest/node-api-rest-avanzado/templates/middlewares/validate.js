/**
 * middlewares/validate.js — Middleware genérico de validación con Zod.
 *
 * Uso:
 *   router.post('/', validate({ body: productoSchema }), controlador);
 *   router.get('/:id', validate({ params: idSchema }), controlador);
 *
 * Ante un error de validación, delega en el error handler con status 400.
 */
const { z } = require('zod');

const AppError = require('../middlewares/errorHandler').AppError;

/**
 * @param {{body?: import('zod').ZodType, params?: import('zod').ZodType, query?: import('zod').ZodType}} esquemas
 * @returns {import('express').RequestHandler}
 */
function validate(esquemas = {}) {
  return (req, res, next) => {
    try {
      if (esquemas.body) {
        req.body = esquemas.body.parse(req.body);
      }
      if (esquemas.params) {
        req.params = esquemas.params.parse(req.params);
      }
      if (esquemas.query) {
        req.query = esquemas.query.parse(req.query);
      }
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const detalle = error.issues.map((issue) => ({
          campo: issue.path.join('.'),
          mensaje: issue.message,
        }));
        return next(new AppError(400, 'VALIDACION_FALLIDA', 'Datos de entrada inválidos', detalle));
      }
      next(error);
    }
  };
}

module.exports = { validate };