/**
 * swagger.js — Generación de OpenAPI 3 con swagger-jsdoc.
 *
 * Los comentarios JSDoc con @swagger sobre cada handler en controllers/
 * alimentan este contrato. La UI de Swagger queda disponible en /api-docs.
 *
 * Instalación: npm install swagger-jsdoc swagger-ui-express
 */
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const opciones = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'API de Comercio',
      version: '1.0.0',
      description: 'API REST de productos y pedidos con validación, paginación e idempotencia.',
    },
    servers: [
      { url: 'http://localhost:3000/api/v1', description: 'Desarrollo local' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Producto: {
          type: 'object',
          required: ['id', 'nombre', 'precio'],
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Teclado mecánico' },
            precio: { type: 'number', example: 89.99 },
          },
        },
        ProductoEntrada: {
          type: 'object',
          required: ['nombre', 'precio'],
          properties: {
            nombre: { type: 'string', example: 'Teclado mecánico' },
            precio: { type: 'number', example: 89.99 },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                codigo: { type: 'string', example: 'RECURSO_NO_ENCONTRADO' },
                mensaje: { type: 'string', example: 'Producto no encontrado' },
              },
            },
          },
        },
        ListaPaginada: {
          type: 'object',
          properties: {
            data: { type: 'array', items: { $ref: '#/components/schemas/Producto' } },
            total: { type: 'integer', example: 125 },
            page: { type: 'integer', example: 1 },
            limit: { type: 'integer', example: 20 },
          },
        },
      },
    },
  },
  apis: ['./src/modulos/**/*.js'],
};

const spec = swaggerJSDoc(opciones);

/**
 * Monta la documentación en /api-docs.
 * @param {import('express').Express} app Instancia de la aplicación Express
 */
function montarDocumentacion(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}

module.exports = { spec, montarDocumentacion };