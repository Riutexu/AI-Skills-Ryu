---
name: administracion-windows-servicios-procesos-avanzado
description: Servicios y procesos · nivel Avanzado · Administración de Windows. Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. Objetivo del nivel: Operaciones con -WhatIf, dependencias de servicios y procesos con sus árboles
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "servicios-procesos"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Servicios y procesos — Avanzado

## Qué hace este skill

Gestionar servicios y procesos: listar, filtrar, iniciar/detener con seguridad y diagnósticos de estado. En este nivel se entrega: **Operaciones con -WhatIf, dependencias de servicios y procesos con sus árboles**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Servicios y procesos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ver y respetar dependencias de servicios
2. Reiniciar servicios con soporte -WhatIf y -Confirm
3. Explorar árboles de procesos y sus ventanas
4. Capturar la línea de comando de un proceso con CIM

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Operaciones con -WhatIf, dependencias de servicios y procesos con sus árboles | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Ver y respetar dependencias de servicios · Reiniciar servicios con soporte -WhatIf y -Confirm · Explorar árboles de procesos y sus ventanas · Capturar la línea de comando de un proceso con CIM | lista | sí | 3-4 pasos |
| $criterios_clave | Reiniciás servicios sin romper sus dependientes · Sabés qué procesos cuelgan de qué padre | lista | sí | calidad verificable |
| $prompt_guia | Necesito reiniciar un servicio que tiene dependientes sin tumbarlos: mostrame cómo listar dependencias, usar -WhatIf y detectar procesos por su línea de comandos. | texto | no | "Servicios y procesos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Reiniciás servicios sin romper sus dependientes
- [ ] Sabés qué procesos cuelgan de qué padre

## Ejemplos de prompts

- "Necesito reiniciar un servicio que tiene dependientes sin tumbarlos: mostrame cómo listar dependencias, usar -WhatIf y detectar procesos por su línea de comandos."
- "Aplica Servicios y procesos (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Reiniciás servicios sin romper sus dependientes"
- "Revisa mi administracion-windows y dime qué pasos de Servicios y procesos me faltan en este nivel"