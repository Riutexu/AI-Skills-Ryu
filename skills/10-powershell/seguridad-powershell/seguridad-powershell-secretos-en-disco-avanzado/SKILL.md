---
name: seguridad-powershell-secretos-en-disco-avanzado
description: Evitar secretos en disco · nivel Avanzado · Seguridad y hardening. Que ningún secreto quede en archivos: logs, dump, configs y el arte de no escribir secretos nunca. Objetivo del nivel: Configs con secretos protegidos: referencias a vault, variables de entorno y archivos fuera del repo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "secretos-en-disco"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Evitar secretos en disco — Avanzado

## Qué hace este skill

Que ningún secreto quede en archivos: logs, dump, configs y el arte de no escribir secretos nunca. En este nivel se entrega: **Configs con secretos protegidos: referencias a vault, variables de entorno y archivos fuera del repo**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Evitar secretos en disco** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mover secretos de configs a un vault o variables
2. Usar archivos .env fuera del repo con gitignore
3. Cargar secretos en memoria y borrarlos al terminar
4. Diseñar configs con placeholders

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Configs con secretos protegidos: referencias a vault, variables de entorno y archivos fuera del repo | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Mover secretos de configs a un vault o variables · Usar archivos .env fuera del repo con gitignore · Cargar secretos en memoria y borrarlos al terminar · Diseñar configs con placeholders | lista | sí | 3-4 pasos |
| $criterios_clave | Los repos no contienen secretos por diseño · Los secretos se cargan en runtime y no persisten | lista | sí | calidad verificable |
| $prompt_guia | Mi config de RYU-TUI tiene una API key: sacámela del repo con variables de entorno, gitignore y carga en memoria que se limpie al salir. | texto | no | "Evitar secretos en disco" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los repos no contienen secretos por diseño
- [ ] Los secretos se cargan en runtime y no persisten

## Ejemplos de prompts

- "Mi config de RYU-TUI tiene una API key: sacámela del repo con variables de entorno, gitignore y carga en memoria que se limpie al salir."
- "Aplica Evitar secretos en disco (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Los repos no contienen secretos por diseño"
- "Revisa mi seguridad-powershell y dime qué pasos de Evitar secretos en disco me faltan en este nivel"