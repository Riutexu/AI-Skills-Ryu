---
name: ryu-tui-layout-por-caracteres-profesional
description: Layout por caracteres · nivel Profesional · RYU-TUI: interfaces de terminal. Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. Objetivo del nivel: Motor de layout: sistema de celdas redibujable, doble buffer y separación entre medida y dibujo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "layout-por-caracteres"
  nivel: profesional
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Layout por caracteres — Profesional

## Qué hace este skill

Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. En este nivel se entrega: **Motor de layout: sistema de celdas redibujable, doble buffer y separación entre medida y dibujo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Layout por caracteres** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un modelo de celdas (matriz char + color) para la pantalla
2. Separar el cálculo de layout del renderizado
3. Implementar redibujado por regiones sucias
4. Soportar resize de la consola sin romper el layout

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Motor de layout: sistema de celdas redibujable, doble buffer y separación entre medida y dibujo | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Diseñar un modelo de celdas (matriz char + color) para la pantalla · Separar el cálculo de layout del renderizado · Implementar redibujado por regiones sucias · Soportar resize de la consola sin romper el layout | lista | sí | 3-4 pasos |
| $criterios_clave | El render usa buffer intermedio y no parpadea · Al agrandar la consola el layout se recalcula solo | lista | sí | calidad verificable |
| $prompt_guia | Quiero que el renderizado de RYU-TUI no parpadee: armame un modelo de buffer de celdas con región sucia, cálculo de layout separado y soporte de resize. ¿Qué estructura de clases o funciones proponés? | texto | no | "Layout por caracteres" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El render usa buffer intermedio y no parpadea
- [ ] Al agrandar la consola el layout se recalcula solo

## Ejemplos de prompts

- "Quiero que el renderizado de RYU-TUI no parpadee: armame un modelo de buffer de celdas con región sucia, cálculo de layout separado y soporte de resize. ¿Qué estructura de clases o funciones proponés?"
- "Aplica Layout por caracteres (nivel profesional) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza El render usa buffer intermedio y no parpadea"
- "Revisa mi ryu-tui y dime qué pasos de Layout por caracteres me faltan en este nivel"