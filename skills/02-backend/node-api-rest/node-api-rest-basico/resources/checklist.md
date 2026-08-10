# Checklist — node-api-rest-basico

## Proyecto y arranque

- [ ] `package.json` inicializado con `npm init -y`
- [ ] Express instalado (`npm install express`)
- [ ] El servidor arranca con `node server.js` sin errores
- [ ] El puerto se lee de `process.env.PORT` con fallback a 3000

## Routing y verbos HTTP

- [ ] `GET /api/productos` devuelve el array completo con status 200
- [ ] `GET /api/productos/:id` devuelve el recurso con status 200
- [ ] `GET /api/productos/:id` devuelve 404 con cuerpo JSON cuando el id no existe
- [ ] `POST /api/productos` crea un recurso y devuelve 201 con el objeto creado
- [ ] `POST /api/productos` devuelve 400 con cuerpo JSON cuando faltan campos
- [ ] `PUT /api/productos/:id` reemplaza el recurso y devuelve 200
- [ ] `PUT /api/productos/:id` devuelve 404 si el id no existe
- [ ] `DELETE /api/productos/:id` elimina y devuelve 200 con el recurso eliminado
- [ ] Los ids incrementan automáticamente sin duplicados

## Parámetros y respuestas

- [ ] `req.params.id` se convierte a número antes de comparar
- [ ] Cuerpo JSON habilitado con `express.json()`
- [ ] Todas las respuestas usan `res.json(...)` (Content-Type application/json)
- [ ] Los errores 400/404 son objetos JSON `{ "error": "..." }`
- [ ] No se filtran stack traces ni detalles internos en errores

## Pruebas manuales sugeridas

- [ ] `curl http://localhost:3000/api/productos`
- [ ] `curl http://localhost:3000/api/productos/1`
- [ ] `curl http://localhost:3000/api/productos/999` (esperar 404)
- [ ] `curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{"nombre":"Monitor","precio":199.9}'` (esperar 201)
- [ ] `curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d '{}'` (esperar 400)
- [ ] `curl -X PUT http://localhost:3000/api/productos/1 -H "Content-Type: application/json" -d '{"nombre":"Teclado RGB","precio":119.0}'`
- [ ] `curl -X DELETE http://localhost:3000/api/productos/2`