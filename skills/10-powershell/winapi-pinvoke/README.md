# WinAPI y P/Invoke

Interoperar con la API de Windows desde PowerShell: Add-Type, user32/kernel32, estructuras, delegates y casos reales de TUI.

**Stack:** Add-Type, Win32 API, .NET, Windows 11 · **Familia:** PowerShell y automatización de Windows (10-powershell)

| Tema | Resumen | Niveles |
|---|---|---|
| **Add-Type y P/Invoke básico** | Declarar funciones Win32 en PowerShell con Add-Type y llamarlas desde scripts. | [basico](/winapi-pinvoke-add-type-pinvoke-basico-basico/) · [avanzado](/winapi-pinvoke-add-type-pinvoke-basico-avanzado/) · [profesional](/winapi-pinvoke-add-type-pinvoke-basico-profesional/) |
| **kernel32 (procesos y archivos)** | Las APIs de kernel32 que valen la pena: info de procesos, handles, archivos y rendimiento. | [basico](/winapi-pinvoke-kernel32-procesos-archivos-basico/) · [avanzado](/winapi-pinvoke-kernel32-procesos-archivos-avanzado/) · [profesional](/winapi-pinvoke-kernel32-procesos-archivos-profesional/) |
| **user32 (ventanas y mensajes)** | Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. | [basico](/winapi-pinvoke-user32-ventanas-mensajes-basico/) · [avanzado](/winapi-pinvoke-user32-ventanas-mensajes-avanzado/) · [profesional](/winapi-pinvoke-user32-ventanas-mensajes-profesional/) |
| **Estructuras y punteros** | Declarar structs, marshaling, punteros y buffers en Add-Type sin pisar memoria. | [basico](/winapi-pinvoke-estructuras-punteros-basico/) · [avanzado](/winapi-pinvoke-estructuras-punteros-avanzado/) · [profesional](/winapi-pinvoke-estructuras-punteros-profesional/) |
| **Marshaling de strings** | Ansi vs Unicode, LPWSTR/LPSTR, StringBuilder y los bugs clásicos de strings en P/Invoke. | [basico](/winapi-pinvoke-marshaling-strings-basico/) · [avanzado](/winapi-pinvoke-marshaling-strings-avanzado/) · [profesional](/winapi-pinvoke-marshaling-strings-profesional/) |
| **Delegates y callbacks** | Callbacks de Windows a PowerShell: delegates, keep-alive, enum de ventanas y hooks de eventos. | [basico](/winapi-pinvoke-delegates-callbacks-basico/) · [avanzado](/winapi-pinvoke-delegates-callbacks-avanzado/) · [profesional](/winapi-pinvoke-delegates-callbacks-profesional/) |
| **Ventanas externas y focus** | Manipular ventanas de otras apps: enumeración, foco, minimizar, y respetar al usuario. | [basico](/winapi-pinvoke-ventanas-externas-focus-basico/) · [avanzado](/winapi-pinvoke-ventanas-externas-focus-avanzado/) · [profesional](/winapi-pinvoke-ventanas-externas-focus-profesional/) |
| **Información del sistema** | Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. | [basico](/winapi-pinvoke-informacion-sistema-basico/) · [avanzado](/winapi-pinvoke-informacion-sistema-avanzado/) · [profesional](/winapi-pinvoke-informacion-sistema-profesional/) |
| **Combinación con APIs .NET** | Cuando conviene .NET en vez de P/Invoke: System.IO, Process, y la frontera managed vs nativa. | [basico](/winapi-pinvoke-apis-dotnet-basico/) · [avanzado](/winapi-pinvoke-apis-dotnet-avanzado/) · [profesional](/winapi-pinvoke-apis-dotnet-profesional/) |
| **Rendimiento de interop** | El costo de cruzar la frontera managed/nativa: minimizar llamadas, batch y caché de resultados. | [basico](/winapi-pinvoke-rendimiento-interop-basico/) · [avanzado](/winapi-pinvoke-rendimiento-interop-avanzado/) · [profesional](/winapi-pinvoke-rendimiento-interop-profesional/) |
| **Errores GetLastError** | Los códigos de error de Win32: Marshal.GetLastWin32Error, SetLastError y errores que no son -1. | [basico](/winapi-pinvoke-getlasterror-basico/) · [avanzado](/winapi-pinvoke-getlasterror-avanzado/) · [profesional](/winapi-pinvoke-getlasterror-profesional/) |
| **Casos reales de TUI** | Aplicar interop a RYU-TUI: redimensionar la consola nativa, título de ventana, foco y clipboard. | [basico](/winapi-pinvoke-casos-reales-tui-basico/) · [avanzado](/winapi-pinvoke-casos-reales-tui-avanzado/) · [profesional](/winapi-pinvoke-casos-reales-tui-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/10-powershell.json](../../catalogos/10-powershell.json).