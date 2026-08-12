---
name: seguridad-powershell-sanitizacion-entrada-basico
description: Sanitización de entrada · nivel Básico · Seguridad y hardening. Validar y limpiar lo que entra a tus scripts: parámetros, archivos de config y datos externos. Objetivo del nivel: Validar parámetros con los mecanismos nativos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "sanitizacion-entrada"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Sanitización de entrada — Básico

## Qué hace este skill

Validar y limpiar lo que entra a tus scripts: parámetros, archivos de config y datos externos. En este nivel se entrega: **Validar parámetros con los mecanismos nativos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sanitización de entrada** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar tipos con parámetros tipados
2. Usar ValidateSet y ValidatePattern
3. Validar rangos y longitudes
4. Rechazar entradas inválidas con mensajes claros

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Validar parámetros con los mecanismos nativos | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Validar tipos con parámetros tipados · Usar ValidateSet y ValidatePattern · Validar rangos y longitudes · Rechazar entradas inválidas con mensajes claros | lista | sí | 3-4 pasos |
| $criterios_clave | Las entradas inválidas se rechazan en el parámetro · Los mensajes de error dicen qué se esperaba | lista | sí | calidad verificable |
| $prompt_guia | Quiero que mis funciones validen la entrada antes de hacer nada: mostrame los atributos Validate* con ejemplos y mensajes de rechazo claros. | texto | no | "Sanitización de entrada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las entradas inválidas se rechazan en el parámetro
- [ ] Los mensajes de error dicen qué se esperaba

## Ejemplos de prompts

- "Quiero que mis funciones validen la entrada antes de hacer nada: mostrame los atributos Validate* con ejemplos y mensajes de rechazo claros."
- "Aplica Sanitización de entrada (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Las entradas inválidas se rechazan en el parámetro"
- "Revisa mi seguridad-powershell y dime qué pasos de Sanitización de entrada me faltan en este nivel"