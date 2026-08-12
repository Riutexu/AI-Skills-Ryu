---
name: modulos-ps-versionado-modulos-profesional
description: Versionado de módulos · nivel Profesional · Módulos y paquetes. SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. Objetivo del nivel: Flujo de release: changelog generado, versión desde una sola fuente y etiquetas de git
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "versionado-modulos"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Versionado de módulos — Profesional

## Qué hace este skill

SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. En este nivel se entrega: **Flujo de release: changelog generado, versión desde una sola fuente y etiquetas de git**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado de módulos** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar changelog desde los commits
2. Calcular la versión siguiente automáticamente
3. Tagear releases en git y publicar
4. Validar que el manifest nunca desincronice

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Flujo de release: changelog generado, versión desde una sola fuente y etiquetas de git | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Generar changelog desde los commits · Calcular la versión siguiente automáticamente · Tagear releases en git y publicar · Validar que el manifest nunca desincronice | lista | sí | 3-4 pasos |
| $criterios_clave | La versión nueva sale de una sola fuente en el pipeline · El changelog refleja exactamente los cambios de la release | lista | sí | calidad verificable |
| $prompt_guia | Quiero automatizar las releases de mi módulo: changelog desde commits, cálculo de versión con conventional commits, tag en git y publicación sincronizada. | texto | no | "Versionado de módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La versión nueva sale de una sola fuente en el pipeline
- [ ] El changelog refleja exactamente los cambios de la release

## Ejemplos de prompts

- "Quiero automatizar las releases de mi módulo: changelog desde commits, cálculo de versión con conventional commits, tag en git y publicación sincronizada."
- "Aplica Versionado de módulos (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza La versión nueva sale de una sola fuente en el pipeline"
- "Revisa mi modulos-ps y dime qué pasos de Versionado de módulos me faltan en este nivel"