---
name: modulos-ps-funciones-publicas-privadas-basico
description: Funciones públicas y privadas · nivel Básico · Módulos y paquetes. El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. Objetivo del nivel: Separar lo público de lo interno con Export-ModuleMember
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "funciones-publicas-privadas"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Funciones públicas y privadas — Básico

## Qué hace este skill

El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. En este nivel se entrega: **Separar lo público de lo interno con Export-ModuleMember**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones públicas y privadas** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Marcar funciones como públicas e internas
2. Usar Export-ModuleMember explícito
3. Verificar qué se exporta con Get-Command -Module
4. Entender por qué no exponer helpers

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Separar lo público de lo interno con Export-ModuleMember | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Marcar funciones como públicas e internas · Usar Export-ModuleMember explícito · Verificar qué se exporta con Get-Command -Module · Entender por qué no exponer helpers | lista | sí | 3-4 pasos |
| $criterios_clave | Solo las funciones elegidas se exportan · La sesión global no se contamina | lista | sí | calidad verificable |
| $prompt_guia | Quiero controlar qué funciones de mi módulo se exportan: explicame Export-ModuleMember y mostrame el patrón con funciones públicas y privadas. | texto | no | "Funciones públicas y privadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Solo las funciones elegidas se exportan
- [ ] La sesión global no se contamina

## Ejemplos de prompts

- "Quiero controlar qué funciones de mi módulo se exportan: explicame Export-ModuleMember y mostrame el patrón con funciones públicas y privadas."
- "Aplica Funciones públicas y privadas (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza Solo las funciones elegidas se exportan"
- "Revisa mi modulos-ps y dime qué pasos de Funciones públicas y privadas me faltan en este nivel"