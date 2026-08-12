---
name: administracion-windows-cim-wmi-basico
description: CIM/WMI · nivel Básico · Administración de Windows. Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. Objetivo del nivel: Consultar información del sistema con Get-CimInstance
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "cim-wmi"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# CIM/WMI — Básico

## Qué hace este skill

Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. En este nivel se entrega: **Consultar información del sistema con Get-CimInstance**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CIM/WMI** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Consultar Win32_ComputerSystem, Win32_Processor y Win32_BIOS
2. Filtrar instancias con -Filter y Where-Object
3. Seleccionar propiedades con Get-CimInstance -Property
4. Armar un inventario básico de hardware

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Consultar información del sistema con Get-CimInstance | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Consultar Win32_ComputerSystem, Win32_Processor y Win32_BIOS · Filtrar instancias con -Filter y Where-Object · Seleccionar propiedades con Get-CimInstance -Property · Armar un inventario básico de hardware | lista | sí | 3-4 pasos |
| $criterios_clave | Obtenés inventario de hardware sin instalar nada · Usás -Filter antes que Where-Object cuando conviene | lista | sí | calidad verificable |
| $prompt_guia | Quiero un inventario de mi máquina: CPU, RAM, disco y sistema operativo con Get-CimInstance. Mostrame las clases Win32_ que uso y el output prolijo. | texto | no | "CIM/WMI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Obtenés inventario de hardware sin instalar nada
- [ ] Usás -Filter antes que Where-Object cuando conviene

## Ejemplos de prompts

- "Quiero un inventario de mi máquina: CPU, RAM, disco y sistema operativo con Get-CimInstance. Mostrame las clases Win32_ que uso y el output prolijo."
- "Aplica CIM/WMI (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Obtenés inventario de hardware sin instalar nada"
- "Revisa mi administracion-windows y dime qué pasos de CIM/WMI me faltan en este nivel"