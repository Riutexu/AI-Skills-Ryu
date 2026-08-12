---
name: ryu-tui-mouse-consola-avanzado
description: Mouse en consola · nivel Avanzado · RYU-TUI: interfaces de terminal. Soporte de mouse en Windows Terminal: habilitación VT, eventos de clic y su uso con moderación. Objetivo del nivel: Traducir coordenadas de mouse al layout y acciones por región
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "mouse-consola"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Mouse en consola — Avanzado

## Qué hace este skill

Soporte de mouse en Windows Terminal: habilitación VT, eventos de clic y su uso con moderación. En este nivel se entrega: **Traducir coordenadas de mouse al layout y acciones por región**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mouse en consola** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Convertir coordenadas del evento a fila/columna del layout
2. Detectar qué región (header, menú, footer) recibió el clic
3. Implementar click en items de lista
4. Manejar scroll de rueda sobre listas largas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Traducir coordenadas de mouse al layout y acciones por región | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Convertir coordenadas del evento a fila/columna del layout · Detectar qué región (header, menú, footer) recibió el clic · Implementar click en items de lista · Manejar scroll de rueda sobre listas largas | lista | sí | 3-4 pasos |
| $criterios_clave | El clic activa la opción del menú sobre la que cayó · El scroll de rueda navega listas largas | lista | sí | calidad verificable |
| $prompt_guia | Quiero que los clics del mouse actúen sobre los elementos de RYU-TUI: que un clic en una opción del menú la seleccione y la rueda haga scroll. ¿Cómo traduzco coordenadas a elementos? | texto | no | "Mouse en consola" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El clic activa la opción del menú sobre la que cayó
- [ ] El scroll de rueda navega listas largas

## Ejemplos de prompts

- "Quiero que los clics del mouse actúen sobre los elementos de RYU-TUI: que un clic en una opción del menú la seleccione y la rueda haga scroll. ¿Cómo traduzco coordenadas a elementos?"
- "Aplica Mouse en consola (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El clic activa la opción del menú sobre la que cayó"
- "Revisa mi ryu-tui y dime qué pasos de Mouse en consola me faltan en este nivel"