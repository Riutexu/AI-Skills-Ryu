---
name: modulos-ps-funciones-publicas-privadas-avanzado
description: Funciones públicas y privadas · nivel Avanzado · Módulos y paquetes. El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. Objetivo del nivel: Convenciones de nombres, prefijos y estados de funciones (internal, exported, advanced)
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "funciones-publicas-privadas"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Funciones públicas y privadas — Avanzado

## Qué hace este skill

El arte de la API de módulo: qué exponer, qué ocultar y cómo evolucionar sin romper consumidores. En este nivel se entrega: **Convenciones de nombres, prefijos y estados de funciones (internal, exported, advanced)**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones públicas y privadas** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir prefijos de verbo-nombre por módulo
2. Documentar cuáles funciones son públicas y por qué
3. Convertir funciones críticas en advanced functions
4. Detectar funciones exportadas por accidente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Convenciones de nombres, prefijos y estados de funciones (internal, exported, advanced) | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Definir prefijos de verbo-nombre por módulo · Documentar cuáles funciones son públicas y por qué · Convertir funciones críticas en advanced functions · Detectar funciones exportadas por accidente | lista | sí | 3-4 pasos |
| $criterios_clave | Cada función pública tiene su documentación y justificación · Ninguna función interna se exporta por accidente | lista | sí | calidad verificable |
| $prompt_guia | Quiero definir la API pública de mi módulo de RYU-TUI: prefijos de nombres consistentes, funciones internas nunca exportadas y las públicas documentadas. ¿Qué criterios uso? | texto | no | "Funciones públicas y privadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada función pública tiene su documentación y justificación
- [ ] Ninguna función interna se exporta por accidente

## Ejemplos de prompts

- "Quiero definir la API pública de mi módulo de RYU-TUI: prefijos de nombres consistentes, funciones internas nunca exportadas y las públicas documentadas. ¿Qué criterios uso?"
- "Aplica Funciones públicas y privadas (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza Cada función pública tiene su documentación y justificación"
- "Revisa mi modulos-ps y dime qué pasos de Funciones públicas y privadas me faltan en este nivel"