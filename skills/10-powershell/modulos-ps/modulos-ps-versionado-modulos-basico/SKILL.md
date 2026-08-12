---
name: modulos-ps-versionado-modulos-basico
description: Versionado de módulos · nivel Básico · Módulos y paquetes. SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. Objetivo del nivel: Entender SemVer y versionar un módulo correctamente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "versionado-modulos"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Versionado de módulos — Básico

## Qué hace este skill

SemVer aplicado a módulos: version, prerelease, cambios breaking y coexistencia de versiones. En este nivel se entrega: **Entender SemVer y versionar un módulo correctamente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado de módulos** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explicar major.minor.patch con ejemplos
2. Versionar el manifest según los cambios
3. Ver la versión instalada con Get-Module
4. Instalar una versión específica con -RequiredVersion

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender SemVer y versionar un módulo correctamente | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Explicar major.minor.patch con ejemplos · Versionar el manifest según los cambios · Ver la versión instalada con Get-Module · Instalar una versión específica con -RequiredVersion | lista | sí | 3-4 pasos |
| $criterios_clave | Sabés qué número tocar según el tipo de cambio · Instalás versiones específicas sin romper otras | lista | sí | calidad verificable |
| $prompt_guia | Quiero versionar bien mi módulo: explicame SemVer con ejemplos concretos de cuándo subir major, minor o patch, y cómo instalar una versión exacta. | texto | no | "Versionado de módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Sabés qué número tocar según el tipo de cambio
- [ ] Instalás versiones específicas sin romper otras

## Ejemplos de prompts

- "Quiero versionar bien mi módulo: explicame SemVer con ejemplos concretos de cuándo subir major, minor o patch, y cómo instalar una versión exacta."
- "Aplica Versionado de módulos (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Sabés qué número tocar según el tipo de cambio"
- "Revisa mi modulos-ps y dime qué pasos de Versionado de módulos me faltan en este nivel"