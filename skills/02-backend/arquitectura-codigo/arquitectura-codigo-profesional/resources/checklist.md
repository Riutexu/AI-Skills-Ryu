# Checklist — arquitectura-codigo-profesional

## Hexagonal y regla de dependencia

- [ ] Módulos organizados en `domain`, `application` e `infrastructure`
- [ ] El dominio no importa de la aplicación ni de la infraestructura
- [ ] Los puertos son interfaces definidas por la aplicación, no por la infraestructura
- [ ] Los adaptadores implementan puertos y se registran por inyección
- [ ] El flujo de dependencias solo apunta hacia el dominio
- [ ] Cambiar una base de datos o el framework HTTP no toca dominio ni casos de uso

## CQRS básico

- [ ] Commands (escritura) y queries (lectura) separados con handlers dedicados
- [ ] Las queries no tienen efectos secundarios
- [ ] Command de ejemplo (`CrearUsuarioCommand`) y query de ejemplo implementados

## SOLID

- [ ] SRP: un caso de uso por responsabilidad
- [ ] OCP: extensiones vía puertos, sin tocar lo existente
- [ ] LSP: adaptadores intercambiables cumpliendo el contrato del puerto
- [ ] ISP: puertos finos y específicos
- [ ] DIP: dependencias inyectadas hacia interfaces, nunca hacia concretos

## Eventos de dominio

- [ ] Los casos de uso publican eventos de dominio
- [ ] Los suscriptores viven en otros módulos sin acoplarse al emisor
- [ ] El bus de eventos está registrado en el contenedor de DI

## Monorepo

- [ ] pnpm workspaces con `packages/` y `apps/`
- [ ] Dependencias internas con protocolo `workspace:`
- [ ] Turborepo (o equivalente) cacheando los builds compartidos
- [ ] Paquetes compartidos extraídos (contratos, errores, dominio común)

## ADRs y revisiones

- [ ] ADRs numerados en `docs/adr/` con Contexto, Decisión y Consecuencias
- [ ] Cada cambio estructural relevante tiene su ADR
- [ ] Límites de dependencia verificados en CI (dependency-cruiser o similar)
- [ ] Una decisión cuestionada se revisa actualizando o marcando su ADR

## Verificación final

- [ ] El caso de uso `CrearUsuarioCommand` pasa tests con un repositorio fake sin HTTP ni BD
- [ ] Un adaptador alternativo (memoria/PostgreSQL) cumple el puerto sin cambios en la aplicación
- [ ] La estructura del monorepo permite añadir una app nueva compartiendo paquetes existentes