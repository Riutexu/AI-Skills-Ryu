---
name: ryu-tui-ventanas-bordes-avanzado
description: Ventanas y bordes · nivel Avanzado · RYU-TUI: interfaces de terminal. Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. Objetivo del nivel: Bordes redondeados, estilos de borde y ventanas centradas dinámicamente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ventanas-bordes"
  nivel: avanzado
  stack: "PowerShell 7, ANSI/VT, Windows 11"
---

# Ventanas y bordes — Avanzado

## Qué hace este skill

Dibujo de ventanas, bordes redondeados, sombras, títulos y sistemas de capas superpuestas. En este nivel se entrega: **Bordes redondeados, estilos de borde y ventanas centradas dinámicamente**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **RYU-TUI: interfaces de terminal** (PowerShell 7, ANSI/VT, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ventanas y bordes** dentro de RYU-TUI: interfaces de terminal.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, ANSI/VT, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar bordes redondeados y dobles
2. Centrar la ventana según el tamaño actual de consola
3. Soportar títulos largos truncados
4. Redimensionar la ventana sin redibujar contenido roto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Bordes redondeados, estilos de borde y ventanas centradas dinámicamente | texto | sí | resultado medible |
| $stack | RYU-TUI: interfaces de terminal | texto | sí | 10-powershell/ryu-tui |
| $tecnologias | PowerShell 7, ANSI/VT, Windows 11 | texto | sí | PowerShell 7, ANSI/VT, Windows 11 |
| $tareas_clave | Implementar bordes redondeados y dobles · Centrar la ventana según el tamaño actual de consola · Soportar títulos largos truncados · Redimensionar la ventana sin redibujar contenido roto | lista | sí | 3-4 pasos |
| $criterios_clave | Las ventanas se centran solas al cambiar el tamaño de consola · El título largo se trunca sin romper el borde | lista | sí | calidad verificable |
| $prompt_guia | Mis ventanas modales en RYU-TUI se ven cuadradas y quiero bordes redondeados, centrado dinámico y títulos que se trunquen con elegancia. Actualizame el helper de dibujado. | texto | no | "Ventanas y bordes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las ventanas se centran solas al cambiar el tamaño de consola
- [ ] El título largo se trunca sin romper el borde

## Ejemplos de prompts

- "Mis ventanas modales en RYU-TUI se ven cuadradas y quiero bordes redondeados, centrado dinámico y títulos que se trunquen con elegancia. Actualizame el helper de dibujado."
- "Aplica Ventanas y bordes (nivel avanzado) a mi trabajo actual con RYU-TUI: interfaces de terminal: prioriza Las ventanas se centran solas al cambiar el tamaño de consola"
- "Revisa mi ryu-tui y dime qué pasos de Ventanas y bordes me faltan en este nivel"