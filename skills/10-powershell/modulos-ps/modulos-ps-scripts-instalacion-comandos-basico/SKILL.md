---
name: modulos-ps-scripts-instalacion-comandos-basico
description: Scripts de instalación por comandos · nivel Básico · Módulos y paquetes. Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. Objetivo del nivel: Instalar herramientas y módulos con comandos sueltos reproducibles
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "scripts-instalacion-comandos"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Scripts de instalación por comandos — Básico

## Qué hace este skill

Instalar sin bootstrap: comandos sueltos reproducibles, one-liners y registros de pasos manuales. En este nivel se entrega: **Instalar herramientas y módulos con comandos sueltos reproducibles**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Scripts de instalación por comandos** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar módulos con Install-Module y versiones específicas
2. Instalar pwsh y herramientas con winget
3. Setear el profile de PowerShell
4. Verificar cada instalación al terminar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Instalar herramientas y módulos con comandos sueltos reproducibles | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Instalar módulos con Install-Module y versiones específicas · Instalar pwsh y herramientas con winget · Setear el profile de PowerShell · Verificar cada instalación al terminar | lista | sí | 3-4 pasos |
| $criterios_clave | Recreás un entorno solo con comandos copiables · Cada comando verifica su resultado | lista | sí | calidad verificable |
| $prompt_guia | Quiero documentar la instalación de RYU-TUI en comandos sueltos: módulos con versión fija, winget para herramientas y configuración del profile, listos para copiar y pegar. | texto | no | "Scripts de instalación por comandos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Recreás un entorno solo con comandos copiables
- [ ] Cada comando verifica su resultado

## Ejemplos de prompts

- "Quiero documentar la instalación de RYU-TUI en comandos sueltos: módulos con versión fija, winget para herramientas y configuración del profile, listos para copiar y pegar."
- "Aplica Scripts de instalación por comandos (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Recreás un entorno solo con comandos copiables"
- "Revisa mi modulos-ps y dime qué pasos de Scripts de instalación por comandos me faltan en este nivel"