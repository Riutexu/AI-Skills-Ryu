---
name: ryu-tui-portabilidad-hosts-avanzado
description: Portabilidad entre hosts · nivel Avanzado · RYU-TUI: interfaces de terminal. Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. Objetivo del nivel: Adaptación de ancho, encoding y manejo de redirección de salida
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "portabilidad-hosts"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Portabilidad entre hosts — Avanzado

## Qué hace este skill

Windows Terminal, consola clásica, VS Code, CI: que tu TUI se comporte bien en todos lados. En este nivel se entrega: **Adaptación de ancho, encoding y manejo de redirección de salida**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Portabilidad entre hosts** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer tamaño real de consola y reaccionar a resize
2. Manejar UTF-8 con chars de bloque y bordes
3. Detectar cuando la salida va a archivo o pipe
4. Desactivar interactividad cuando no hay terminal

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Adaptación de ancho, encoding y manejo de redirección de salida | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Leer tamaño real de consola y reaccionar a resize · Manejar UTF-8 con chars de bloque y bordes · Detectar cuando la salida va a archivo o pipe · Desactivar interactividad cuando no hay terminal | lista | sí | 3-4 pasos |
| $criterios_clave | El layout se adapta a ventanas angostas · Redirigir a archivo no produce caracteres corruptos | lista | sí | calidad verificable |
| $prompt_guia | Quiero que RYU-TUI se adapte cuando la salida no es una terminal (pipelines, archivos, CI): sin animaciones, sin caracteres de borde corruptos y con ancho de pantalla leído de verdad. Mostrame el patrón. | texto | no | "Portabilidad entre hosts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El layout se adapta a ventanas angostas
- [ ] Redirigir a archivo no produce caracteres corruptos

## Ejemplos de prompts

- "Quiero que RYU-TUI se adapte cuando la salida no es una terminal (pipelines, archivos, CI): sin animaciones, sin caracteres de borde corruptos y con ancho de pantalla leído de verdad. Mostrame el patrón."
- "Aplica Portabilidad entre hosts (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El layout se adapta a ventanas angostas"
- "Revisa mi ryu-tui y dime qué pasos de Portabilidad entre hosts me faltan en este nivel"