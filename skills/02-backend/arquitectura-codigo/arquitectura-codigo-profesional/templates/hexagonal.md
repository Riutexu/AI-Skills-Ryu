# Arquitectura hexagonal (puertos y adaptadores)

## Diagrama de capas

```
                 +--------------------------------------------+
                 |         CLIENTES EXTERNOS (UI, API...)      |
                 |   Express, Next.js, CLI, tests de entrada   |
                 +----------------------+---------------------+
                                        |  llamadas HTTP / CLI
                 +----------------------v---------------------+
                 |              ADAPTADORES (izquierda)        |
                 |   controllers, presentadores, middlewares   |
                 +----------------------+---------------------+
                                        |  PUERTOS DE ENTRADA (interfaces de caso de uso)
                 +----------------------v---------------------+
                 |              APLICACION (casos de uso)      |
                 |    commands, queries, handlers, orquestacion|
                 +----------------------+---------------------+
                                        |  PUERTOS DE SALIDA (interfaces que la app necesita)
                 +----------------------v---------------------+
                 |              ADAPTADORES (derecha)          |
                 |   PostgreSQL, Redis, SMTP, APIs externas    |
                 +----------------------+---------------------+
                                        |
                 +----------------------v---------------------+
                 |                    DOMINIO                  |
                 |   entidades, value objects, reglas puras    |
                 +--------------------------------------------+
```

## La regla de dependencia (el nucleo)

```
infrastructure -> application -> domain
                        ^
                        |  SOLO dependencias hacia adentro
```

- El **dominio** no conoce la aplicación ni la infraestructura: define reglas puras.
- La **aplicación** conoce el dominio y declara puertos (interfaces) para lo que necesita del exterior.
- La **infraestructura** conoce a ambos: implementa puertos y adapta el mundo real (bases de datos, HTTP, colas, proveedores).
- Nada externo conoce implementaciones concretas: solo interfaces.

## Ejemplo de puertos

```ts
// application/puertos/usuario-repositorio.ts  (escrito por la app)
export interface UsuarioRepositorio {
  buscarPorId(id: string): Promise<Usuario | null>;
  insertar(usuario: Usuario): Promise<Usuario>;
}
```

```ts
// infrastructure/adaptadores/usuario-repositorio-prisma.ts (el mundo real)
export class UsuarioRepositorioPrisma implements UsuarioRepositorio {
  async buscarPorId(id: string) { /* Prisma */ }
  async insertar(usuario: Usuario) { /* Prisma */ }
}
```

El caso de uso recibe `UsuarioRepositorio` por inyección: puede recibir la
implementación Prisma, un mock en tests o un adaptador de DynamoDB sin cambios.

## Beneficios verificables

1. Cambiar de framework HTTP o de base de datos no toca ni dominio ni casos de uso.
2. El dominio es testeable en aislamiento total (sin BD, sin HTTP, sin framework).
3. Los límites se verifican en CI (dependency-cruiser): un import indebido rompe la build.
4. Cada adaptador es un detalle desechable; el núcleo es la inversión de dependencias.