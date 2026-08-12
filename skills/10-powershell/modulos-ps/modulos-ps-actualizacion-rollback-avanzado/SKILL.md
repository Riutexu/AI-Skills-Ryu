---
name: modulos-ps-actualizacion-rollback-avanzado
description: Actualización y rollback · nivel Avanzado · Módulos y paquetes. Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. Objetivo del nivel: Actualización con respaldo de config y verificación post-update
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "actualizacion-rollback"
  nivel: avanzado
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Actualización y rollback — Avanzado

## Qué hace este skill

Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. En este nivel se entrega: **Actualización con respaldo de config y verificación post-update**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Actualización y rollback** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Respaldar la configuración antes de actualizar
2. Correr los tests tras la actualización
3. Detectar regresiones en la config
4. Restaurar la config anterior si algo cambió

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Actualización con respaldo de config y verificación post-update | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Respaldar la configuración antes de actualizar · Correr los tests tras la actualización · Detectar regresiones en la config · Restaurar la config anterior si algo cambió | lista | sí | 3-4 pasos |
| $criterios_clave | La config se respalda y se restaura ante regresión · Los tests se corren después de cada actualización | lista | sí | calidad verificable |
| $prompt_guia | Quiero actualizar RYU-TUI con red de seguridad: backup de config, actualización, corrida de tests y restauración automática si detecta regresiones. Diseñá el flujo. | texto | no | "Actualización y rollback" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La config se respalda y se restaura ante regresión
- [ ] Los tests se corren después de cada actualización

## Ejemplos de prompts

- "Quiero actualizar RYU-TUI con red de seguridad: backup de config, actualización, corrida de tests y restauración automática si detecta regresiones. Diseñá el flujo."
- "Aplica Actualización y rollback (nivel avanzado) a mi trabajo actual con Módulos y paquetes: prioriza La config se respalda y se restaura ante regresión"
- "Revisa mi modulos-ps y dime qué pasos de Actualización y rollback me faltan en este nivel"