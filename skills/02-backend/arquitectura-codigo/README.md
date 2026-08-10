# Arquitectura de Código

Conjunto de skills progresivos para estructurar bases de código mantenibles: desde la organización de carpetas y la separación de responsabilidades, pasando por la arquitectura por capas (controllers/services/repositories) con DTOs e inyección de dependencias, hasta clean architecture y hexagonal con puertos y adaptadores, CQRS, monorepos y decisiones documentadas con ADRs.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `arquitectura-codigo-basico` | Básico | Organización de carpetas (`src/`, `components/`, `utils/`), separación de responsabilidades, funciones pequeñas, comentarios útiles y nombres expresivos |
| `arquitectura-codigo-avanzado` | Avanzado | Capas controllers/services/repositories, DTOs, inyección de dependencias manual, manejo de errores por capa y modularidad |
| `arquitectura-codigo-profesional` | Profesional | Clean architecture y hexagonal (puertos/adaptadores), CQRS básico, monorepos (pnpm workspaces/turborepo), SOLID, eventos de dominio y ADRs |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| Organización | Carpetas por tipo (`components/`, `utils/`) | Carpetas por dominio con capas internas | Hexagonal: dominio, aplicación, infraestructura |
| Acoplamiento | Evitar módulos gigantes | Dependencias inyectadas manualmente | Puertos y adaptadores invertidos por interfaz |
| Datos entre capas | Objetos planos | DTOs explícitos | DTOs + CQRS (commands/queries separados) |
| Errores | Try/catch localizados | Errores por capa con semántica | Errores de dominio + eventos de dominio |
| Evolución | Estructura documentada | Caso completo (usuario) | ADRs, monorepos, revisión de arquitectura |

## Instalación

Copia la carpeta de cada skill a tu proyecto de opencode:

```powershell
# Por proyecto
Copy-Item -Recurse "02-backend\arquitectura-codigo\arquitectura-codigo-basico" ".opencode\skills\"

# Global (todos tus proyectos)
Copy-Item -Recurse "02-backend\arquitectura-codigo\*" "$HOME\.config\opencode\skills\"
```

Cada skill se activa automáticamente por su `description` cuando tu prompt trata de estructura de carpetas, capas, clean architecture o mantener el código.

## Ruta de aprendizaje

1. **Básico** — Ordena un proyecto por carpeta con responsabilidades claras, funciones pequeñas y nombres que explican el qué, no el cómo.
2. **Avanzado** — Introduce capas (controllers, services, repositories), DTOs y DI manual para dejar de acoplar HTTP con datos y lógica.
3. **Profesional** — Adopta clean/hexagonal con puertos y adaptadores, CQRS cuando el dominio lo exige, monorepos para equipos grandes y ADRs para decisiones.

Completa los niveles en orden: cada uno presupone las convenciones del anterior.

## Referencias clave

- Clean Architecture de Robert C. Martin: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- Hexagonal Architecture de Alistair Cockburn: https://alistair.cockburn.us/hexagonal-architecture/
- Domain Events de Martin Fowler: https://martinfowler.com/eaaDev/DomainEvent.html
- Architecture Decision Records (ADR): https://adr.github.io/
- pnpm workspaces: https://pnpm.io/workspaces
- Turborepo: https://turborepo.com/
- SOLID (principios de diseño): https://en.wikipedia.org/wiki/SOLID