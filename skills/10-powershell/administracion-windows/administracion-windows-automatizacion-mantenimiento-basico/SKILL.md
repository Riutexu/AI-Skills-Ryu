---
name: administracion-windows-automatizacion-mantenimiento-basico
description: Automatización de mantenimiento · nivel Básico · Administración de Windows. Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. Objetivo del nivel: Script de limpieza y mantenimiento básico de una máquina
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "automatizacion-mantenimiento"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Automatización de mantenimiento — Básico

## Qué hace este skill

Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. En este nivel se entrega: **Script de limpieza y mantenimiento básico de una máquina**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Automatización de mantenimiento** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Limpiar temporales de Windows y del usuario
2. Ver espacio libre de discos y archivos grandes
3. Limpiar la papelera y cachés viejas
4. Reportar cuánto espacio se liberó

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Script de limpieza y mantenimiento básico de una máquina | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Limpiar temporales de Windows y del usuario · Ver espacio libre de discos y archivos grandes · Limpiar la papelera y cachés viejas · Reportar cuánto espacio se liberó | lista | sí | 3-4 pasos |
| $criterios_clave | La limpieza libera espacio y reporta cuánto · Nada importante se borra por error | lista | sí | calidad verificable |
| $prompt_guia | Mi disco está lleno: armame un script de limpieza que borre temporales, vacíe la papelera y me diga cuánto espacio liberó por carpeta. | texto | no | "Automatización de mantenimiento" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La limpieza libera espacio y reporta cuánto
- [ ] Nada importante se borra por error

## Ejemplos de prompts

- "Mi disco está lleno: armame un script de limpieza que borre temporales, vacíe la papelera y me diga cuánto espacio liberó por carpeta."
- "Aplica Automatización de mantenimiento (nivel basico) a mi trabajo actual con Administración de Windows: prioriza La limpieza libera espacio y reporta cuánto"
- "Revisa mi administracion-windows y dime qué pasos de Automatización de mantenimiento me faltan en este nivel"