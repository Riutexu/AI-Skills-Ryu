---
name: ryu-tui-layout-por-caracteres-avanzado
description: Layout por caracteres · nivel Avanzado · RYU-TUI: interfaces de terminal. Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. Objetivo del nivel: Componer layouts: divisiones proporcionales, alineación y texto que se corta con elegancia
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "layout-por-caracteres"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Layout por caracteres — Avanzado

## Qué hace este skill

Dibujo de interfaces con celdas de caracteres: coordenadas, medidas y composición de paneles. En este nivel se entrega: **Componer layouts: divisiones proporcionales, alineación y texto que se corta con elegancia**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Layout por caracteres** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dividir la pantalla en paneles por porcentaje
2. Centrar y alinear texto con padding calculado
3. Truncar texto largo con elipsis
4. Dibujar encabezados de columna alineados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer layouts: divisiones proporcionales, alineación y texto que se corta con elegancia | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Dividir la pantalla en paneles por porcentaje · Centrar y alinear texto con padding calculado · Truncar texto largo con elipsis · Dibujar encabezados de columna alineados | lista | sí | 3-4 pasos |
| $criterios_clave | Los paneles se adaptan al ancho real de la consola · Ningún texto desborda su contenedor | lista | sí | calidad verificable |
| $prompt_guia | Estoy armando el layout de RYU-TUI: quiero un header, una zona de contenido y un footer que se repartan la pantalla y que el texto se trunque con puntos suspensivos. Ayudame con las funciones de composición. | texto | no | "Layout por caracteres" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los paneles se adaptan al ancho real de la consola
- [ ] Ningún texto desborda su contenedor

## Ejemplos de prompts

- "Estoy armando el layout de RYU-TUI: quiero un header, una zona de contenido y un footer que se repartan la pantalla y que el texto se trunque con puntos suspensivos. Ayudame con las funciones de composición."
- "Aplica Layout por caracteres (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Los paneles se adaptan al ancho real de la consola"
- "Revisa mi ryu-tui y dime qué pasos de Layout por caracteres me faltan en este nivel"