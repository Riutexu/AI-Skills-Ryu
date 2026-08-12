# Módulos y paquetes

Empaquetar y distribuir PowerShell: módulos con manifest, PSGallery, bootstrap de instalación estilo bootstrap.ps1 y versionado limpio.

**Stack:** PowerShell 7, PSModule, PSGallery, NuGet · **Familia:** PowerShell y automatización de Windows (10-powershell)

| Tema | Resumen | Niveles |
|---|---|---|
| **Estructura de módulo** | Organización de un módulo real: archivos, carpetas, exports y punto de entrada. | [basico](/modulos-ps-estructura-modulo-basico/) · [avanzado](/modulos-ps-estructura-modulo-avanzado/) · [profesional](/modulos-ps-estructura-modulo-profesional/) |
| **Manifests** | El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. | [basico](/modulos-ps-manifests-basico/) · [avanzado](/modulos-ps-manifests-avanzado/) · [profesional](/modulos-ps-manifests-profesional/) |
| **Funciones públicas y privadas** | El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. | [basico](/modulos-ps-funciones-publicas-privadas-basico/) · [avanzado](/modulos-ps-funciones-publicas-privadas-avanzado/) · [profesional](/modulos-ps-funciones-publicas-privadas-profesional/) |
| **PSGallery y publicación** | Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. | [basico](/modulos-ps-psgallery-publicacion-basico/) · [avanzado](/modulos-ps-psgallery-publicacion-avanzado/) · [profesional](/modulos-ps-psgallery-publicacion-profesional/) |
| **NuGet y dependencias** | PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. | [basico](/modulos-ps-nuget-dependencias-basico/) · [avanzado](/modulos-ps-nuget-dependencias-avanzado/) · [profesional](/modulos-ps-nuget-dependencias-profesional/) |
| **Versionado de módulos** | SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. | [basico](/modulos-ps-versionado-modulos-basico/) · [avanzado](/modulos-ps-versionado-modulos-avanzado/) · [profesional](/modulos-ps-versionado-modulos-profesional/) |
| **Bootstrap de instalación** | El patrón bootstrap.ps1: instalación de la suite completa desde un solo comando, idempotente y seguro. | [basico](/modulos-ps-bootstrap-instalacion-basico/) · [avanzado](/modulos-ps-bootstrap-instalacion-avanzado/) · [profesional](/modulos-ps-bootstrap-instalacion-profesional/) |
| **Scripts de instalación por comandos** | Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. | [basico](/modulos-ps-scripts-instalacion-comandos-basico/) · [avanzado](/modulos-ps-scripts-instalacion-comandos-avanzado/) · [profesional](/modulos-ps-scripts-instalacion-comandos-profesional/) |
| **Profile y configuración** | El profile de PowerShell: temas, aliases, funciones de arranque y gestión de varias configuraciones. | [basico](/modulos-ps-profile-configuracion-basico/) · [avanzado](/modulos-ps-profile-configuracion-avanzado/) · [profesional](/modulos-ps-profile-configuracion-profesional/) |
| **Manejo de credenciales en instalación** | Instalaciones que piden credenciales: prompts, SecureString, exportación protegida y cero secretos en texto. | [basico](/modulos-ps-credenciales-instalacion-basico/) · [avanzado](/modulos-ps-credenciales-instalacion-avanzado/) · [profesional](/modulos-ps-credenciales-instalacion-profesional/) |
| **Pruebas de instalación limpia** | Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. | [basico](/modulos-ps-pruebas-instalacion-limpia-basico/) · [avanzado](/modulos-ps-pruebas-instalacion-limpia-avanzado/) · [profesional](/modulos-ps-pruebas-instalacion-limpia-profesional/) |
| **Actualización y rollback** | Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. | [basico](/modulos-ps-actualizacion-rollback-basico/) · [avanzado](/modulos-ps-actualizacion-rollback-avanzado/) · [profesional](/modulos-ps-actualizacion-rollback-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/10-powershell.json](../../catalogos/10-powershell.json).