---
name: js-seguridad-secrets-cliente-basico
description: Secrets del cliente · nivel Básico · Seguridad web JS. Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. Objetivo del nivel: Detectar y eliminar secretos del bundle
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "secrets-cliente"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Secrets del cliente — Básico

## Qué hace este skill

Mantenés los secretos fuera del frontend: nada sensible debe viajar en el bundle. En este nivel se entrega: **Detectar y eliminar secretos del bundle**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Secrets del cliente** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Buscar secretos en el código del frontend
2. Mover la lógica que usa secretos al backend
3. Usar variables de entorno solo para datos públicos
4. Verificar que los .env no se expongan

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Detectar y eliminar secretos del bundle | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Buscar secretos en el código del frontend · Mover la lógica que usa secretos al backend · Usar variables de entorno solo para datos públicos · Verificar que los .env no se expongan | lista | sí | 3-4 pasos |
| $criterios_clave | No hay secretos en el bundle final · Los endpoints usan el backend como intermediario | lista | sí | calidad verificable |
| $prompt_guia | La SPA tenía la API key de pagos en el código: auditá el bundle, pasá esa lógica al backend PHP como intermediario y verificá que no quede ningún secreto. | texto | no | "Secrets del cliente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay secretos en el bundle final
- [ ] Los endpoints usan el backend como intermediario

## Ejemplos de prompts

- "La SPA tenía la API key de pagos en el código: auditá el bundle, pasá esa lógica al backend PHP como intermediario y verificá que no quede ningún secreto."
- "Aplica Secrets del cliente (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza No hay secretos en el bundle final"
- "Revisa mi js-seguridad y dime qué pasos de Secrets del cliente me faltan en este nivel"