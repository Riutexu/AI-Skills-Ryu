---
name: modulos-ps-versionado-modulos-avanzado
description: Versionado de módulos · nivel Avanzado · Módulos y paquetes. SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. Objetivo del nivel: Prerelease, coexistencia de versiones y side-by-side
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "versionado-modulos"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Versionado de módulos — Avanzado

## Qué hace este skill

SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. En este nivel se entrega: **Prerelease, coexistencia de versiones y side-by-side**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado de módulos** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar prerelease y versión estable en paralelo
2. Mantener dos versiones instaladas sin pisarse
3. Migrar consumidores entre versiones
4. Probar el cambio de versión con tests de regresión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Prerelease, coexistencia de versiones y side-by-side | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Usar prerelease y versión estable en paralelo · Mantener dos versiones instaladas sin pisarse · Migrar consumidores entre versiones · Probar el cambio de versión con tests de regresión | lista | sí | 3-4 pasos |
| $criterios_clave | Prerelease y estable conviven instaladas · Los consumidores migran sin saltos rotos | lista | sí | calidad verificable |
| $prompt_guia | Quiero lanzar la 2.0 de RYU-TUI sin romper a quienes usan la 1.x: mostrame cómo conviven instaladas, cómo anunciar la migración y qué tests de regresión uso. | texto | no | "Versionado de módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Prerelease y estable conviven instaladas
- [ ] Los consumidores migran sin saltos rotos

## Ejemplos de prompts

- "Quiero lanzar la 2.0 de RYU-TUI sin romper a quienes usan la 1.x: mostrame cómo conviven instaladas, cómo anunciar la migración y qué tests de regresión uso."
- "Aplica Versionado de módulos (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Prerelease y estable conviven instaladas"
- "Revisa mi modulos-ps y dime qué pasos de Versionado de módulos me faltan en este nivel"