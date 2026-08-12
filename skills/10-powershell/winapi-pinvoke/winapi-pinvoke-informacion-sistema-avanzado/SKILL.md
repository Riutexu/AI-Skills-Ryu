---
name: winapi-pinvoke-informacion-sistema-avanzado
description: Información del sistema · nivel Avanzado · WinAPI y P/Invoke. Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. Objetivo del nivel: Combinar API nativa con .NET y CIM en un reporte unificado
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "informacion-sistema"
  nivel: avanzado
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Información del sistema — Avanzado

## Qué hace este skill

Datos del sistema vía API: memoria, discos, batería, arquitectura y hardware con nivel de detalle nativo. En este nivel se entrega: **Combinar API nativa con .NET y CIM en un reporte unificado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Información del sistema** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir un reporte unificado de sistema
2. Combinar fuentes: API, .NET y CIM
3. Detectar inconsistencias entre fuentes
4. Resolver datos que cambian en caliente (memoria)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar API nativa con .NET y CIM en un reporte unificado | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Construir un reporte unificado de sistema · Combinar fuentes: API, .NET y CIM · Detectar inconsistencias entre fuentes · Resolver datos que cambian en caliente (memoria) | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte unificado es consistente entre fuentes · Los datos volátiles se marcan con su timestamp | lista | sí | calidad verificable |
| $prompt_guia | Quiero un reporte de sistema unificado para RYU-TUI que mezcle API nativa, .NET y CIM: armá el modelo de datos y manejá las diferencias entre fuentes. | texto | no | "Información del sistema" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte unificado es consistente entre fuentes
- [ ] Los datos volátiles se marcan con su timestamp

## Ejemplos de prompts

- "Quiero un reporte de sistema unificado para RYU-TUI que mezcle API nativa, .NET y CIM: armá el modelo de datos y manejá las diferencias entre fuentes."
- "Aplica Información del sistema (nivel avanzado) a mi trabajo actual con WinAPI y P/Invoke: prioriza El reporte unificado es consistente entre fuentes"
- "Revisa mi winapi-pinvoke y dime qué pasos de Información del sistema me faltan en este nivel"