---
name: modulos-ps-psgallery-publicacion-basico
description: PSGallery y publicación · nivel Básico · Módulos y paquetes. Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. Objetivo del nivel: Publicar un módulo en PSGallery y consumirlo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "psgallery-publicacion"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# PSGallery y publicación — Básico

## Qué hace este skill

Publicar y consumir módulos desde PSGallery: Publish-Module, API key y galerías privadas. En este nivel se entrega: **Publicar un módulo en PSGallery y consumirlo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PSGallery y publicación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Preparar el módulo con manifest completo
2. Publicar con Publish-Module y API key
3. Instalar con Install-Module en otra máquina
4. Verificar la instalación y el módulo publicado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Publicar un módulo en PSGallery y consumirlo | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Preparar el módulo con manifest completo · Publicar con Publish-Module y API key · Instalar con Install-Module en otra máquina · Verificar la instalación y el módulo publicado | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo se publica y se instala desde galería · Los metadatos publicados son correctos | lista | sí | calidad verificable |
| $prompt_guia | Quiero publicar mi módulo en PSGallery: preparame el manifest, el comando Publish-Module con API key y el flujo de instalación desde otra máquina. | texto | no | "PSGallery y publicación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo se publica y se instala desde galería
- [ ] Los metadatos publicados son correctos

## Ejemplos de prompts

- "Quiero publicar mi módulo en PSGallery: preparame el manifest, el comando Publish-Module con API key y el flujo de instalación desde otra máquina."
- "Aplica PSGallery y publicación (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza El módulo se publica y se instala desde galería"
- "Revisa mi modulos-ps y dime qué pasos de PSGallery y publicación me faltan en este nivel"