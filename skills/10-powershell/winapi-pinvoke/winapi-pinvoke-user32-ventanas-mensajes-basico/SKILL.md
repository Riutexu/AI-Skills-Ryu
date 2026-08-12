---
name: winapi-pinvoke-user32-ventanas-mensajes-basico
description: user32 (ventanas y mensajes) · nivel Básico · WinAPI y P/Invoke. Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. Objetivo del nivel: Encontrar y manipular ventanas de otras apps con user32
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "user32-ventanas-mensajes"
  nivel: basico
  stack: "Add-Type, Win32 API, .NET, Windows 11"
---

# user32 (ventanas y mensajes) — Básico

## Qué hace este skill

Las APIs de ventanas: FindWindow, SetForegroundWindow, mensajes WM_ y comportamiento de la UI. En este nivel se entrega: **Encontrar y manipular ventanas de otras apps con user32**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WinAPI y P/Invoke** (Add-Type, Win32 API, .NET, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **user32 (ventanas y mensajes)** dentro de WinAPI y P/Invoke.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Add-Type, Win32 API, .NET, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar FindWindow y GetWindowText
2. Buscar una ventana por título
3. Traerla al frente con SetForegroundWindow
4. Verificar si la ventana existe

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Encontrar y manipular ventanas de otras apps con user32 | texto | sí | resultado medible |
| $stack | WinAPI y P/Invoke | texto | sí | 10-powershell/winapi-pinvoke |
| $tecnologias | Add-Type, Win32 API, .NET, Windows 11 | texto | sí | Add-Type, Win32 API, .NET, Windows 11 |
| $tareas_clave | Declarar FindWindow y GetWindowText · Buscar una ventana por título · Traerla al frente con SetForegroundWindow · Verificar si la ventana existe | lista | sí | 3-4 pasos |
| $criterios_clave | Encontrás y traés al frente una ventana por título · Entendés los límites de permisos de foco | lista | sí | calidad verificable |
| $prompt_guia | Quiero que mi script encuentre la ventana de una app por su título y la traiga al frente: mostrame FindWindow, GetWindowText y SetForegroundWindow. | texto | no | "user32 (ventanas y mensajes)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Encontrás y traés al frente una ventana por título
- [ ] Entendés los límites de permisos de foco

## Ejemplos de prompts

- "Quiero que mi script encuentre la ventana de una app por su título y la traiga al frente: mostrame FindWindow, GetWindowText y SetForegroundWindow."
- "Aplica user32 (ventanas y mensajes) (nivel basico) a mi trabajo actual con WinAPI y P/Invoke: prioriza Encontrás y traés al frente una ventana por título"
- "Revisa mi winapi-pinvoke y dime qué pasos de user32 (ventanas y mensajes) me faltan en este nivel"