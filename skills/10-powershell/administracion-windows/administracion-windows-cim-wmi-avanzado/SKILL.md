---
name: administracion-windows-cim-wmi-avanzado
description: CIM/WMI · nivel Avanzado · Administración de Windows. Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. Objetivo del nivel: Consultas complejas, métodos WMI y consultas a equipos remotos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "cim-wmi"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# CIM/WMI — Avanzado

## Qué hace este skill

Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. En este nivel se entrega: **Consultas complejas, métodos WMI y consultas a equipos remotos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CIM/WMI** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar -ComputerName para consultas remotas
2. Invocar métodos WMI con Invoke-CimMethod
3. Consultar con -Query y WQL básico
4. Manejar clases con propiedades raras y nulls

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Consultas complejas, métodos WMI y consultas a equipos remotos | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Usar -ComputerName para consultas remotas · Invocar métodos WMI con Invoke-CimMethod · Consultar con -Query y WQL básico · Manejar clases con propiedades raras y nulls | lista | sí | 3-4 pasos |
| $criterios_clave | Consultás equipos remotos sin dejar sesiones abiertas · Los nulls y tipos raros no rompen tu script | lista | sí | calidad verificable |
| $prompt_guia | Necesito consultar el estado de disco de 5 equipos de la red con CIM: espacio libre, salud SMART y si va lento en alguno. Mostrame -ComputerName, WQL y manejo de nulls. | texto | no | "CIM/WMI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Consultás equipos remotos sin dejar sesiones abiertas
- [ ] Los nulls y tipos raros no rompen tu script

## Ejemplos de prompts

- "Necesito consultar el estado de disco de 5 equipos de la red con CIM: espacio libre, salud SMART y si va lento en alguno. Mostrame -ComputerName, WQL y manejo de nulls."
- "Aplica CIM/WMI (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Consultás equipos remotos sin dejar sesiones abiertas"
- "Revisa mi administracion-windows y dime qué pasos de CIM/WMI me faltan en este nivel"