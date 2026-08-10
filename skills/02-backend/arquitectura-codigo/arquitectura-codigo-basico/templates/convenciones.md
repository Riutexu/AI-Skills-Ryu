# Convenciones de código del equipo

Convenciones base para mantener el código legible y consistente.
Revisa y ajusta los valores con tu equipo; documenta los cambios como ADR (nivel profesional).

## 1. Nombres

| Caso | Regla | Ejemplo |
| --- | --- | --- |
| Funciones | Verbo que describe el QUÉ (`calcular`, `obtener`, `guardar`, `validar`) | `calcularTotalPedido` |
| Variables | Sustantivos concretos; arrays en plural | `usuarios`, `pedidos` |
| Booleanos | Prefijo de estado: `es`, `tiene`, `puede`, `esta` | `esActivo`, `tienePermiso` |
| Constantes | UPPER_SNAKE_CASE | `MAXIMO_POR_PAGINA` |
| Clases/Componentes | PascalCase | `UserCard`, `PedidoService` |
| Archivos | kebab-case | `user-card.jsx`, `pedido-service.js` |

Regla del nombre: si necesitas un comentario para explicar qué hace una función,
el nombre está mal. Se elige el QUÉ sobre el CÓMO (`obtenerUsuariosActivos`,
no `procesarDatos`).

## 2. Funciones

- Una función hace una sola cosa.
- Máximo 20 líneas; si supera, extraer subtareas con nombres propios.
- Un solo nivel de abstracción: no mezclar manipulación de datos con HTTP o con UI.
- Argumentos: máximo 3; a partir de ahí, un objeto de opciones.
- Preferir `return` temprano (early return) para los casos de error/límite.

```js
// Evitar
function guardar(data) {
  const filename = ...; // 30 lineas mezclando validación, disco y log
}

// Preferir
function guardarUsuario(usuario, repositorio) {
  const datosValidos = validarUsuario(usuario);
  if (!datosValidos.valido) return { error: datosValidos.motivo };
  return repositorio.insertar(usuario);
}
```

## 3. Comentarios

- Explican el PORQUÉ: decisiones, alternativas descartadas, formatos impuestos.
- Describen casos límite o dependencias que no son obvias en el código.
- NUNCA repiten el código: `// suma a + b` delante de `a + b` esta prohibido.
- NUNCA se sube código comentado; el historial de git ya lo conserva.
- Las secciones se separan con una línea en blanco, no con bloques de asteriscos.

## 4. Límites del proyecto

| Límite | Valor por defecto |
| --- | --- |
| Líneas por función | 20 |
| Líneas por archivo | 200 (dividir al superarlo) |
| Argumentos por función | 3 (4+ como objeto de opciones) |
| Caracteres por línea | 100 |

## 5. Reglas transversales

- `utils/` solo contiene funciones puras: mismas entradas -> mismas salidas, sin efectos.
- Sin duplicación visible: si dos funciones hacen lo mismo, extraer la común.
- No hay imports sueltos entre carpetas de UI a utils de negocio invertidas.
- El README del proyecto documenta el árbol de carpetas y estas convenciones.
- El linter del repo (eslint/prettier) fuerza formato; los humanos revisan semántica.

## Plantillas

- Árbol de proyecto: `arbol-proyecto.md`
- Caso completo por capas (nivel avanzado): `/templates/modulo-usuario.js` en el skill avanzado