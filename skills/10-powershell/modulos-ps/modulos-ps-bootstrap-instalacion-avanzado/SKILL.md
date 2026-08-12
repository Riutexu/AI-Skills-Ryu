---
name: modulos-ps-bootstrap-instalacion-avanzado
description: Bootstrap de instalación · nivel Avanzado · Módulos y paquetes. El patrón bootstrap.ps1: instalación de la suite completa desde un solo comando, idempotente y seguro. Objetivo del nivel: Escribir un bootstrap idempotente que detecta y salta lo ya instalado
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "bootstrap-instalacion"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Bootstrap de instalación — Avanzado

## Qué hace este skill

El patrón bootstrap.ps1: instalación de la suite completa desde un solo comando, idempotente y seguro. En este nivel se entrega: **Escribir un bootstrap idempotente que detecta y salta lo ya instalado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Bootstrap de instalación** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar versiones instaladas y saltar pasos
2. Ordenar dependencias y verificar prerequisitos
3. Informar progreso por etapa
4. Fallar con mensajes claros y resumen final

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Escribir un bootstrap idempotente que detecta y salta lo ya instalado | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Detectar versiones instaladas y saltar pasos · Ordenar dependencias y verificar prerequisitos · Informar progreso por etapa · Fallar con mensajes claros y resumen final | lista | sí | 3-4 pasos |
| $criterios_clave | Correr el bootstrap dos veces no rompe nada · Cada etapa reporta estado: ok, saltado o fallado | lista | sí | calidad verificable |
| $prompt_guia | Quiero que bootstrap.ps1 sea idempotente: detecta pwsh, módulos y dependencias ya instaladas, las salta, y al final muestra un resumen de qué hizo en cada etapa. | texto | no | "Bootstrap de instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Correr el bootstrap dos veces no rompe nada
- [ ] Cada etapa reporta estado: ok, saltado o fallado

## Ejemplos de prompts

- "Quiero que bootstrap.ps1 sea idempotente: detecta pwsh, módulos y dependencias ya instaladas, las salta, y al final muestra un resumen de qué hizo en cada etapa."
- "Aplica Bootstrap de instalación (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Correr el bootstrap dos veces no rompe nada"
- "Revisa mi modulos-ps y dime qué pasos de Bootstrap de instalación me faltan en este nivel"