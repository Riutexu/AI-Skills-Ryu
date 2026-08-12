---
name: js-seguridad-dependencias-auditoria-profesional
description: Dependencias y auditoría · nivel Profesional · Seguridad web JS. Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. Objetivo del nivel: Diseñar la política de seguridad de dependencias
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "dependencias-auditoria"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Dependencias y auditoría — Profesional

## Qué hace este skill

Auditás y mantenés dependencias sin vulnerabilidades conocidas ni supply chain riesgosa. En este nivel se entrega: **Diseñar la política de seguridad de dependencias**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias y auditoría** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de dependencias y su revisión
2. Automatizar la auditoría en CI y su gate
3. Crear el proceso de reporte de vulnerabilidades
4. Documentar el inventario de dependencias críticas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la política de seguridad de dependencias | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir la política de dependencias y su revisión · Automatizar la auditoría en CI y su gate · Crear el proceso de reporte de vulnerabilidades · Documentar el inventario de dependencias críticas | lista | sí | 3-4 pasos |
| $criterios_clave | La auditoría bloquea vulnerabilidades críticas en CI · El inventario de dependencias críticas está al día | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la política de dependencias: criterios de selección, gate de auditoría en CI, proceso de respuesta a vulnerabilidades y el inventario de críticas. | texto | no | "Dependencias y auditoría" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La auditoría bloquea vulnerabilidades críticas en CI
- [ ] El inventario de dependencias críticas está al día

## Ejemplos de prompts

- "Diseñá la política de dependencias: criterios de selección, gate de auditoría en CI, proceso de respuesta a vulnerabilidades y el inventario de críticas."
- "Aplica Dependencias y auditoría (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La auditoría bloquea vulnerabilidades críticas en CI"
- "Revisa mi js-seguridad y dime qué pasos de Dependencias y auditoría me faltan en este nivel"