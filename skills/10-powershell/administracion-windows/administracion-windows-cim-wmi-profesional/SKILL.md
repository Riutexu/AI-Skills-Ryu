---
name: administracion-windows-cim-wmi-profesional
description: CIM/WMI · nivel Profesional · Administración de Windows. Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. Objetivo del nivel: Capa de inventario reutilizable: estructura de datos, tolerancia a equipos caídos y reportes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "cim-wmi"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# CIM/WMI — Profesional

## Qué hace este skill

Consulta de hardware y sistema con Get-CimInstance: de Win32_ al inventario completo sin WMI clásico. En este nivel se entrega: **Capa de inventario reutilizable: estructura de datos, tolerancia a equipos caídos y reportes**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CIM/WMI** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar una función de inventario que devuelva objetos estandarizados
2. Manejar equipos que no responden sin abortar el lote
3. Generar reporte CSV/JSON consolidado
4. Medir el tiempo de la consulta y optimizarla

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de inventario reutilizable: estructura de datos, tolerancia a equipos caídos y reportes | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Diseñar una función de inventario que devuelva objetos estandarizados · Manejar equipos que no responden sin abortar el lote · Generar reporte CSV/JSON consolidado · Medir el tiempo de la consulta y optimizarla | lista | sí | 3-4 pasos |
| $criterios_clave | El inventario de 50 equipos corre sin morir en el primero caído · El reporte final es un objeto estándar listo para exportar | lista | sí | calidad verificable |
| $prompt_guia | Armame un script de inventario de parque: recorre 50 equipos, tolera los que no responden con timeout, y consolida todo en un JSON con los equipos caídos listados aparte. | texto | no | "CIM/WMI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El inventario de 50 equipos corre sin morir en el primero caído
- [ ] El reporte final es un objeto estándar listo para exportar

## Ejemplos de prompts

- "Armame un script de inventario de parque: recorre 50 equipos, tolera los que no responden con timeout, y consolida todo en un JSON con los equipos caídos listados aparte."
- "Aplica CIM/WMI (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza El inventario de 50 equipos corre sin morir en el primero caído"
- "Revisa mi administracion-windows y dime qué pasos de CIM/WMI me faltan en este nivel"