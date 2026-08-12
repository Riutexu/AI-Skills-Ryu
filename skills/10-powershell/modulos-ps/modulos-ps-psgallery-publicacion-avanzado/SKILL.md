---
name: modulos-ps-psgallery-publicacion-avanzado
description: PSGallery y publicación · nivel Avanzado · Módulos y paquetes. Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. Objetivo del nivel: Publicación profesional: prerelease, tags, firmado y verificación de metadata
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "psgallery-publicacion"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# PSGallery y publicación — Avanzado

## Qué hace este skill

Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. En este nivel se entrega: **Publicación profesional: prerelease, tags, firmado y verificación de metadata**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PSGallery y publicación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Publicar prereleases con -AllowPrerelease
2. Agregar tags y descripción de calidad
3. Firmar el módulo antes de publicar
4. Verificar la metadata publicada desde la galería

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Publicación profesional: prerelease, tags, firmado y verificación de metadata | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Publicar prereleases con -AllowPrerelease · Agregar tags y descripción de calidad · Firmar el módulo antes de publicar · Verificar la metadata publicada desde la galería | lista | sí | 3-4 pasos |
| $criterios_clave | Las prereleases no pisan la versión estable · El módulo publicado tiene metadata completa y legible | lista | sí | calidad verificable |
| $prompt_guia | Quiero publicar la versión 0.9 como prerelease de mi módulo RYU-TUI: con tags, descripción decente y que no afecte a quienes usan la versión estable. | texto | no | "PSGallery y publicación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las prereleases no pisan la versión estable
- [ ] El módulo publicado tiene metadata completa y legible

## Ejemplos de prompts

- "Quiero publicar la versión 0.9 como prerelease de mi módulo RYU-TUI: con tags, descripción decente y que no afecte a quienes usan la versión estable."
- "Aplica PSGallery y publicación (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Las prereleases no pisan la versión estable"
- "Revisa mi modulos-ps y dime qué pasos de PSGallery y publicación me faltan en este nivel"