---
name: administracion-windows-servicios-procesos-profesional
description: Servicios y procesos · nivel Profesional · Administración de Windows. Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. Objetivo del nivel: Automatización segura: scripts de mantenimiento de servicios con logs y gates
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "servicios-procesos"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Servicios y procesos — Profesional

## Qué hace este skill

Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. En este nivel se entrega: **Automatización segura: scripts de mantenimiento de servicios con logs y gates**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Servicios y procesos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir un script de reinicio de servicios con aprobación por configuración
2. Registrar cada acción en un log con timestamp
3. Verificar estado posterior y alertar si no arrancó
4. Probar todo con -WhatIf antes de correr en producción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Automatización segura: scripts de mantenimiento de servicios con logs y gates | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Escribir un script de reinicio de servicios con aprobación por configuración · Registrar cada acción en un log con timestamp · Verificar estado posterior y alertar si no arrancó · Probar todo con -WhatIf antes de correr en producción | lista | sí | 3-4 pasos |
| $criterios_clave | El script de mantenimiento deja un log de auditoría completo · Si un servicio no arranca, se detecta y se alerta | lista | sí | calidad verificable |
| $prompt_guia | Tengo que reiniciar servicios de una máquina de producción todos los domingos: armame un script con lista de servicios en config, -WhatIf, verificación post-reinicio y log de auditoría. | texto | no | "Servicios y procesos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El script de mantenimiento deja un log de auditoría completo
- [ ] Si un servicio no arranca, se detecta y se alerta

## Ejemplos de prompts

- "Tengo que reiniciar servicios de una máquina de producción todos los domingos: armame un script con lista de servicios en config, -WhatIf, verificación post-reinicio y log de auditoría."
- "Aplica Servicios y procesos (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza El script de mantenimiento deja un log de auditoría completo"
- "Revisa mi administracion-windows y dime qué pasos de Servicios y procesos me faltan en este nivel"