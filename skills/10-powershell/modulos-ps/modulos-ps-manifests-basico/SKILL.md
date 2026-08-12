---
name: modulos-ps-manifests-basico
description: Manifests · nivel Básico · Módulos y paquetes. El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. Objetivo del nivel: Crear un manifest con New-ModuleManifest y entender sus campos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "manifests"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Manifests — Básico

## Qué hace este skill

El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. En este nivel se entrega: **Crear un manifest con New-ModuleManifest y entender sus campos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manifests** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar el manifest con New-ModuleManifest
2. Completar descripción, autor y version
3. Declarar funciones exportadas
4. Verificar la carga con Import-Module -Force

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un manifest con New-ModuleManifest y entender sus campos | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Generar el manifest con New-ModuleManifest · Completar descripción, autor y version · Declarar funciones exportadas · Verificar la carga con Import-Module -Force | lista | sí | 3-4 pasos |
| $criterios_clave | El manifest existe y el módulo se carga a través de él · Los campos básicos están completos y sin errores | lista | sí | calidad verificable |
| $prompt_guia | Generame el manifest .psd1 para mi módulo con New-ModuleManifest: explícame qué campos son obligatorios, cuáles conviene completar y dejalo listo. | texto | no | "Manifests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El manifest existe y el módulo se carga a través de él
- [ ] Los campos básicos están completos y sin errores

## Ejemplos de prompts

- "Generame el manifest .psd1 para mi módulo con New-ModuleManifest: explícame qué campos son obligatorios, cuáles conviene completar y dejalo listo."
- "Aplica Manifests (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza El manifest existe y el módulo se carga a través de él"
- "Revisa mi modulos-ps y dime qué pasos de Manifests me faltan en este nivel"