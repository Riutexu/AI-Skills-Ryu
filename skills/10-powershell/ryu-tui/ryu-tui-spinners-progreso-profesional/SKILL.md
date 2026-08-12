---
name: ryu-tui-spinners-progreso-profesional
description: Spinners y barras de progreso · nivel Profesional · RYU-TUI: interfaces de terminal. Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. Objetivo del nivel: Motor de progreso con estados, supresión de ruido en CI y diseño de API para el resto de la app
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "spinners-progreso"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Spinners y barras de progreso — Profesional

## Qué hace este skill

Feedback visual de operaciones largas: spinners animados, barras de progreso y mensajes que no ensucian. En este nivel se entrega: **Motor de progreso con estados, supresión de ruido en CI y diseño de API para el resto de la app**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Spinners y barras de progreso** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un componente de progreso reutilizable con estados
2. Desactivar animaciones cuando la salida no es terminal
3. Hacer que el progreso respete la región de la UI
4. Testear que no quede basura de líneas al finalizar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Motor de progreso con estados, supresión de ruido en CI y diseño de API para el resto de la app | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Crear un componente de progreso reutilizable con estados · Desactivar animaciones cuando la salida no es terminal · Hacer que el progreso respete la región de la UI · Testear que no quede basura de líneas al finalizar | lista | sí | 3-4 pasos |
| $criterios_clave | Con salida a archivo no aparecen caracteres de animación · El componente se integra al layout sin pisar otros paneles | lista | sí | calidad verificable |
| $prompt_guia | Ryu-tui.ps1 ejecuta tareas largas y quiero un motor de progreso reutilizable que sepa cuándo no es terminal (CI, redirección), no pise los paneles y no deje residuos. Diseñalo e integrá los casos de borde. | texto | no | "Spinners y barras de progreso" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Con salida a archivo no aparecen caracteres de animación
- [ ] El componente se integra al layout sin pisar otros paneles

## Ejemplos de prompts

- "Ryu-tui.ps1 ejecuta tareas largas y quiero un motor de progreso reutilizable que sepa cuándo no es terminal (CI, redirección), no pise los paneles y no deje residuos. Diseñalo e integrá los casos de borde."
- "Aplica Spinners y barras de progreso (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Con salida a archivo no aparecen caracteres de animación"
- "Revisa mi ryu-tui y dime qué pasos de Spinners y barras de progreso me faltan en este nivel"