---
name: ryu-tui-redibujado-eficiente-avanzado
description: Redibujado eficiente · nivel Avanzado · RYU-TUI: interfaces de terminal. Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. Objetivo del nivel: Buffer de doble pantalla con comparación de celdas y parpadeo cero
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "redibujado-eficiente"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Redibujado eficiente — Avanzado

## Qué hace este skill

Parpadeo, buffer, regiones sucias y la disciplina de no redibujar lo que no cambió. En este nivel se entrega: **Buffer de doble pantalla con comparación de celdas y parpadeo cero**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Redibujado eficiente** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mantener una matriz de celdas actual vs previa
2. Emitir solo los escapes de las celdas que difieren
3. Bajar la tasa de actualización del reloj a 1s
4. Medir el tiempo por frame de renderizado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Buffer de doble pantalla con comparación de celdas y parpadeo cero | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Mantener una matriz de celdas actual vs previa · Emitir solo los escapes de las celdas que difieren · Bajar la tasa de actualización del reloj a 1s · Medir el tiempo por frame de renderizado | lista | sí | 3-4 pasos |
| $criterios_clave | El render no parpadea al actualizar el reloj del header · El tiempo por frame está medido y es estable | lista | sí | calidad verificable |
| $prompt_guia | El header de RYU-TUI parpadea cada segundo cuando actualizo el reloj. Implementame un buffer de doble pantalla que emita solo las celdas que cambian y medí el tiempo por frame. | texto | no | "Redibujado eficiente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El render no parpadea al actualizar el reloj del header
- [ ] El tiempo por frame está medido y es estable

## Ejemplos de prompts

- "El header de RYU-TUI parpadea cada segundo cuando actualizo el reloj. Implementame un buffer de doble pantalla que emita solo las celdas que cambian y medí el tiempo por frame."
- "Aplica Redibujado eficiente (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El render no parpadea al actualizar el reloj del header"
- "Revisa mi ryu-tui y dime qué pasos de Redibujado eficiente me faltan en este nivel"