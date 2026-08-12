---
name: modulos-ps-nuget-dependencias-avanzado
description: NuGet y dependencias · nivel Avanzado · Módulos y paquetes. PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. Objetivo del nivel: Restauración de dependencias y resolución de conflictos de versiones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "nuget-dependencias"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# NuGet y dependencias — Avanzado

## Qué hace este skill

PowerShellGet y NuGet por debajo: fuentes, feeds privados, restauración y conflicto de dependencias. En este nivel se entrega: **Restauración de dependencias y resolución de conflictos de versiones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **NuGet y dependencias** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar dependencias con versión mínima exacta
2. Resolver conflictos entre versiones requeridas
3. Instalar dependencias de forma reproducible
4. Auditar qué versión quedó instalada y por qué

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Restauración de dependencias y resolución de conflictos de versiones | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Declarar dependencias con versión mínima exacta · Resolver conflictos entre versiones requeridas · Instalar dependencias de forma reproducible · Auditar qué versión quedó instalada y por qué | lista | sí | 3-4 pasos |
| $criterios_clave | Un mismo entorno se reconstruye con las mismas versiones · Los conflictos de dependencias se resuelven con criterio documentado | lista | sí | calidad verificable |
| $prompt_guia | Dos de mis módulos piden versiones distintas de una dependencia y a veces se rompe todo: mostrame cómo declarar versiones, resolver el conflicto y auditar qué quedó instalado. | texto | no | "NuGet y dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un mismo entorno se reconstruye con las mismas versiones
- [ ] Los conflictos de dependencias se resuelven con criterio documentado

## Ejemplos de prompts

- "Dos de mis módulos piden versiones distintas de una dependencia y a veces se rompe todo: mostrame cómo declarar versiones, resolver el conflicto y auditar qué quedó instalado."
- "Aplica NuGet y dependencias (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Un mismo entorno se reconstruye con las mismas versiones"
- "Revisa mi modulos-ps y dime qué pasos de NuGet y dependencias me faltan en este nivel"