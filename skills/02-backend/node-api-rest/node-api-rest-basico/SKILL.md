---
name: node-api-rest-basico
description: Construye APIs REST en Node.js con Express: routing, verbos HTTP, parámetros de ruta y query, respuestas JSON y códigos de estado correctos.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "node-api-rest"
  nivel: basico
  stack: "Node.js, Express, JavaScript"
---

# API REST básica con Express

## Qué hace este skill

Te guía en la creación de una API REST funcional con Node.js y Express usando datos en memoria. Cubre el routing de los cuatro verbos principales (GET, POST, PUT, DELETE), parámetros de ruta y de query, respuestas JSON y la elección del código de estado HTTP correcto para cada operación.

## Cuándo usarlo

- Cuando necesitas montar un backend HTTP simple que exponga operaciones de altas, bajas, modificaciones y consultas (CRUD).
- Cuando estás aprendiendo o enseñando los fundamentos de REST y quieres un ejemplo mínimo y ejecutable.
- Cuando quieres un prototipo funcional rápido antes de introducir una base de datos real.

## Requisitos previos

- Node.js 18 o superior instalado (incluye npm).
- Conocimientos básicos de JavaScript (funciones, objetos, arrays, `require` o `import`).
- Familiaridad con JSON.
- Un cliente HTTP para probar (curl, Postman, Insomnia o la extensión REST Client de VS Code).

## Workflow paso a paso

1. Crear la carpeta del proyecto e inicializar `package.json` con `npm init -y`.
2. Instalar Express: `npm install express`.
3. Crear el archivo `server.js` e importar Express: `const express = require('express')`.
4. Crear la instancia `app` y habilitar `express.json()` para leer cuerpos JSON en POST y PUT.
5. Definir una colección en memoria (array de objetos) como fuente de datos inicial, con `id` numéricos incrementales.
6. Definir `GET /recurso` para listar la colección y responder con `res.json(...)` (código 200).
7. Definir `GET /recurso/:id` para obtener un elemento; convertir `req.params.id` a número y responder 404 con un mensaje JSON si no existe.
8. Definir `POST /recurso` para crear; validar el cuerpo con condicionales simples y responder 201 con el recurso creado, o 400 si los datos son inválidos.
9. Definir `PUT /recurso/:id` para reemplazar un recurso existente; manejar explícitamente el caso 404.
10. Definir `DELETE /recurso/:id` para eliminar y devolver el recurso eliminado con 200.
11. Asignar el puerto con `const PORT = process.env.PORT || 3000` y arrancar con `app.listen(PORT, callback)`.
12. Ejecutar `node server.js` y probar cada endpoint con curl (o tu cliente HTTP) verificando el status code devuelto.
13. Probar casos límite: id inexistente (404), cuerpo incompleto (400) y creación exitosa (201).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `framework` | Framework HTTP a utilizar | string | sí | `express` |
| `puerto` | Puerto donde escucha la API | number | no | `3000` |
| `recurso` | Nombre del recurso en singular para las rutas | string | sí | `producto` |
| `coleccion` | Nombre del recurso en plural para la colección | string | sí | `productos` |
| `formatoRespuesta` | Estructura del JSON de éxito | string | no | `{ "data": [...] }` | 
| `mensajeError404` | Texto del error cuando no existe el recurso | string | no | `'Producto no encontrado'` |
| `idParametro` | Nombre del parámetro de ruta del id | string | no | `id` |
| `persistencia` | Estrategia de almacenamiento inicial | string | no | `memoria` (array) |

## Reglas y checklist

- [ ] Usar nombres de rutas en plural para colecciones (`/productos`) y operaciones restringidas a los verbos HTTP.
- [ ] Devolver la colección completa en GET listar y un único objeto en GET por id.
- [ ] Usar 200 para respuestas de éxito de GET/PUT/DELETE, 201 para creación y 204 cuando la respuesta es vacía.
- [ ] Usar 400 para peticiones mal formadas y 404 para recursos inexistentes.
- [ ] Convertir `req.params.id` a número; los ids de la colección deben ser numéricos y únicos.
- [ ] Enviar siempre `Content-Type: application/json` (Express lo hace con `res.json`).
- [ ] Validar el cuerpo de POST/PUT con validación mínima antes de insertar.
- [ ] No exponer stack traces ni información interna en los mensajes de error.
- [ ] Definir el puerto a través de `process.env.PORT` con un valor por defecto.

## Ejemplos de prompts

- "Crea una API REST en Express con CRUD completo para el recurso tarea, con datos en memoria y códigos de estado correctos."
- "Muéstrame el routing de GET /usuarios/:id en Express con manejo de 404."
- "Agrega a este server.js un endpoint PUT que valide el cuerpo y devuelva 400 cuando falten campos."
- "Explica por qué POST debe devolver 201 y cómo estructurar la respuesta JSON de un endpoint de creación."
- "Escribe las rutas de una colección pedidos con endpoints anidados para los items de cada pedido."

## Plantillas y recursos

- Plantilla base: `templates/server.js` — API Express completa con CRUD de productos en memoria.
- Checklist del nivel: `resources/checklist.md` — verificación paso a paso del resultado.