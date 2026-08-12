---
name: modulos-ps-nuget-dependencias-profesional
description: NuGet y dependencias · nivel Profesional · Módulos y paquetes. PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. Objetivo del nivel: Reproducibilidad total: lockfile propio, verificación de integridad y bootstrap offline
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "nuget-dependencias"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# NuGet y dependencias — Profesional

## Qué hace este skill

PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. En este nivel se entrega: **Reproducibilidad total: lockfile propio, verificación de integridad y bootstrap offline**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **NuGet y dependencias** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar un lock de versiones exactas del proyecto
2. Verificar hashes de los paquetes descargados
3. Soportar instalación offline desde caché
4. Documentar el proceso de restauración completo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Reproducibilidad total: lockfile propio, verificación de integridad y bootstrap offline | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Generar un lock de versiones exactas del proyecto · Verificar hashes de los paquetes descargados · Soportar instalación offline desde caché · Documentar el proceso de restauración completo | lista | sí | 3-4 pasos |
| $criterios_clave | Un ambiente se reconstruye byte a byte con el lock · La instalación offline funciona sin tocar internet | lista | sí | calidad verificable |
| $prompt_guia | Necesito que la instalación de RYU-TUI sea reproducible: lock de versiones exactas, verificación de integridad y modo offline con caché para máquinas sin internet. Diseñá el proceso. | texto | no | "NuGet y dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un ambiente se reconstruye byte a byte con el lock
- [ ] La instalación offline funciona sin tocar internet

## Ejemplos de prompts

- "Necesito que la instalación de RYU-TUI sea reproducible: lock de versiones exactas, verificación de integridad y modo offline con caché para máquinas sin internet. Diseñá el proceso."
- "Aplica NuGet y dependencias (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza Un ambiente se reconstruye byte a byte con el lock"
- "Revisa mi modulos-ps y dime qué pasos de NuGet y dependencias me faltan en este nivel"