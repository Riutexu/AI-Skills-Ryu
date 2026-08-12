---
name: seguridad-powershell-code-injection-basico
description: Inyección y code injection · nivel Básico · Seguridad y hardening. Defenderse de inyección: Invoke-Expression, evaluación de strings y entradas que se vuelven código. Objetivo del nivel: Entender por qué Invoke-Expression es peligroso
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "code-injection"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Inyección y code injection — Básico

## Qué hace este skill

Defenderse de inyección: Invoke-Expression, evaluación de strings y entradas que se vuelven código. En este nivel se entrega: **Entender por qué Invoke-Expression es peligroso**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección y code injection** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Demostrar un caso de inyección con Invoke-Expression
2. Identificar patrones de código que evalúan strings
3. Reemplazar Invoke-Expression por alternativas seguras
4. Entender el concepto de datos vs código

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender por qué Invoke-Expression es peligroso | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Demostrar un caso de inyección con Invoke-Expression · Identificar patrones de código que evalúan strings · Reemplazar Invoke-Expression por alternativas seguras · Entender el concepto de datos vs código | lista | sí | 3-4 pasos |
| $criterios_clave | No usás Invoke-Expression en la suite · Explicás con un ejemplo qué puede pasar | lista | sí | calidad verificable |
| $prompt_guia | Me dijeron que Invoke-Expression es peligroso: mostrame un caso real de inyección, qué alternativas seguras hay y cómo detectar el patrón en mi código. | texto | no | "Inyección y code injection" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No usás Invoke-Expression en la suite
- [ ] Explicás con un ejemplo qué puede pasar

## Ejemplos de prompts

- "Me dijeron que Invoke-Expression es peligroso: mostrame un caso real de inyección, qué alternativas seguras hay y cómo detectar el patrón en mi código."
- "Aplica Inyección y code injection (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza No usás Invoke-Expression en la suite"
- "Revisa mi seguridad-powershell y dime qué pasos de Inyección y code injection me faltan en este nivel"