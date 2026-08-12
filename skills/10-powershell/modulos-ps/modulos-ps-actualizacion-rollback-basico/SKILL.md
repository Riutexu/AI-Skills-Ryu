---
name: modulos-ps-actualizacion-rollback-basico
description: Actualización y rollback · nivel Básico · Módulos y paquetes. Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. Objetivo del nivel: Actualizar módulos y herramientas con los mecanismos estándar
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "actualizacion-rollback"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Actualización y rollback — Básico

## Qué hace este skill

Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. En este nivel se entrega: **Actualizar módulos y herramientas con los mecanismos estándar**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Actualización y rollback** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Actualizar módulos con Update-Module
2. Instalar la última versión específica con -MaximumVersion
3. Ver versiones instaladas vs disponibles
4. Actualizar herramientas con winget upgrade

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Actualizar módulos y herramientas con los mecanismos estándar | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Actualizar módulos con Update-Module · Instalar la última versión específica con -MaximumVersion · Ver versiones instaladas vs disponibles · Actualizar herramientas con winget upgrade | lista | sí | 3-4 pasos |
| $criterios_clave | Actualizás sin romper la configuración existente · Sabés qué versión quedó antes y después | lista | sí | calidad verificable |
| $prompt_guia | Quiero actualizar RYU-TUI y sus módulos a la última versión pero sin romper mi config: mostrame Update-Module, comparación de versiones y el orden seguro. | texto | no | "Actualización y rollback" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Actualizás sin romper la configuración existente
- [ ] Sabés qué versión quedó antes y después

## Ejemplos de prompts

- "Quiero actualizar RYU-TUI y sus módulos a la última versión pero sin romper mi config: mostrame Update-Module, comparación de versiones y el orden seguro."
- "Aplica Actualización y rollback (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Actualizás sin romper la configuración existente"
- "Revisa mi modulos-ps y dime qué pasos de Actualización y rollback me faltan en este nivel"