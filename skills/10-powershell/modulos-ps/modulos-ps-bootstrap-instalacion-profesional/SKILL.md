---
name: modulos-ps-bootstrap-instalacion-profesional
description: Bootstrap de instalación · nivel Profesional · Módulos y paquetes. El patrón bootstrap.ps1: instalación de la suite completa desde un solo comando, idempotente y seguro. Objetivo del nivel: Bootstrap a prueba de balas: checks de prerrequisitos, logs, rollback parcial y pruebas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "bootstrap-instalacion"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Bootstrap de instalación — Profesional

## Qué hace este skill

El patrón bootstrap.ps1: instalación de la suite completa desde un solo comando, idempotente y seguro. En este nivel se entrega: **Bootstrap a prueba de balas: checks de prerrequisitos, logs, rollback parcial y pruebas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Bootstrap de instalación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar checks de prerrequisitos (versión de pwsh, red, permisos)
2. Loguear cada paso con su resultado
3. Implementar rollback de pasos parciales
4. Cubrir el bootstrap con tests de instalación limpia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Bootstrap a prueba de balas: checks de prerrequisitos, logs, rollback parcial y pruebas | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Agregar checks de prerrequisitos (versión de pwsh, red, permisos) · Loguear cada paso con su resultado · Implementar rollback de pasos parciales · Cubrir el bootstrap con tests de instalación limpia | lista | sí | 3-4 pasos |
| $criterios_clave | Un bootstrap fallido deja log y estado consistente · La instalación limpia se valida con tests automáticos | lista | sí | calidad verificable |
| $prompt_guia | Necesito blindar el bootstrap.ps1: prerrequisitos chequeados, log por etapa, rollback de pasos fallidos y que la suite de 18 tests lo valide en una instalación limpia. | texto | no | "Bootstrap de instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un bootstrap fallido deja log y estado consistente
- [ ] La instalación limpia se valida con tests automáticos

## Ejemplos de prompts

- "Necesito blindar el bootstrap.ps1: prerrequisitos chequeados, log por etapa, rollback de pasos fallidos y que la suite de 18 tests lo valide en una instalación limpia."
- "Aplica Bootstrap de instalación (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza Un bootstrap fallido deja log y estado consistente"
- "Revisa mi modulos-ps y dime qué pasos de Bootstrap de instalación me faltan en este nivel"