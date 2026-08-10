# Checklist — api-design-basico

## Recursos y rutas

- [ ] Lista de sustantivos del dominio identificada antes de diseñar rutas
- [ ] Colecciones en plural y rutas en kebab-case (`/usuarios`, no `/usuario` ni `/user`)
- [ ] Elementos accedidos por `/{id}` (`/usuarios/42`)
- [ ] Endpoints anidados solo para hijos dependientes del padre (`/pedidos/:id/items`)
- [ ] Ninguna ruta mezcla verbos en la URL (`/crearUsuario` prohibido)

## Verbos HTTP

- [ ] GET solo para leer, sin efectos secundarios
- [ ] POST para crear recursos nuevos
- [ ] PUT para reemplazo completo de un recurso
- [ ] PATCH para modificación parcial de campos
- [ ] DELETE para eliminar recursos

## Códigos de estado

- [ ] 200 en lecturas y escrituras con cuerpo de respuesta
- [ ] 201 en creaciones, con cabecera `Location`
- [ ] 204 en eliminaciones y escrituras sin cuerpo
- [ ] 400 para peticiones malformadas
- [ ] 404 para recursos inexistentes
- [ ] 401 y 403 usados correctamente (autenticación vs autorización)
- [ ] 409 para conflictos de estado y duplicados
- [ ] 422 para datos semánticamente inválidos
- [ ] Errores siempre con cuerpo JSON informativo

## Verificación

- [ ] La tabla de diseño cubre todos los recursos con verbo, ruta, descripción y códigos
- [ ] Un cliente puede deducir el resultado solo con el status code
- [ ] Revisados los casos límite: sin auth, sin permisos, inexistente, duplicado