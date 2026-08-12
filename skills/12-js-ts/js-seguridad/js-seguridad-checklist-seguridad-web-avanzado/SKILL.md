---
name: js-seguridad-checklist-seguridad-web-avanzado
description: Checklist de seguridad web · nivel Avanzado · Seguridad web JS. Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. Objetivo del nivel: Completar el checklist avanzado con herramientas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "checklist-seguridad-web"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Checklist de seguridad web — Avanzado

## Qué hace este skill

Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. En este nivel se entrega: **Completar el checklist avanzado con herramientas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Checklist de seguridad web** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr escaneos con herramientas de análisis
2. Verificar la configuración del server y la CSP
3. Probar los flujos de auth con casos adversariales
4. Documentar el nivel de riesgo resultante

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Completar el checklist avanzado con herramientas | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Correr escaneos con herramientas de análisis · Verificar la configuración del server y la CSP · Probar los flujos de auth con casos adversariales · Documentar el nivel de riesgo resultante | lista | sí | 3-4 pasos |
| $criterios_clave | Los escaneos automatizados corren sin falsos positivos críticos · Los flujos de auth pasan los casos adversariales | lista | sí | calidad verificable |
| $prompt_guia | Profundizá el chequeo: escaneos con herramientas, validación de la CSP y headers del server, y casos adversariales en login y recuperación de cuenta. | texto | no | "Checklist de seguridad web" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los escaneos automatizados corren sin falsos positivos críticos
- [ ] Los flujos de auth pasan los casos adversariales

## Ejemplos de prompts

- "Profundizá el chequeo: escaneos con herramientas, validación de la CSP y headers del server, y casos adversariales en login y recuperación de cuenta."
- "Aplica Checklist de seguridad web (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Los escaneos automatizados corren sin falsos positivos críticos"
- "Revisa mi js-seguridad y dime qué pasos de Checklist de seguridad web me faltan en este nivel"