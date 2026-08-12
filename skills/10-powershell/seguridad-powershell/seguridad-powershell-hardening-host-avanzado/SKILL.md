---
name: seguridad-powershell-hardening-host-avanzado
description: Hardening de host · nivel Avanzado · Seguridad y hardening. Endurecer el host de PowerShell: restricciones del lenguaje, AMSI, Constrained Language y surfaces de ataque. Objetivo del nivel: Constrained Language Mode y AppLocker/WDAC para hosts gestionados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "hardening-host"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Hardening de host — Avanzado

## Qué hace este skill

Endurecer el host de PowerShell: restricciones del lenguaje, AMSI, Constrained Language y surfaces de ataque. En este nivel se entrega: **Constrained Language Mode y AppLocker/WDAC para hosts gestionados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Hardening de host** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar Constrained Language Mode
2. Probar qué se rompe en tu suite con CLM
3. Diseñar reglas de WDAC/AppLocker para pwsh
4. Verificar el modo con $ExecutionContext.SessionState.LanguageMode

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Constrained Language Mode y AppLocker/WDAC para hosts gestionados | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Activar Constrained Language Mode · Probar qué se rompe en tu suite con CLM · Diseñar reglas de WDAC/AppLocker para pwsh · Verificar el modo con $ExecutionContext.SessionState.LanguageMode | lista | sí | 3-4 pasos |
| $criterios_clave | El modo restringido está activo y verificado · Documentás qué de tu suite rompe el CLM | lista | sí | calidad verificable |
| $prompt_guia | Quiero activar Constrained Language Mode en mi equipo: mostrame cómo, qué de RYU-TUI se rompe, y cómo verificarlo sin dejar el equipo inservible. | texto | no | "Hardening de host" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El modo restringido está activo y verificado
- [ ] Documentás qué de tu suite rompe el CLM

## Ejemplos de prompts

- "Quiero activar Constrained Language Mode en mi equipo: mostrame cómo, qué de RYU-TUI se rompe, y cómo verificarlo sin dejar el equipo inservible."
- "Aplica Hardening de host (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza El modo restringido está activo y verificado"
- "Revisa mi seguridad-powershell y dime qué pasos de Hardening de host me faltan en este nivel"