---
name: modulos-ps-psgallery-publicacion-profesional
description: PSGallery y publicación · nivel Profesional · Módulos y paquetes. Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. Objetivo del nivel: Flujo de publicación automatizado: pipeline, versionado automático y galería privada
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "psgallery-publicacion"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# PSGallery y publicación — Profesional

## Qué hace este skill

Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. En este nivel se entrega: **Flujo de publicación automatizado: pipeline, versionado automático y galería privada**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PSGallery y publicación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Automatizar la publicación desde CI al taguear
2. Incrementar versión automáticamente según el changelog
3. Configurar una galería privada (feed NuGet)
4. Probar la instalación limpia desde la galería

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Flujo de publicación automatizado: pipeline, versionado automático y galería privada | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Automatizar la publicación desde CI al taguear · Incrementar versión automáticamente según el changelog · Configurar una galería privada (feed NuGet) · Probar la instalación limpia desde la galería | lista | sí | 3-4 pasos |
| $criterios_clave | Publicar es un tag y un pipeline, no pasos manuales · La instalación desde la galería se prueba en máquina limpia | lista | sí | calidad verificable |
| $prompt_guia | Quiero que publicar RYU-TUI sea automático: al taguear una versión, el CI incrementa la versión del manifest, publica en mi feed privado y prueba la instalación en limpio. | texto | no | "PSGallery y publicación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Publicar es un tag y un pipeline, no pasos manuales
- [ ] La instalación desde la galería se prueba en máquina limpia

## Ejemplos de prompts

- "Quiero que publicar RYU-TUI sea automático: al taguear una versión, el CI incrementa la versión del manifest, publica en mi feed privado y prueba la instalación en limpio."
- "Aplica PSGallery y publicación (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza Publicar es un tag y un pipeline, no pasos manuales"
- "Revisa mi modulos-ps y dime qué pasos de PSGallery y publicación me faltan en este nivel"