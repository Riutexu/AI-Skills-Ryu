---
name: seguridad-powershell-checklist-seguridad-basico
description: Checklist de seguridad de scripts · nivel Básico · Seguridad y hardening. La lista de verificación final: qué revisar antes de dar un script por bueno en seguridad. Objetivo del nivel: Revisar un script contra una checklist básica de seguridad
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "checklist-seguridad"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Checklist de seguridad de scripts — Básico

## Qué hace este skill

La lista de verificación final: qué revisar antes de dar un script por bueno en seguridad. En este nivel se entrega: **Revisar un script contra una checklist básica de seguridad**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Checklist de seguridad de scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Revisar que no haya secretos ni rutas hardcodeadas
2. Verificar que no use Invoke-Expression
3. Chequear la validación de parámetros
4. Revisar el manejo de errores y privilegios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Revisar un script contra una checklist básica de seguridad | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Revisar que no haya secretos ni rutas hardcodeadas · Verificar que no use Invoke-Expression · Chequear la validación de parámetros · Revisar el manejo de errores y privilegios | lista | sí | 3-4 pasos |
| $criterios_clave | Aplicás la checklist básica a cualquier script · Los hallazgos se documentan con severidad | lista | sí | calidad verificable |
| $prompt_guia | Quiero una checklist básica de seguridad para revisar mis scripts antes de compartirlos: armámela con los ítems más importantes y su severidad. | texto | no | "Checklist de seguridad de scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Aplicás la checklist básica a cualquier script
- [ ] Los hallazgos se documentan con severidad

## Ejemplos de prompts

- "Quiero una checklist básica de seguridad para revisar mis scripts antes de compartirlos: armámela con los ítems más importantes y su severidad."
- "Aplica Checklist de seguridad de scripts (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Aplicás la checklist básica a cualquier script"
- "Revisa mi seguridad-powershell y dime qué pasos de Checklist de seguridad de scripts me faltan en este nivel"