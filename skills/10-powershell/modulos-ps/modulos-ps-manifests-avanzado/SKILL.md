---
name: modulos-ps-manifests-avanzado
description: Manifests · nivel Avanzado · Módulos y paquetes. El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. Objetivo del nivel: Manifest completo: dependencias, compatibilidad y secciones que la gente ignora
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "manifests"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Manifests — Avanzado

## Qué hace este skill

El .psd1: metadata, versiones, dependencias y compatibilidad declaradas correctamente. En este nivel se entrega: **Manifest completo: dependencias, compatibilidad y secciones que la gente ignora**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manifests** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar RequiredModules y RequiredAssemblies
2. Setear CompatiblePSEditions y PowerShellVersion
3. Documentar con HelpInfoURI y PrivateData
4. Validar el manifest con Test-ModuleManifest

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manifest completo: dependencias, compatibilidad y secciones que la gente ignora | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Declarar RequiredModules y RequiredAssemblies · Setear CompatiblePSEditions y PowerShellVersion · Documentar con HelpInfoURI y PrivateData · Validar el manifest con Test-ModuleManifest | lista | sí | 3-4 pasos |
| $criterios_clave | Las dependencias se declaran y se cargan automáticamente · Test-ModuleManifest pasa sin errores | lista | sí | calidad verificable |
| $prompt_guia | Mi módulo depende de dos módulos más: completá el manifest con RequiredModules, CompatiblePSEditions, versión mínima de PowerShell y validalo con Test-ModuleManifest. | texto | no | "Manifests" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las dependencias se declaran y se cargan automáticamente
- [ ] Test-ModuleManifest pasa sin errores

## Ejemplos de prompts

- "Mi módulo depende de dos módulos más: completá el manifest con RequiredModules, CompatiblePSEditions, versión mínima de PowerShell y validalo con Test-ModuleManifest."
- "Aplica Manifests (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Las dependencias se declaran y se cargan automáticamente"
- "Revisa mi modulos-ps y dime qué pasos de Manifests me faltan en este nivel"