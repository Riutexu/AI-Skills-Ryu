---
name: seguridad-powershell-sanitizacion-entrada-avanzado
description: Sanitización de entrada · nivel Avanzado · Seguridad y hardening. Validar y limpiar lo que entra a tus scripts: parámetros, archivos de config y datos externos. Objetivo del nivel: Validación de datos externos: configs, archivos y respuestas de APIs
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "sanitizacion-entrada"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Sanitización de entrada — Avanzado

## Qué hace este skill

Validar y limpiar lo que entra a tus scripts: parámetros, archivos de config y datos externos. En este nivel se entrega: **Validación de datos externos: configs, archivos y respuestas de APIs**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sanitización de entrada** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar la estructura de configs JSON
2. Sanitizar datos que vienen de archivos
3. Validar respuestas de APIs antes de usarlas
4. Rechazar datos malformados sin romper el flujo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Validación de datos externos: configs, archivos y respuestas de APIs | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Validar la estructura de configs JSON · Sanitizar datos que vienen de archivos · Validar respuestas de APIs antes de usarlas · Rechazar datos malformados sin romper el flujo | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún dato externo se usa sin validar · Los datos malformados se descartan con registro | lista | sí | calidad verificable |
| $prompt_guia | Mi suite lee configs y respuestas de APIs que a veces vienen malformadas: mostrame el patrón de validación antes de usar cualquier dato externo. | texto | no | "Sanitización de entrada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún dato externo se usa sin validar
- [ ] Los datos malformados se descartan con registro

## Ejemplos de prompts

- "Mi suite lee configs y respuestas de APIs que a veces vienen malformadas: mostrame el patrón de validación antes de usar cualquier dato externo."
- "Aplica Sanitización de entrada (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Ningún dato externo se usa sin validar"
- "Revisa mi seguridad-powershell y dime qué pasos de Sanitización de entrada me faltan en este nivel"