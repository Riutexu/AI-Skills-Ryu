---
name: js-seguridad-dependencias-auditoria-basico
description: Dependencias y auditoría · nivel Básico · Seguridad web JS. Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. Objetivo del nivel: Auditar y remediar vulnerabilidades de dependencias
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "dependencias-auditoria"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Dependencias y auditoría — Básico

## Qué hace este skill

Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. En este nivel se entrega: **Auditar y remediar vulnerabilidades de dependencias**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias y auditoría** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr npm audit y leer el reporte
2. Actualizar dependencias vulnerables
3. Verificar que la actualización no rompa nada
4. Documentar las vulnerabilidades residuales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Auditar y remediar vulnerabilidades de dependencias | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Correr npm audit y leer el reporte · Actualizar dependencias vulnerables · Verificar que la actualización no rompa nada · Documentar las vulnerabilidades residuales | lista | sí | 3-4 pasos |
| $criterios_clave | Las vulnerabilidades críticas se remedian · Las residuales se documentan con su riesgo | lista | sí | calidad verificable |
| $prompt_guia | El npm audit reporta vulnerabilidades: corré la auditoría, remediá lo crítico, verificá los tests y documentá lo que queda. | texto | no | "Dependencias y auditoría" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las vulnerabilidades críticas se remedian
- [ ] Las residuales se documentan con su riesgo

## Ejemplos de prompts

- "El npm audit reporta vulnerabilidades: corré la auditoría, remediá lo crítico, verificá los tests y documentá lo que queda."
- "Aplica Dependencias y auditoría (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza Las vulnerabilidades críticas se remedian"
- "Revisa mi js-seguridad y dime qué pasos de Dependencias y auditoría me faltan en este nivel"