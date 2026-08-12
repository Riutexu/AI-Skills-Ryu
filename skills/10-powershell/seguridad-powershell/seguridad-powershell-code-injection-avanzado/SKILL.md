---
name: seguridad-powershell-code-injection-avanzado
description: Inyección y code injection · nivel Avanzado · Seguridad y hardening. Defenderse de inyección: Invoke-Expression, evaluación de strings y entradas que se vuelven código. Objetivo del nivel: Sanitizar la entrada que se interpola en comandos y rutas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "code-injection"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Inyección y code injection — Avanzado

## Qué hace este skill

Defenderse de inyección: Invoke-Expression, evaluación de strings y entradas que se vuelven código. En este nivel se entrega: **Sanitizar la entrada que se interpola en comandos y rutas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección y code injection** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Evitar la interpolación de entrada en comandos
2. Usar argumentos tipados en vez de strings concatenados
3. Blindar rutas contra traversal y caracteres raros
4. Construir llamadas a cmdlets sin strings

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Sanitizar la entrada que se interpola en comandos y rutas | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Evitar la interpolación de entrada en comandos · Usar argumentos tipados en vez de strings concatenados · Blindar rutas contra traversal y caracteres raros · Construir llamadas a cmdlets sin strings | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna entrada del usuario termina como parte de un comando · Las rutas construidas con entrada se validan antes | lista | sí | calidad verificable |
| $prompt_guia | Mi script arma comandos con entrada del usuario y me preocupa la inyección: mostrame cómo construir llamadas sin concatenar strings y cómo validar rutas. | texto | no | "Inyección y code injection" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna entrada del usuario termina como parte de un comando
- [ ] Las rutas construidas con entrada se validan antes

## Ejemplos de prompts

- "Mi script arma comandos con entrada del usuario y me preocupa la inyección: mostrame cómo construir llamadas sin concatenar strings y cómo validar rutas."
- "Aplica Inyección y code injection (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Ninguna entrada del usuario termina como parte de un comando"
- "Revisa mi seguridad-powershell y dime qué pasos de Inyección y code injection me faltan en este nivel"