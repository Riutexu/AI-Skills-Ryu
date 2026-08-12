---
name: seguridad-powershell-restriccion-modulos-profesional
description: Restricción de módulos · nivel Profesional · Seguridad y hardening. Controlar qué módulos se cargan: allowlists, firma de módulos y módulos que no deberían estar. Objetivo del nivel: Política de módulos de la organización: publicación controlada, revisiones y cargos de confianza
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "restriccion-modulos"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Restricción de módulos — Profesional

## Qué hace este skill

Controlar qué módulos se cargan: allowlists, firma de módulos y módulos que no deberían estar. En este nivel se entrega: **Política de módulos de la organización: publicación controlada, revisiones y cargos de confianza**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Restricción de módulos** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la política de publicación de módulos internos
2. Definir el proceso de revisión antes de publicar
3. Monitorear la aparición de módulos nuevos
4. Auditar dependencias de terceros de la suite

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de módulos de la organización: publicación controlada, revisiones y cargos de confianza | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Diseñar la política de publicación de módulos internos · Definir el proceso de revisión antes de publicar · Monitorear la aparición de módulos nuevos · Auditar dependencias de terceros de la suite | lista | sí | 3-4 pasos |
| $criterios_clave | La suite solo depende de módulos auditados · Los módulos internos pasan revisión antes de publicarse | lista | sí | calidad verificable |
| $prompt_guia | Quiero una política de módulos para RYU-TUI: revisión previa a publicación, auditoría de dependencias de terceros y monitoreo de módulos nuevos en los equipos. | texto | no | "Restricción de módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La suite solo depende de módulos auditados
- [ ] Los módulos internos pasan revisión antes de publicarse

## Ejemplos de prompts

- "Quiero una política de módulos para RYU-TUI: revisión previa a publicación, auditoría de dependencias de terceros y monitoreo de módulos nuevos en los equipos."
- "Aplica Restricción de módulos (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza La suite solo depende de módulos auditados"
- "Revisa mi seguridad-powershell y dime qué pasos de Restricción de módulos me faltan en este nivel"