---
name: winapi-pinvoke-ventanas-externas-focus-basico
description: Ventanas externas y focus · nivel Básico · WinAPI y P/Invoke. Manipular ventanas de otras apps: enumeración, foco, minimizar, y respetar al usuario. Objetivo del nivel: Enumerar ventanas de otras apps y listar sus títulos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "ventanas-externas-focus"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# Ventanas externas y focus — Básico

## Qué hace este skill

Manipular ventanas de otras apps: enumeración, foco, minimizar, y respetar al usuario. En este nivel se entrega: **Enumerar ventanas de otras apps y listar sus títulos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Ventanas externas y focus** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Enumerar todas las ventanas visibles
2. Listar título, proceso y visibilidad
3. Filtrar ventanas de la propia app
4. Mostrar un reporte ordenado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Enumerar ventanas de otras apps y listar sus títulos | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Enumerar todas las ventanas visibles · Listar título, proceso y visibilidad · Filtrar ventanas de la propia app · Mostrar un reporte ordenado | lista | sí | 3-4 pasos |
| $criterios_clave | Listás las ventanas abiertas con su proceso y título · Sabés identificar ventanas invisibles o de sistema | lista | sí | calidad verificable |
| $prompt_guia | Quiero un comando de RYU-TUI que liste todas las ventanas abiertas con su título y proceso: mostrame la enumeración con EnumWindows y el filtrado. | texto | no | "Ventanas externas y focus" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Listás las ventanas abiertas con su proceso y título
- [ ] Sabés identificar ventanas invisibles o de sistema

## Ejemplos de prompts

- "Quiero un comando de RYU-TUI que liste todas las ventanas abiertas con su título y proceso: mostrame la enumeración con EnumWindows y el filtrado."
- "Aplica Ventanas externas y focus (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Listás las ventanas abiertas con su proceso y título"
- "Revisa mi winapi-pinvoke y dime qué pasos de Ventanas externas y focus me faltan en este nivel"