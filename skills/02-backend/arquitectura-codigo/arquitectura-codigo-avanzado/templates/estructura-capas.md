# Estructura por capas

Estructura de referencia para un backend por capas con módulos de dominio.

```
src/
├── compartido/                     # Cruza todos los módulos
│   ├── errores/
│   │   └── AppError.js             # Errores operacionales con status + codigo
│   └── middlewares/
│       └── errorHandler.js         # Handler global (ultimo middleware)
│
├── modulos/
│   └── usuario/                    # Un modulo por dominio de negocio
│       ├── domain/                 # Capa de dominio: pura, sin dependencias
│       │   ├── Usuario.js          # Entidad con sus invariantes
│       │   └── errores/            # Errores de dominio (negocio)
│       │       └── emailDuplicado.js
│       │
│       ├── application/            # Capa de aplicacion: casos de uso
│       │   ├── servicios/
│       │   │   └── UsuarioServicio.js   # Logica de negocio (DI por inyeccion)
│       │   └── dtos/
│       │       ├── CrearUsuarioDto.js
│       │       ├── ActualizarUsuarioDto.js
│       │       └── UsuarioDto.js   # Salida publica (sin passwordHash)
│       │
│       ├── infrastructure/         # Capa de infraestructura: detalles
│       │   └── repositorios/
│       │       ├── UsuarioRepositorio.js    # Interfaz (puerto)
│       │       └── UsuarioRepositorioMemoria.js  # Implementacion concreta
│       │
│       └── presentation/           # Capa de presentacion: transporte HTTP
│           ├── UsuarioController.js
│           └── rutas/
│               └── usuario.routes.js
│
├── composicion/
│   └── contenedor.js               # Wire-up manual: inyeccion de dependencias
└── app.js                          # Monta rutas, middlewares y error handler
```

## Reglas de dependencia (sentido unico)

| Desde | Hacia | Prohibido |
| --- | --- | --- |
| domain | nada | Importar Express, JSON, BD, DTOs |
| application | domain | Usar req/res, repositorio concreto, BD |
| infrastructure | domain (implementa su interfaz) | Importar services o controllers |
| presentation | application, domain | Acceder a la BD o a repositorios concretos |
| composicion | todas | Lógica de negocio; solo construye y une |

El sentido es siempre hacia adentro: la capa externa (presentation) depende de la
interna (application/domain), nunca al revés. El error handler global y los
`AppError` viven en `compartido` y son la única vía de errores entre capas:

1. El repositorio lanza errores de infraestructura.
2. El service los captura y traduce a `AppError` con codigo y status HTTP.
3. El controller no captura nada: `next(error)` lo deja caer al error handler.