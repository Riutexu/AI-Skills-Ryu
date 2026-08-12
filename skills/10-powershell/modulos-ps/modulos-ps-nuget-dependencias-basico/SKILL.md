---
name: modulos-ps-nuget-dependencias-basico
description: NuGet y dependencias · nivel Básico · Módulos y paquetes. PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. Objetivo del nivel: Entender cómo PowerShellGet usa NuGet y configurar fuentes
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "nuget-dependencias"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# NuGet y dependencias — Básico

## Qué hace este skill

PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. En este nivel se entrega: **Entender cómo PowerShellGet usa NuGet y configurar fuentes**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **NuGet y dependencias** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar fuentes con Get-PSRepository
2. Agregar un feed privado con Register-PSRepository
3. Instalar con -Repository explícito
4. Ver de dónde se instaló un módulo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender cómo PowerShellGet usa NuGet y configurar fuentes | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Listar fuentes con Get-PSRepository · Agregar un feed privado con Register-PSRepository · Instalar con -Repository explícito · Ver de dónde se instaló un módulo | lista | sí | 3-4 pasos |
| $criterios_clave | Sabés de qué repositorio viene cada módulo · Configurás una fuente privada sin pisar las oficiales | lista | sí | calidad verificable |
| $prompt_guia | Quiero instalar módulos desde un feed NuGet privado de mi empresa: explicame cómo funciona PowerShellGet con NuGet y configurá el repositorio. | texto | no | "NuGet y dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Sabés de qué repositorio viene cada módulo
- [ ] Configurás una fuente privada sin pisar las oficiales

## Ejemplos de prompts

- "Quiero instalar módulos desde un feed NuGet privado de mi empresa: explicame cómo funciona PowerShellGet con NuGet y configurá el repositorio."
- "Aplica NuGet y dependencias (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Sabés de qué repositorio viene cada módulo"
- "Revisa mi modulos-ps y dime qué pasos de NuGet y dependencias me faltan en este nivel"