---
name: js-seguridad-csp-basico
description: CSP · nivel Básico · Seguridad web JS. Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. Objetivo del nivel: Implementar una CSP básica sin romper la app
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "csp"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# CSP — Básico

## Qué hace este skill

Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. En este nivel se entrega: **Implementar una CSP básica sin romper la app**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSP** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir las directivas base de la CSP
2. Configurar la CSP con el backend PHP
3. Probar en Reporting-Only primero
4. Solucionar los bloqueos que surgen

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Implementar una CSP básica sin romper la app | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir las directivas base de la CSP · Configurar la CSP con el backend PHP · Probar en Reporting-Only primero · Solucionar los bloqueos que surgen | lista | sí | 3-4 pasos |
| $criterios_clave | La CSP se prueba en modo reporte antes de aplicar · Las directivas cubren scripts, styles e imágenes | lista | sí | calidad verificable |
| $prompt_guia | Agregá CSP a la SPA con el header desde PHP: configúrala en Reporting-Only, revisá los reportes y ajustá las directivas sin romper la app. | texto | no | "CSP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La CSP se prueba en modo reporte antes de aplicar
- [ ] Las directivas cubren scripts, styles e imágenes

## Ejemplos de prompts

- "Agregá CSP a la SPA con el header desde PHP: configúrala en Reporting-Only, revisá los reportes y ajustá las directivas sin romper la app."
- "Aplica CSP (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza La CSP se prueba en modo reporte antes de aplicar"
- "Revisa mi js-seguridad y dime qué pasos de CSP me faltan en este nivel"