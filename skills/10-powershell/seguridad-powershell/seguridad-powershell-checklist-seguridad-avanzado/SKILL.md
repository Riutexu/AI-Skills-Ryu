---
name: seguridad-powershell-checklist-seguridad-avanzado
description: Checklist de seguridad de scripts · nivel Avanzado · Seguridad y hardening. La lista de verificación final: qué revisar antes de dar un script por bueno en seguridad. Objetivo del nivel: Checklist avanzada: logging, firma, análisis estático y revisión de dependencias
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "checklist-seguridad"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Checklist de seguridad de scripts — Avanzado

## Qué hace este skill

La lista de verificación final: qué revisar antes de dar un script por bueno en seguridad. En este nivel se entrega: **Checklist avanzada: logging, firma, análisis estático y revisión de dependencias**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Checklist de seguridad de scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar ítems de logging y auditoría
2. Integrar PSScriptAnalyzer con reglas de seguridad
3. Revisar dependencias de terceros
4. Crear un reporte de revisión estándar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Checklist avanzada: logging, firma, análisis estático y revisión de dependencias | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Agregar ítems de logging y auditoría · Integrar PSScriptAnalyzer con reglas de seguridad · Revisar dependencias de terceros · Crear un reporte de revisión estándar | lista | sí | 3-4 pasos |
| $criterios_clave | La revisión genera un reporte reproducible · El análisis estático de seguridad corre en cada revisión | lista | sí | calidad verificable |
| $prompt_guia | Quiero una checklist de seguridad avanzada para RYU-TUI: logging, PSScriptAnalyzer con reglas de seguridad, revisión de dependencias y un reporte estándar de cada revisión. | texto | no | "Checklist de seguridad de scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La revisión genera un reporte reproducible
- [ ] El análisis estático de seguridad corre en cada revisión

## Ejemplos de prompts

- "Quiero una checklist de seguridad avanzada para RYU-TUI: logging, PSScriptAnalyzer con reglas de seguridad, revisión de dependencias y un reporte estándar de cada revisión."
- "Aplica Checklist de seguridad de scripts (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza La revisión genera un reporte reproducible"
- "Revisa mi seguridad-powershell y dime qué pasos de Checklist de seguridad de scripts me faltan en este nivel"