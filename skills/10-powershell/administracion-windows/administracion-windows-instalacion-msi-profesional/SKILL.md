---
name: administracion-windows-instalacion-msi-profesional
description: Instalación y MSI · nivel Profesional · Administración de Windows. Instalar y desinstalar software por comandos: MSI, winget, argumentos silenciosos y verificación. Objetivo del nivel: Instalación como parte de bootstrap: gestor de paquetes de la suite y re-instalación idempotente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "instalacion-msi"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Instalación y MSI — Profesional

## Qué hace este skill

Instalar y desinstalar software por comandos: MSI, winget, argumentos silenciosos y verificación. En este nivel se entrega: **Instalación como parte de bootstrap: gestor de paquetes de la suite y re-instalación idempotente**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y MSI** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar si algo ya está instalado y saltarlo (idempotencia)
2. Instalar una lista de paquetes desde config
3. Loguear cada instalación con estado y versión
4. Probar la instalación desde cero en una máquina limpia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Instalación como parte de bootstrap: gestor de paquetes de la suite y re-instalación idempotente | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Detectar si algo ya está instalado y saltarlo (idempotencia) · Instalar una lista de paquetes desde config · Loguear cada instalación con estado y versión · Probar la instalación desde cero en una máquina limpia | lista | sí | 3-4 pasos |
| $criterios_clave | Correr el bootstrap dos veces no duplica ni rompe nada · La instalación desde cero deja un log completo y funciona | lista | sí | calidad verificable |
| $prompt_guia | El bootstrap.ps1 de RYU-TUI instala dependencias: quiero que sea idempotente, que instale desde una lista configurable, loguee versión y estado, y que funcione en una máquina limpia de entrada. | texto | no | "Instalación y MSI" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Correr el bootstrap dos veces no duplica ni rompe nada
- [ ] La instalación desde cero deja un log completo y funciona

## Ejemplos de prompts

- "El bootstrap.ps1 de RYU-TUI instala dependencias: quiero que sea idempotente, que instale desde una lista configurable, loguee versión y estado, y que funcione en una máquina limpia de entrada."
- "Aplica Instalación y MSI (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza Correr el bootstrap dos veces no duplica ni rompe nada"
- "Revisa mi administracion-windows y dime qué pasos de Instalación y MSI me faltan en este nivel"