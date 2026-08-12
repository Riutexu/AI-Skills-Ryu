---
name: modulos-ps-actualizacion-rollback-profesional
description: Actualización y rollback · nivel Profesional · Módulos y paquetes. Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. Objetivo del nivel: Rollback completo: snapshots de instalación, downgrade controlado y procesos de emergencia
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "actualizacion-rollback"
  nivel: profesional
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Actualización y rollback — Profesional

## Qué hace este skill

Actualizar la suite sin miedo: versiones, backups, puntos de restauración y volver atrás con datos. En este nivel se entrega: **Rollback completo: snapshots de instalación, downgrade controlado y procesos de emergencia**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Actualización y rollback** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear snapshots del estado previo (módulos, config, profile)
2. Implementar downgrade a versión exacta anterior
3. Probar el proceso de rollback en staging
4. Documentar el playbook de emergencia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Rollback completo: snapshots de instalación, downgrade controlado y procesos de emergencia | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Crear snapshots del estado previo (módulos, config, profile) · Implementar downgrade a versión exacta anterior · Probar el proceso de rollback en staging · Documentar el playbook de emergencia | lista | sí | 3-4 pasos |
| $criterios_clave | El rollback restaura módulos, config y profile en un comando · El playbook de emergencia está probado, no inventado | lista | sí | calidad verificable |
| $prompt_guia | Necesito un sistema de rollback para RYU-TUI: snapshot previo a cada update, downgrade a versión exacta, prueba en staging y un playbook de emergencia documentado. | texto | no | "Actualización y rollback" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El rollback restaura módulos, config y profile en un comando
- [ ] El playbook de emergencia está probado, no inventado

## Ejemplos de prompts

- "Necesito un sistema de rollback para RYU-TUI: snapshot previo a cada update, downgrade a versión exacta, prueba en staging y un playbook de emergencia documentado."
- "Aplica Actualización y rollback (nivel profesional) a mi trabajo actual con Módulos y paquetes: prioriza El rollback restaura módulos, config y profile en un comando"
- "Revisa mi modulos-ps y dime qué pasos de Actualización y rollback me faltan en este nivel"