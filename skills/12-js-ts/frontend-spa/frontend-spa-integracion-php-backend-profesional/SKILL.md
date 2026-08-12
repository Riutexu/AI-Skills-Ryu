---
name: frontend-spa-integracion-php-backend-profesional
description: Integración con PHP backend · nivel Profesional · SPAs vanilla y Vite. Integrás la SPA con el backend PHP 8.3: contrato JSON, CORS, sesiones y errores. Objetivo del nivel: Definir el contrato de integración y versionado entre frontend y backend
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-php-backend"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Integración con PHP backend — Profesional

## Qué hace este skill

Integrás la SPA con el backend PHP 8.3: contrato JSON, CORS, sesiones y errores. En este nivel se entrega: **Definir el contrato de integración y versionado entre frontend y backend**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con PHP backend** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el contrato API completo con ejemplos
2. Implementar versionado de la API en el cliente
3. Manejar cambios de contrato con feature flags
4. Establecer convenciones de errores y códigos entre equipos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir el contrato de integración y versionado entre frontend y backend | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Documentar el contrato API completo con ejemplos · Implementar versionado de la API en el cliente · Manejar cambios de contrato con feature flags · Establecer convenciones de errores y códigos entre equipos | lista | sí | 3-4 pasos |
| $criterios_clave | El contrato se documenta y versiona · Los cambios de contrato no rompen el cliente en producción | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el contrato de integración frontend-backend: documentación del JSON por endpoint, versionado, códigos de error comunes y el flujo para cambiar un contrato sin romper al cliente. | texto | no | "Integración con PHP backend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El contrato se documenta y versiona
- [ ] Los cambios de contrato no rompen el cliente en producción

## Ejemplos de prompts

- "Diseñá el contrato de integración frontend-backend: documentación del JSON por endpoint, versionado, códigos de error comunes y el flujo para cambiar un contrato sin romper al cliente."
- "Aplica Integración con PHP backend (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza El contrato se documenta y versiona"
- "Revisa mi frontend-spa y dime qué pasos de Integración con PHP backend me faltan en este nivel"