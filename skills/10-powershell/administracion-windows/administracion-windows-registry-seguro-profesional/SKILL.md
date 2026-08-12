---
name: administracion-windows-registry-seguro-profesional
description: Registry seguro · nivel Profesional · Administración de Windows. Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. Objetivo del nivel: Operaciones de registry como herramienta de deploy: multi-key, logging y privilegios
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "registry-seguro"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Registry seguro — Profesional

## Qué hace este skill

Leer y modificar el registro con Get-Item/New-Item, rutas PSDrive y copias de seguridad antes de tocar. En este nivel se entrega: **Operaciones de registry como herramienta de deploy: multi-key, logging y privilegios**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Registry seguro** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Aplicar un conjunto de cambios de config desde un archivo
2. Loguear cada key modificada con valor antes/después
3. Detectar claves protegidas que requieren admin
4. Verificar la integridad post-aplicación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Operaciones de registry como herramienta de deploy: multi-key, logging y privilegios | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Aplicar un conjunto de cambios de config desde un archivo · Loguear cada key modificada con valor antes/después · Detectar claves protegidas que requieren admin · Verificar la integridad post-aplicación | lista | sí | 3-4 pasos |
| $criterios_clave | El deploy de config deja un log antes/después por clave · Las claves protegidas se detectan y reportan sin romper el script | lista | sí | calidad verificable |
| $prompt_guia | Quiero aplicar la configuración de RYU-TUI (tema, tamaño de ventana) vía registry desde un JSON, con log antes/después por clave y manejo de claves que piden admin. Diseñámelo. | texto | no | "Registry seguro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El deploy de config deja un log antes/después por clave
- [ ] Las claves protegidas se detectan y reportan sin romper el script

## Ejemplos de prompts

- "Quiero aplicar la configuración de RYU-TUI (tema, tamaño de ventana) vía registry desde un JSON, con log antes/después por clave y manejo de claves que piden admin. Diseñámelo."
- "Aplica Registry seguro (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza El deploy de config deja un log antes/después por clave"
- "Revisa mi administracion-windows y dime qué pasos de Registry seguro me faltan en este nivel"