---
name: modulos-ps-pruebas-instalacion-limpia-profesional
description: Pruebas de instalación limpia · nivel Profesional · Módulos y paquetes. Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. Objetivo del nivel: Instalación limpia como prueba formal: máquina virtual, smoke tests y CI de instalación
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "pruebas-instalacion-limpia"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Pruebas de instalación limpia — Profesional

## Qué hace este skill

Validar instalaciones desde cero: máquinas de prueba, verificación de estado y tests post-instalación. En este nivel se entrega: **Instalación limpia como prueba formal: máquina virtual, smoke tests y CI de instalación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas de instalación limpia** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Automatizar la instalación en una VM limpia
2. Correr los 18 tests Pester post-instalación
3. Integrar el smoke test al pipeline
4. Reportar el estado de cada versión publicada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Instalación limpia como prueba formal: máquina virtual, smoke tests y CI de instalación | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Automatizar la instalación en una VM limpia · Correr los 18 tests Pester post-instalación · Integrar el smoke test al pipeline · Reportar el estado de cada versión publicada | lista | sí | 3-4 pasos |
| $criterios_clave | Cada release se prueba en instalación limpia automáticamente · Los 18 tests pasan en pwsh 7 sin network | lista | sí | calidad verificable |
| $prompt_guia | Quiero que cada release de RYU-TUI se valide en una VM limpia: instalación automática, corrida de los 18 tests Pester y smoke test, todo integrado al pipeline de CI. | texto | no | "Pruebas de instalación limpia" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada release se prueba en instalación limpia automáticamente
- [ ] Los 18 tests pasan en pwsh 7 sin network

## Ejemplos de prompts

- "Quiero que cada release de RYU-TUI se valide en una VM limpia: instalación automática, corrida de los 18 tests Pester y smoke test, todo integrado al pipeline de CI."
- "Aplica Pruebas de instalación limpia (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza Cada release se prueba en instalación limpia automáticamente"
- "Revisa mi modulos-ps y dime qué pasos de Pruebas de instalación limpia me faltan en este nivel"