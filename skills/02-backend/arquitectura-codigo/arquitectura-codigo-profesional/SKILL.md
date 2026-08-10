---
name: arquitectura-codigo-profesional
description: Clean architecture y hexagonal (puertos y adaptadores), CQRS básico, monorepos con pnpm/turborepo, SOLID, eventos de dominio y decisiones con ADRs.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "arquitectura-codigo"
  nivel: profesional
  stack: "TypeScript, hexagonal, CQRS, pnpm workspaces, Turborepo, SOLID"
---

# Arquitectura profesional: hexagonal, CQRS y monorepos

## Qué hace este skill

Establece las decisiones arquitectónicas de un sistema profesional: clean architecture y hexagonal con inversión de dependencias (puertos y adaptadores), CQRS básico con separación de comandos y consultas, monorepos con pnpm workspaces y Turborepo para equipos grandes, principios SOLID aplicados, eventos de dominio para desacoplar módulos y ADRs (Architecture Decision Records) para documentar y revisar las decisiones. Incluye diagrama de capas hexagonal y un ejemplo real de puerto/adaptador en TypeScript.

## Cuándo usarlo

- Cuando el dominio es complejo y las reglas de negocio deben sobrevivir a los cambios de framework, BD y transporte.
- Cuando varios equipos desarrollan sobre el mismo repositorio y necesitan fronteras claras (monorepo).
- Cuando los módulos necesitan comunicarse sin acoplarse (eventos de dominio).
- Cuando quieres que las decisiones estructurales queden documentadas y puedan discutirse (ADRs).

## Requisitos previos

- Niveles básico y avanzado de `arquitectura-codigo` (capas controllers/services/repositories, DTOs, DI manual).
- TypeScript intermedio (interfaces, tipos, clases abstractas, `inversify` o DI manual).
- Familiaridad con patrones: factory, singleton (con cautela) y event emitter.
- Node.js 20+ y npm/pnpm.

## Workflow paso a paso

1. Organizar el módulo en tres anillos: `domain` (entidades, valores, reglas), `application` (casos de uso y puertos) e `infrastructure` (adaptadores: HTTP, BD, colas, servicios externos).
2. Definir los puertos en `application`: interfaces que el dominio necesita (repositorio, servicio de email, reloj) escritas desde la perspectiva de la aplicación.
3. Implementar adaptadores en `infrastructure` que cumplen esos puertos (PostgreSQL, Express/Fastify, SMTP, HTTP clients) y registrarlos en el contenedor de DI.
4. Invertir la dependencia: el caso de uso depende del puerto (interfaz), nunca del adaptador concreto; el flujo de dependencias solo apunta hacia el dominio.
5. Aplicar CQRS básico: separar commands (escritura: `CrearUsuarioCommand`) de queries (lectura: `ObtenerUsuarioQuery`) con handlers dedicados; mantener el lector tan simple como sea posible.
6. Emitir eventos de dominio: el caso de uso publica eventos (`UsuarioCreado`, `PasswordCambiada`) en un bus interno; los módulos interesados se suscriben sin conocerse entre sí.
7. Configurar el monorepo: pnpm workspaces con `packages/` y `apps/`, Turborepo para cachear builds, y dependencias internas entre paquetes (protocolo `workspace:`).
8. Extraer paquetes compartidos: `packages/dominio-compartido`, `packages/errores`, `packages/contratos`; cada aplicación importa solo lo que consume.
9. Auditar SOLID en los módulos: SRP por caso de uso, OCP con puertos, LSP en adaptadores, ISP con puertos finos, DIP con inyección.
10. Documentar las decisiones en ADRs: formato corto (Contexto, Decisión, Consecuencias), numerados, guardados en `docs/adr/`, revisados cuando una decisión se cuestiona.
11. Añadir revisión de arquitectura al flujo: cada cambio de estructura de un módulo debe acompañarse con su ADR; los límites de dependencia se verifican en CI con herramientas de arquitectura (dependency-cruiser).
12. Verificar la independencia: cambiar el framework HTTP o la base de datos de un módulo no toca el dominio ni los casos de uso, solo los adaptadores.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `anillos` | Capas del módulo hexagonal | array | sí | `['domain', 'application', 'infrastructure']` |
| `lenguaje` | Lenguaje del proyecto | string | sí | `typescript` |
| `patronComunicacion` | Estrategia entre módulos | string | no | `eventos-de-dominio` |
| `gestorPaquetes` | Gestor de paquetes del monorepo | string | no | `pnpm` |
| `orquestadorBuilds` | Herramienta de cache de builds | string | no | `turborepo` |
| `carpetaAdr` | Ubicación de los ADRs | string | no | `docs/adr` |
| `busEventos` | Implementación del bus de eventos | string | no | `event-emitter` (Node nativo) |
| `herramientaLímites` | Verificación de límites en CI | string | no | `dependency-cruiser` |
| `prefijoCommand` | Sufijo de los comandos CQRS | string | no | `Command` |
| `prefijoQuery` | Sufijo de las consultas CQRS | string | no | `Query` |

## Reglas y checklist

- [ ] El `domain` no importa ni del `application` ni de `infrastructure`: es puro.
- [ ] Los puertos son interfaces escritas por quien consume (la aplicación), no por la infraestructura.
- [ ] Los adaptadores implementan los puertos y se registran por inyección; el caso de uso no conoce su implementación.
- [ ] El flujo de dependencias apunta siempre hacia el dominio (regla de dependencia de clean architecture).
- [ ] Commands y queries están separados con handlers dedicados; las lecturas no tienen efectos secundarios.
- [ ] Los eventos de dominio se emiten por el caso de uso y los suscriptores viven en otros módulos sin acoplarse.
- [ ] El monorepo usa pnpm workspaces con paquetes separados por dominio y apps de despliegue.
- [ ] Turborepo (o equivalente) cachea los builds de los paquetes compartidos.
- [ ] SOLID verificado módulo a módulo: un caso de uso, un puerto fino, adaptadores intercambiables.
- [ ] Cada decisión estructural tiene su ADR con Contexto, Decisión y Consecuencias.
- [ ] Los límites de dependencia se comprueban en CI (dependency-cruiser o equivalente).

## Ejemplos de prompts

- "Organiza el módulo pedido en hexagonal: domain con entidades, application con casos de uso y puertos, infrastructure con adaptadores de PostgreSQL y Express."
- "Define el puerto PedidoRepositorio y un adaptador TypeScript que lo implemente con Prisma, registrado por inyección."
- "Separa CrearPedidoCommand de ObtenerPedidoQuery con handlers dedicados y sin efectos en las lecturas."
- "Emite el evento de dominio PedidoCreado desde el caso de uso y suscríbelo desde el módulo inventario sin acoplar los módulos."
- "Configura un monorepo con pnpm workspaces y Turborepo: paquetes compartidos (contratos, errores) y dos apps que los consumen."
- "Escribe el ADR-007 que documenta la adopción de eventos de dominio como estrategia de integración entre módulos."
- "Añade dependency-cruiser al CI para impedir que infrastructure importe domain en el sentido contrario."

## Plantillas y recursos

- `templates/hexagonal.md` — diagrama de capas hexagonal y regla de dependencia con ejemplos de puertos/adaptadores.
- `templates/puerto-adaptador.ts` — ejemplo completo en TypeScript: dominio, puerto, adaptador PostgreSQL/Prisma y caso de uso con DI.
- Checklist del nivel: `resources/checklist.md`.