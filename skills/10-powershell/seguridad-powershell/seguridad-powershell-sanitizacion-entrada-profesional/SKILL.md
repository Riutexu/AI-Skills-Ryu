---
name: seguridad-powershell-sanitizacion-entrada-profesional
description: Sanitización de entrada · nivel Profesional · Seguridad y hardening. Validar y limpiar lo que entra a tus scripts: parámetros, archivos de config y datos externos. Objetivo del nivel: Estrategia de validación de la suite: esquemas centralizados, fallos tempranos y tests de entradas sucias
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "sanitizacion-entrada"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Sanitización de entrada — Profesional

## Qué hace este skill

Validar y limpiar lo que entra a tus scripts: parámetros, archivos de config y datos externos. En este nivel se entrega: **Estrategia de validación de la suite: esquemas centralizados, fallos tempranos y tests de entradas sucias**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sanitización de entrada** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar los esquemas de validación de la suite
2. Fallar temprano con contexto de dónde vino el dato
3. Probar con un set de entradas sucias
4. Documentar los límites de lo que acepta cada entrada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de validación de la suite: esquemas centralizados, fallos tempranos y tests de entradas sucias | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Centralizar los esquemas de validación de la suite · Fallar temprano con contexto de dónde vino el dato · Probar con un set de entradas sucias · Documentar los límites de lo que acepta cada entrada | lista | sí | 3-4 pasos |
| $criterios_clave | Toda entrada pasa por el esquema central antes de usarse · El set de entradas sucias está versionado y probado | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de validación central para RYU-TUI: esquemas por tipo de entrada, fallo temprano con contexto y tests versionados con entradas sucias. | texto | no | "Sanitización de entrada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda entrada pasa por el esquema central antes de usarse
- [ ] El set de entradas sucias está versionado y probado

## Ejemplos de prompts

- "Quiero una estrategia de validación central para RYU-TUI: esquemas por tipo de entrada, fallo temprano con contexto y tests versionados con entradas sucias."
- "Aplica Sanitización de entrada (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Toda entrada pasa por el esquema central antes de usarse"
- "Revisa mi seguridad-powershell y dime qué pasos de Sanitización de entrada me faltan en este nivel"