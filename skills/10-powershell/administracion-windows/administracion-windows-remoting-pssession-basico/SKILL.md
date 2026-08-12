---
name: administracion-windows-remoting-pssession-basico
description: Remoting y Enter-PSSession · nivel Básico · Administración de Windows. Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. Objetivo del nivel: Conectarse de forma interactiva a otra máquina con Enter-PSSession
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "remoting-pssession"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Remoting y Enter-PSSession — Básico

## Qué hace este skill

Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. En este nivel se entrega: **Conectarse de forma interactiva a otra máquina con Enter-PSSession**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Remoting y Enter-PSSession** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar que WinRM responde con Test-WSMan
2. Entrar a una sesión interactiva con Enter-PSSession
3. Ejecutar comandos en la sesión
4. Salir sin romper la sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Conectarse de forma interactiva a otra máquina con Enter-PSSession | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Verificar que WinRM responde con Test-WSMan · Entrar a una sesión interactiva con Enter-PSSession · Ejecutar comandos en la sesión · Salir sin romper la sesión | lista | sí | 3-4 pasos |
| $criterios_clave | Ejecutás comandos en un equipo remoto de forma interactiva · Sabés cuándo estás dentro y fuera de la sesión | lista | sí | calidad verificable |
| $prompt_guia | Necesito entrar a un equipo del lab para ver su estado: mostrame cómo verificar WinRM y usar Enter-PSSession paso a paso. | texto | no | "Remoting y Enter-PSSession" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ejecutás comandos en un equipo remoto de forma interactiva
- [ ] Sabés cuándo estás dentro y fuera de la sesión

## Ejemplos de prompts

- "Necesito entrar a un equipo del lab para ver su estado: mostrame cómo verificar WinRM y usar Enter-PSSession paso a paso."
- "Aplica Remoting y Enter-PSSession (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Ejecutás comandos en un equipo remoto de forma interactiva"
- "Revisa mi administracion-windows y dime qué pasos de Remoting y Enter-PSSession me faltan en este nivel"