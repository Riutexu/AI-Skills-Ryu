/**
 * server.js — API REST básica con Express y datos en memoria.
 * Ejecutar con: node server.js
 * Probar con:  curl http://localhost:3000/api/productos
 */
const express = require('express');

const app = express();

// Middleware global para leer cuerpos JSON en POST y PUT
app.use(express.json());

// ---------------------------------------------------------------------------
// Fuente de datos en memoria (reemplazar luego por una base de datos real)
// ---------------------------------------------------------------------------
const productos = [
  { id: 1, nombre: 'Teclado mecánico', precio: 89.99 },
  { id: 2, nombre: 'Ratón inalámbrico', precio: 24.5 },
];
let siguienteId = 3;

// ---------------------------------------------------------------------------
// GET /api/productos — listar la colección (200)
// ---------------------------------------------------------------------------
app.get('/api/productos', (req, res) => {
  res.status(200).json(productos);
});

// ---------------------------------------------------------------------------
// GET /api/productos/:id — obtener un recurso (200) o 404 si no existe
// ---------------------------------------------------------------------------
app.get('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'El id debe ser un número entero' });
  }

  const producto = productos.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.status(200).json(producto);
});

// ---------------------------------------------------------------------------
// POST /api/productos — crear un recurso (201) o 400 si el cuerpo es inválido
// ---------------------------------------------------------------------------
app.post('/api/productos', (req, res) => {
  const { nombre, precio } = req.body || {};

  if (!nombre || typeof nombre !== 'string' || typeof precio !== 'number') {
    return res
      .status(400)
      .json({ error: 'Los campos nombre (string) y precio (number) son obligatorios' });
  }

  const nuevoProducto = { id: siguienteId, nombre, precio };
  siguienteId += 1;
  productos.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
});

// ---------------------------------------------------------------------------
// PUT /api/productos/:id — reemplazar un recurso (200) o 404 si no existe
// ---------------------------------------------------------------------------
app.put('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const indice = productos.findIndex((p) => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  const { nombre, precio } = req.body || {};
  if (!nombre || typeof nombre !== 'string' || typeof precio !== 'number') {
    return res
      .status(400)
      .json({ error: 'Los campos nombre (string) y precio (number) son obligatorios' });
  }

  productos[indice] = { id, nombre, precio };
  res.status(200).json(productos[indice]);
});

// ---------------------------------------------------------------------------
// DELETE /api/productos/:id — eliminar un recurso (200) o 404 si no existe
// ---------------------------------------------------------------------------
app.delete('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const indice = productos.findIndex((p) => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  const [eliminado] = productos.splice(indice, 1);
  res.status(200).json(eliminado);
});

// ---------------------------------------------------------------------------
// Arranque del servidor
// ---------------------------------------------------------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});