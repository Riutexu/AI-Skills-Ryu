# Checklist — arquitectura-codigo-avanzado

## Estructura por capas

- [ ] Un módulo por dominio de negocio con sus capas `presentation`, `application`, `domain` e `infrastructure`
- [ ] `domain` sin ninguna dependencia externa (sin Express, sin BD, sin DTOs)
- [ ] `application` depende solo de `domain` y de las interfaces
- [ ] `infrastructure` implementa interfaces de repositorio sin conocer services ni controllers
- [ ] `presentation` (controller/rutas) no accede a la base de datos ni a repositorios concretos
- [ ] El wire-up de dependencias está centralizado en un contenedor de composición

## Diagrama del sistema

- [ ] Entidad `Usuario` con invariantes propios (email válido, edad mínima) que se aplican al construir
- [ ] DTO de entrada (`CrearUsuarioDto`) separado del DTO de salida (`UsuarioDto`)
- [ ] El DTO de salida nunca expone `passwordHash` ni campos sensibles
- [ ] Las fronteras se cruzan con DTOs, no con `req`/`res`

## Service y reglas de negocio

- [ ] El service contiene las reglas: email duplicado (409), inexistente (404)
- [ ] El service usa el repositorio inyectado, nunca un import directo de implementación
- [ ] El service no sabe de Express (no toca req/res, no envía JSON)

## Repositorio

- [ ] Interfaz `UsuarioRepositorio` definida con los métodos de persistencia
- [ ] Implementación en memoria concreta, intercambiable por PostgreSQL sin cambios en capas superiores
- [ ] El repositorio lanza errores de infraestructura; no decide códigos HTTP

## Clases esqueleto vs error handler

- [ ] Todos los errores operacionales se lanzan como `AppError` traducidos en el service
- [ ] El controller no captura errores (salvo delegarlos con `next`) ni decide estrategias de error
- [ ] El error handler global es el único que transforma errores en respuestas HTTP

## Verificación

- [ ] Un test unitario del service con repositorio mock verifica la regla de email duplicado sin HTTP
- [ ] Cambiar la implementación del repositorio (memoria -> mock/PostgreSQL) no modifica service ni controller
- [ ] El módulo `usuario` sirve de plantilla para los demás módulos del proyecto