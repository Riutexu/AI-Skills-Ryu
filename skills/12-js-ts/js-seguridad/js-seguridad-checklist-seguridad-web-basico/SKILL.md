---
name: js-seguridad-checklist-seguridad-web-basico
description: Checklist de seguridad web · nivel Básico · Seguridad web JS. Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. Objetivo del nivel: Aplicar el checklist de seguridad básico al proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "checklist-seguridad-web"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Checklist de seguridad web — Básico

## Qué hace este skill

Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. En este nivel se entrega: **Aplicar el checklist de seguridad básico al proyecto**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Checklist de seguridad web** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Revisar autenticación y manejo de sesiones
2. Verificar XSS, CSRF y data expuesta
3. Revisar dependencias y headers básicos
4. Registrar los hallazgos en un reporte

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar el checklist de seguridad básico al proyecto | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Revisar autenticación y manejo de sesiones · Verificar XSS, CSRF y data expuesta · Revisar dependencias y headers básicos · Registrar los hallazgos en un reporte | lista | sí | 3-4 pasos |
| $criterios_clave | El checklist básico se completa y registra · Los hallazgos críticos se remedian | lista | sí | calidad verificable |
| $prompt_guia | Pasale el checklist de seguridad básico a la SPA: sesiones, XSS, CSRF, dependencias y headers; registrá los hallazgos y remediá los críticos. | texto | no | "Checklist de seguridad web" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El checklist básico se completa y registra
- [ ] Los hallazgos críticos se remedian

## Ejemplos de prompts

- "Pasale el checklist de seguridad básico a la SPA: sesiones, XSS, CSRF, dependencias y headers; registrá los hallazgos y remediá los críticos."
- "Aplica Checklist de seguridad web (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza El checklist básico se completa y registra"
- "Revisa mi js-seguridad y dime qué pasos de Checklist de seguridad web me faltan en este nivel"