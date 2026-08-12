---
name: administracion-windows-remoting-pssession-profesional
description: Remoting y Enter-PSSession · nivel Profesional · Administración de Windows. Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. Objetivo del nivel: Orquestación remota segura: config WinRM, credenciales y manejo de fallas por equipo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "remoting-pssession"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Remoting y Enter-PSSession — Profesional

## Qué hace este skill

Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. En este nivel se entrega: **Orquestación remota segura: config WinRM, credenciales y manejo de fallas por equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Remoting y Enter-PSSession** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar WinRM y TrustedHosts de forma segura
2. Usar credenciales sin exponerlas en comando
3. Tolerar equipos caídos y reportar fallas por equipo
4. Implementar timeout y reintentos por sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Orquestación remota segura: config WinRM, credenciales y manejo de fallas por equipo | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Configurar WinRM y TrustedHosts de forma segura · Usar credenciales sin exponerlas en comando · Tolerar equipos caídos y reportar fallas por equipo · Implementar timeout y reintentos por sesión | lista | sí | 3-4 pasos |
| $criterios_clave | La orquestación tolera equipos caídos sin abortar · Las credenciales nunca aparecen en texto plano | lista | sí | calidad verificable |
| $prompt_guia | Armame una orquestación remota para RYU-TUI: corré el diagnóstico en N equipos con credenciales seguras, timeout por equipo, reporte de cuáles fallaron y reintentos controlados. | texto | no | "Remoting y Enter-PSSession" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La orquestación tolera equipos caídos sin abortar
- [ ] Las credenciales nunca aparecen en texto plano

## Ejemplos de prompts

- "Armame una orquestación remota para RYU-TUI: corré el diagnóstico en N equipos con credenciales seguras, timeout por equipo, reporte de cuáles fallaron y reintentos controlados."
- "Aplica Remoting y Enter-PSSession (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza La orquestación tolera equipos caídos sin abortar"
- "Revisa mi administracion-windows y dime qué pasos de Remoting y Enter-PSSession me faltan en este nivel"