---
name: administracion-windows-remoting-pssession-avanzado
description: Remoting y Enter-PSSession · nivel Avanzado · Administración de Windows. Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. Objetivo del nivel: Sesiones persistentes con New-PSSession, Invoke-Command y transferencia de archivos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "remoting-pssession"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Remoting y Enter-PSSession — Avanzado

## Qué hace este skill

Administración remota con WinRM, sesiones interactivas y ejecución de scripts en equipos remotos. En este nivel se entrega: **Sesiones persistentes con New-PSSession, Invoke-Command y transferencia de archivos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Remoting y Enter-PSSession** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear sesiones reutilizables con New-PSSession
2. Ejecutar bloques en remoto con Invoke-Command
3. Pasar parámetros a los bloques remotos
4. Copiar archivos entre equipos con Copy-Item -ToSession

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Sesiones persistentes con New-PSSession, Invoke-Command y transferencia de archivos | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Crear sesiones reutilizables con New-PSSession · Ejecutar bloques en remoto con Invoke-Command · Pasar parámetros a los bloques remotos · Copiar archivos entre equipos con Copy-Item -ToSession | lista | sí | 3-4 pasos |
| $criterios_clave | Corrés un script en 5 equipos a la vez sin duplicar código · Los resultados vuelven como objetos, no texto | lista | sí | calidad verificable |
| $prompt_guia | Tengo que correr el mismo diagnóstico en 5 equipos: usá New-PSSession e Invoke-Command con parámetros, y volvé los resultados como objetos consolidados. | texto | no | "Remoting y Enter-PSSession" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Corrés un script en 5 equipos a la vez sin duplicar código
- [ ] Los resultados vuelven como objetos, no texto

## Ejemplos de prompts

- "Tengo que correr el mismo diagnóstico en 5 equipos: usá New-PSSession e Invoke-Command con parámetros, y volvé los resultados como objetos consolidados."
- "Aplica Remoting y Enter-PSSession (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Corrés un script en 5 equipos a la vez sin duplicar código"
- "Revisa mi administracion-windows y dime qué pasos de Remoting y Enter-PSSession me faltan en este nivel"