---
name: seguridad-powershell-secretos-en-disco-basico
description: Evitar secretos en disco · nivel Básico · Seguridad y hardening. Que ningún secreto quede en archivos: logs, dump, configs y el arte de no escribir secretos nunca. Objetivo del nivel: Detectar y evitar secretos en archivos y logs propios
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "secretos-en-disco"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Evitar secretos en disco — Básico

## Qué hace este skill

Que ningún secreto quede en archivos: logs, dump, configs y el arte de no escribir secretos nunca. En este nivel se entrega: **Detectar y evitar secretos en archivos y logs propios**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Evitar secretos en disco** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar dónde pueden filtrarse secretos
2. Redactar secretos en los logs de la suite
3. Verificar que los configs no tengan contraseñas
4. Revisar el historial de git por secretos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Detectar y evitar secretos en archivos y logs propios | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Identificar dónde pueden filtrarse secretos · Redactar secretos en los logs de la suite · Verificar que los configs no tengan contraseñas · Revisar el historial de git por secretos | lista | sí | 3-4 pasos |
| $criterios_clave | Tus logs y configs no contienen secretos · Sabés escanear un repo por secretos | lista | sí | calidad verificable |
| $prompt_guia | Quiero asegurarme de que mi repo de RYU-TUI no tenga secretos: mostrame cómo escanear el historial de git y qué patrones buscar en configs y logs. | texto | no | "Evitar secretos en disco" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus logs y configs no contienen secretos
- [ ] Sabés escanear un repo por secretos

## Ejemplos de prompts

- "Quiero asegurarme de que mi repo de RYU-TUI no tenga secretos: mostrame cómo escanear el historial de git y qué patrones buscar en configs y logs."
- "Aplica Evitar secretos en disco (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Tus logs y configs no contienen secretos"
- "Revisa mi seguridad-powershell y dime qué pasos de Evitar secretos en disco me faltan en este nivel"