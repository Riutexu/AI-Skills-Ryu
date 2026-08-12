---
name: seguridad-powershell-code-injection-profesional
description: Inyección y code injection · nivel Profesional · Seguridad y hardening. Defenderse de inyección: Invoke-Expression, evaluación de strings y entradas que se vuelven código. Objetivo del nivel: Defensa en profundidad en la suite: parsing de entrada, whitelist de valores y fuzzing de casos raros
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "code-injection"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Inyección y code injection — Profesional

## Qué hace este skill

Defenderse de inyección: Invoke-Expression, evaluación de strings y entradas que se vuelven código. En este nivel se entrega: **Defensa en profundidad en la suite: parsing de entrada, whitelist de valores y fuzzing de casos raros**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección y code injection** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un parser de entrada de la suite con validación estricta
2. Aplicar whitelists de caracteres y formatos
3. Probar con entradas hostiles (quotes, comillas, emoji)
4. Auditar el código buscando sinks peligrosos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Defensa en profundidad en la suite: parsing de entrada, whitelist de valores y fuzzing de casos raros | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Crear un parser de entrada de la suite con validación estricta · Aplicar whitelists de caracteres y formatos · Probar con entradas hostiles (quotes, comillas, emoji) · Auditar el código buscando sinks peligrosos | lista | sí | 3-4 pasos |
| $criterios_clave | Las entradas hostiles no producen ejecución ni errores raros · El audit no encuentra sinks de inyección sin proteger | lista | sí | calidad verificable |
| $prompt_guia | Quiero blindar la entrada de RYU-TUI contra inyección: parser con validación estricta, whitelists y una batería de pruebas con entradas hostiles. | texto | no | "Inyección y code injection" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las entradas hostiles no producen ejecución ni errores raros
- [ ] El audit no encuentra sinks de inyección sin proteger

## Ejemplos de prompts

- "Quiero blindar la entrada de RYU-TUI contra inyección: parser con validación estricta, whitelists y una batería de pruebas con entradas hostiles."
- "Aplica Inyección y code injection (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Las entradas hostiles no producen ejecución ni errores raros"
- "Revisa mi seguridad-powershell y dime qué pasos de Inyección y code injection me faltan en este nivel"