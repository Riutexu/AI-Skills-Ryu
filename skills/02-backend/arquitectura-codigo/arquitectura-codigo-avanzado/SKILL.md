---
name: arquitectura-codigo-avanzado
description: Arquitectura por capas controllers/services/repositories con DTOs, inyección de dependencias manual y manejo de errores por capa, con un caso completo de usuario.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "arquitectura-codigo"
  nivel: avanzado
  stack: "Node.js, TypeScript, Express, arquitectura por capas"
---

# Arquitectura por capas: controllers, servicios y repositorios

## Qué hace este skill

Te guía en la migración de un proyecto plano a una arquitectura por capas: separación estricta entre la capa de transporte (controllers), la lógica de negocio (services) y el acceso a datos (repositories), con objetos de transferencia (DTOs) para cruzar fronteras, inyección de dependencias manual para desacoplar y una política de manejo de errores por capa. Incluye un caso completo del módulo `usuario` listo para usar como plantilla de los demás módulos.

## Cuándo usarlo

- Cuando los controladores de tu API mezclan HTTP, validación, negocio y base de datos.
- Cuando quieres poder cambiar la base de datos o el framework sin reescribir la lógica.
- Cuando los tests requieren aislar la lógica de negocio del transporte.
- Cuando el proyecto crece en módulos y quieres un patrón repetible para cada uno.

## Requisitos previos

- Nivel básico de `arquitectura-codigo` (carpetas por responsabilidad, funciones pequeñas, naming).
- Express básico (routing, middlewares) y familiaridad con REST.
- Conocer clases y módulos en JavaScript/TypeScript.
- Nociones de testing (mockear una dependencia en un test unitario).

## Workflow paso a paso

1. Definir la estructura por capas: `presentation/` (controllers y rutas), `application/` (services y DTOs), `domain/` (entidades y errores de dominio) e `infrastructure/` (repositorios, clientes de base de datos).
2. Agrupar por módulo: cada dominio de negocio (usuario, pedido) tiene su carpeta con sus cuatro capas internas.
3. Modelar la entidad de dominio (usuario) con sus reglas: campos obligatorios, email válido, edad mínima; la entidad conoce y aplica sus invariantes.
4. Definir DTOs para cada frontera: `CrearUsuarioDto`, `ActualizarUsuarioDto` (entrada) y `UsuarioDto` (salida pública, sin passwordHash).
5. Implementar el repositorio: interfaz (`UsuarioRepositorio` con `buscarPorId`, `buscarPorEmail`, `insertar`, `actualizar`) y una implementación concreta en memoria que se pueda reemplazar por PostgreSQL.
6. Implementar el service: usa el repositorio (inyectado) y los DTOs, aplica reglas de negocio (email duplicado -> error de negocio) y traduce errores de dominio a `AppError`s con su semántica.
7. Implementar el controller: solo lee `req`, mapea a DTO de entrada, llama al service y construye `res` con el DTO de salida y el status code correcto.
8. Registrar las rutas: `usuario.routes` monta el controller y le inyecta el service con el repositorio en memoria (wire-up manual en un composable root).
9. Establecer la política de errores por capa: el repositorio lanza errores de infraestructura, el service los convierte en `AppError` con código (409 email duplicado, 404 inexistente) y el controller nunca los captura: los delega al error handler global.
10. Probar la separación: cambiar la implementación del repositorio por un mock en un test unitario del service sin tocar la lógica, y verificar que el controller hace solo HTTP.
11. Refactorizar los demás módulos del proyecto siguiendo el patrón del módulo `usuario`.
12. Verificar las reglas de dependencia: el service no importa Express, el controller no importa la base de datos, y las capas internas no importan hacia afuera.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `modulos` | Dominios de negocio del proyecto | array | sí | `['usuario', 'pedido']` |
| `capas` | Capas soportadas por la estructura | array | no | `['presentation', 'application', 'domain', 'infrastructure']` |
| `orm` | Persistencia concreta de los repositorios | string | no | `memoria` |
| `idiomaCodigo` | Idioma de entidades y DTOs | string | no | `espanol` |
| `patronDto` | Sufijo de los objetos de transferencia | string | no | `Dto` |
| `manejoErrores` | Estrategia de traducción de errores entre capas | string | sí | `AppError` |
| `estructuraEmails` | Ubicación de las rutas del módulo | string | no | `presentation/rutas` |
| `repositorioBase` | Interfaz base de los repositorios | string | no | `UsuarioRepositorio` |

## Reglas y checklist

- [ ] Un módulo = carpeta con capas `presentation`, `application`, `domain` e `infrastructure` dentro.
- [ ] El controller solo traduce HTTP (leer `req`, llamar service, escribir `res`) y no contiene reglas de negocio.
- [ ] El service contiene reglas de negocio y no sabe nada de Express, JSON ni cookies.
- [ ] El repositorio solo habla de persistencia y expone una interfaz inyectable.
- [ ] Las fronteras entre capas se cruzan con DTOs, nunca con entidades o req/res directamente.
- [ ] La salida pública (DTO) nunca filtra campos sensibles (passwordHash).
- [ ] Las dependencias se inyectan manualmente por constructor o función; sin singletons estáticos.
- [ ] Los errores se traducen en cada frontera: infraestructura -> `AppError` en el service.
- [ ] El controller no captura errores con try/catch: los delega al error handler global.
- [ ] Cambiar la persistencia (memoria -> PostgreSQL) no modifica service ni controller.
- [ ] El wire-up de la composición (repositorio + service + controller) está centralizado en un solo lugar.

## Ejemplos de prompts

- "Migra el módulo usuario a arquitectura por capas: entity, DTOs, repository con interfaz, service con DI y controller que solo haga HTTP."
- "Define la entidad Usuario con sus invariantes (email válido, menor de edad prohibido) y los DTOs CrearUsuarioDto y UsuarioDto."
- "Implementa el repositorio UsuarioRepositorio con interfaz y una implementación en memoria lista para PostgreSQL."
- "Traduce los errores del repositorio a AppError en el service: 409 email duplicado, 404 usuario inexistente."
- "Escribe un test unitario del service inyectando un repositorio mock para verificar la regla de email duplicado."

## Plantillas y recursos

- `templates/estructura-capas.md` — árbol de carpetas por capas y reglas de dependencia entre ellas.
- `templates/modulo-usuario.js` — caso completo del módulo usuario: entidad, DTOs, repositorio, service, controller y rutas.
- Checklist del nivel: `resources/checklist.md`.