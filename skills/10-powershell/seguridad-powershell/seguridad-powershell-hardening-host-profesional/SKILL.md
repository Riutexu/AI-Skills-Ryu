---
name: seguridad-powershell-hardening-host-profesional
description: Hardening de host · nivel Profesional · Seguridad y hardening. Endurecer el host de PowerShell: restricciones del lenguaje, AMSI, Constrained Language y surfaces de ataque. Objetivo del nivel: Baseline de hardening para la suite: configuración segura por defecto y guía de despliegue
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "hardening-host"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Hardening de host — Profesional

## Qué hace este skill

Endurecer el host de PowerShell: restricciones del lenguaje, AMSI, Constrained Language y surfaces de ataque. En este nivel se entrega: **Baseline de hardening para la suite: configuración segura por defecto y guía de despliegue**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Hardening de host** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la baseline de seguridad de los hosts de la suite
2. Automatizar la aplicación de la baseline
3. Verificar el estado de hardening con un script de audit
4. Documentar excepciones y su justificación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Baseline de hardening para la suite: configuración segura por defecto y guía de despliegue | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Definir la baseline de seguridad de los hosts de la suite · Automatizar la aplicación de la baseline · Verificar el estado de hardening con un script de audit · Documentar excepciones y su justificación | lista | sí | 3-4 pasos |
| $criterios_clave | La baseline se aplica con un script y se verifica sola · Las excepciones están documentadas con justificación | lista | sí | calidad verificable |
| $prompt_guia | Quiero una baseline de hardening para los equipos donde corre RYU-TUI: definí la config, automatizá la aplicación con un script y armá el verificador de estado. | texto | no | "Hardening de host" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La baseline se aplica con un script y se verifica sola
- [ ] Las excepciones están documentadas con justificación

## Ejemplos de prompts

- "Quiero una baseline de hardening para los equipos donde corre RYU-TUI: definí la config, automatizá la aplicación con un script y armá el verificador de estado."
- "Aplica Hardening de host (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza La baseline se aplica con un script y se verifica sola"
- "Revisa mi seguridad-powershell y dime qué pasos de Hardening de host me faltan en este nivel"