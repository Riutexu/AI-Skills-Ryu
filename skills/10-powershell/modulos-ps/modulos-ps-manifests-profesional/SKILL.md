---
name: modulos-ps-manifests-profesional
description: Manifests · nivel Profesional · Módulos y paquetes. El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. Objetivo del nivel: Estrategia de manifest para distribución: prerelease, tags y consistencia con el código
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "manifests"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Manifests — Profesional

## Qué hace este skill

El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. En este nivel se entrega: **Estrategia de manifest para distribución: prerelease, tags y consistencia con el código**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manifests** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Setear Prerelease y Tags para la publicación
2. Mantener la versión sincronizada entre código y manifest
3. Versionar el manifest en el repo con changelog
4. Validar el manifest en CI antes de publicar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de manifest para distribución: prerelease, tags y consistencia con el código | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Setear Prerelease y Tags para la publicación · Mantener la versión sincronizada entre código y manifest · Versionar el manifest en el repo con changelog · Validar el manifest en CI antes de publicar | lista | sí | 3-4 pasos |
| $criterios_clave | La versión del manifest nunca desincroniza con el código · El manifest se valida automáticamente en el pipeline | lista | sí | calidad verificable |
| $prompt_guia | Quiero automatizar la consistencia del manifest de mi módulo: que la versión salga de una sola fuente, se valide en CI y use Prerelease para los candidatos. Diseñá el flujo. | texto | no | "Manifests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La versión del manifest nunca desincroniza con el código
- [ ] El manifest se valida automáticamente en el pipeline

## Ejemplos de prompts

- "Quiero automatizar la consistencia del manifest de mi módulo: que la versión salga de una sola fuente, se valide en CI y use Prerelease para los candidatos. Diseñá el flujo."
- "Aplica Manifests (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza La versión del manifest nunca desincroniza con el código"
- "Revisa mi modulos-ps y dime qué pasos de Manifests me faltan en este nivel"