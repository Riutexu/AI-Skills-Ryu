---
name: seguridad-powershell-hardening-host-basico
description: Hardening de host · nivel Básico · Seguridad y hardening. Endurecer el host de PowerShell: restricciones del lenguaje, AMSI, Constrained Language y surfaces de ataque. Objetivo del nivel: Entender las superficies de ataque de PowerShell y sus defensas básicas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "hardening-host"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Hardening de host — Básico

## Qué hace este skill

Endurecer el host de PowerShell: restricciones del lenguaje, AMSI, Constrained Language y surfaces de ataque. En este nivel se entrega: **Entender las superficies de ataque de PowerShell y sus defensas básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Hardening de host** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar vectores de abuso comunes (injección, download cradle)
2. Verificar que AMSI esté activo
3. Entender cómo funciona la defensa en profundidad
4. Revisar la config de seguridad de tu host

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender las superficies de ataque de PowerShell y sus defensas básicas | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Identificar vectores de abuso comunes (injección, download cradle) · Verificar que AMSI esté activo · Entender cómo funciona la defensa en profundidad · Revisar la config de seguridad de tu host | lista | sí | 3-4 pasos |
| $criterios_clave | Sabés qué vectores atacan a PowerShell · Verificás el estado de AMSI y las defensas activas | lista | sí | calidad verificable |
| $prompt_guia | Quiero entender cómo se ataca PowerShell y cómo defenderse: explicame download cradles, AMSI y qué defensas básicas debería tener activas. | texto | no | "Hardening de host" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Sabés qué vectores atacan a PowerShell
- [ ] Verificás el estado de AMSI y las defensas activas

## Ejemplos de prompts

- "Quiero entender cómo se ataca PowerShell y cómo defenderse: explicame download cradles, AMSI y qué defensas básicas debería tener activas."
- "Aplica Hardening de host (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Sabés qué vectores atacan a PowerShell"
- "Revisa mi seguridad-powershell y dime qué pasos de Hardening de host me faltan en este nivel"