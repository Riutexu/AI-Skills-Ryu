---
name: frontend-spa-integracion-php-backend-avanzado
description: Integración con PHP backend · nivel Avanzado · SPAs vanilla y Vite. Integrás la SPA con el backend PHP 8.3: contrato JSON, CORS, sesiones y errores. Objetivo del nivel: Integrar autenticación por sesión y manejo de errores
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-php-backend"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Integración con PHP backend — Avanzado

## Qué hace este skill

Integrás la SPA con el backend PHP 8.3: contrato JSON, CORS, sesiones y errores. En este nivel se entrega: **Integrar autenticación por sesión y manejo de errores**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con PHP backend** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar sesión PHP con cookies y credentials include
2. Sincronizar el estado de auth con el servidor
3. Normalizar errores HTTP y de validación del backend
4. Manejar la expiración de sesión con redirect a login

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integrar autenticación por sesión y manejo de errores | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Manejar sesión PHP con cookies y credentials include · Sincronizar el estado de auth con el servidor · Normalizar errores HTTP y de validación del backend · Manejar la expiración de sesión con redirect a login | lista | sí | 3-4 pasos |
| $criterios_clave | La sesión se mantiene con cookies correctas · La expiración de sesión redirige al login | lista | sí | calidad verificable |
| $prompt_guia | Integrá la autenticación con sesión PHP: cookies con credentials, estado de auth sincronizado y redirect al login cuando la sesión expire. | texto | no | "Integración con PHP backend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La sesión se mantiene con cookies correctas
- [ ] La expiración de sesión redirige al login

## Ejemplos de prompts

- "Integrá la autenticación con sesión PHP: cookies con credentials, estado de auth sincronizado y redirect al login cuando la sesión expire."
- "Aplica Integración con PHP backend (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza La sesión se mantiene con cookies correctas"
- "Revisa mi frontend-spa y dime qué pasos de Integración con PHP backend me faltan en este nivel"