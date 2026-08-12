# Administración de Windows

Administración real de Windows 11 con PowerShell: servicios, registry, CIM, eventos, tareas y mantenimiento sin romper nada.

**Stack:** PowerShell 7, Windows 11, CIM, eventos · **Familia:** PowerShell y automatización de Windows (10-powershell)

| Tema | Resumen | Niveles |
|---|---|---|
| **Servicios y procesos** | Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. | [basico](/administracion-windows-servicios-procesos-basico/) · [avanzado](/administracion-windows-servicios-procesos-avanzado/) · [profesional](/administracion-windows-servicios-procesos-profesional/) |
| **Registry seguro** | Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. | [basico](/administracion-windows-registry-seguro-basico/) · [avanzado](/administracion-windows-registry-seguro-avanzado/) · [profesional](/administracion-windows-registry-seguro-profesional/) |
| **CIM/WMI** | Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. | [basico](/administracion-windows-cim-wmi-basico/) · [avanzado](/administracion-windows-cim-wmi-avanzado/) · [profesional](/administracion-windows-cim-wmi-profesional/) |
| **Eventos del sistema** | Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. | [basico](/administracion-windows-eventos-sistema-basico/) · [avanzado](/administracion-windows-eventos-sistema-avanzado/) · [profesional](/administracion-windows-eventos-sistema-profesional/) |
| **Tareas programadas** | Crear y gestionar tareas programadas con ScheduledTasks, triggers y acciones desde scripts. | [basico](/administracion-windows-tareas-programadas-basico/) · [avanzado](/administracion-windows-tareas-programadas-avanzado/) · [profesional](/administracion-windows-tareas-programadas-profesional/) |
| **Usuarios y grupos** | Administrar cuentas locales y grupos con LocalAccounts, y membresías sin tocar el panel. | [basico](/administracion-windows-usuarios-grupos-basico/) · [avanzado](/administracion-windows-usuarios-grupos-avanzado/) · [profesional](/administracion-windows-usuarios-grupos-profesional/) |
| **Redes y puertos** | Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. | [basico](/administracion-windows-redes-puertos-basico/) · [avanzado](/administracion-windows-redes-puertos-avanzado/) · [profesional](/administracion-windows-redes-puertos-profesional/) |
| **Firewall** | Reglas del Firewall de Windows con NetSecurity: consultar, crear y auditar reglas desde PowerShell. | [basico](/administracion-windows-firewall-basico/) · [avanzado](/administracion-windows-firewall-avanzado/) · [profesional](/administracion-windows-firewall-profesional/) |
| **Instalación y MSI** | Instalar y desinstalar software por comandos: MSI, winget, argumentos silenciosos y verificación. | [basico](/administracion-windows-instalacion-msi-basico/) · [avanzado](/administracion-windows-instalacion-msi-avanzado/) · [profesional](/administracion-windows-instalacion-msi-profesional/) |
| **Logs y diagnóstico** | Diagnóstico de sistema: archivos de log, reporte de estado de salud y recolección de evidencia. | [basico](/administracion-windows-logs-diagnostico-basico/) · [avanzado](/administracion-windows-logs-diagnostico-avanzado/) · [profesional](/administracion-windows-logs-diagnostico-profesional/) |
| **Remoting y Enter-PSSession** | Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. | [basico](/administracion-windows-remoting-pssession-basico/) · [avanzado](/administracion-windows-remoting-pssession-avanzado/) · [profesional](/administracion-windows-remoting-pssession-profesional/) |
| **Automatización de mantenimiento** | Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. | [basico](/administracion-windows-automatizacion-mantenimiento-basico/) · [avanzado](/administracion-windows-automatizacion-mantenimiento-avanzado/) · [profesional](/administracion-windows-automatizacion-mantenimiento-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/10-powershell.json](../../catalogos/10-powershell.json).