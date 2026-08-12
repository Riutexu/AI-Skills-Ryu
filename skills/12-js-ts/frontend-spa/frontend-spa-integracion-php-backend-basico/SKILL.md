---
name: frontend-spa-integracion-php-backend-basico
description: Integración con PHP backend · nivel Básico · SPAs vanilla y Vite. Integrás la SPA con el backend PHP 8.3: contrato JSON, CORS, sesiones y errores. Objetivo del nivel: Conectar la SPA con endpoints PHP y manejar el contrato
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-php-backend"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Integración con PHP backend — Básico

## Qué hace este skill

Integrás la SPA con el backend PHP 8.3: contrato JSON, CORS, sesiones y errores. En este nivel se entrega: **Conectar la SPA con endpoints PHP y manejar el contrato**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con PHP backend** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato JSON de un endpoint
2. Consumir el endpoint desde fetch con credenciales
3. Manejar CORS desde el dev server de Vite
4. Mostrar los datos en la vista

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Conectar la SPA con endpoints PHP y manejar el contrato | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir el contrato JSON de un endpoint · Consumir el endpoint desde fetch con credenciales · Manejar CORS desde el dev server de Vite · Mostrar los datos en la vista | lista | sí | 3-4 pasos |
| $criterios_clave | La SPA consume el endpoint sin errores de CORS · El contrato JSON se respeta en ambos lados | lista | sí | calidad verificable |
| $prompt_guia | Conectá la SPA al endpoint de pedidos del backend PHP: definí el contrato JSON, configurá el proxy de Vite y renderizá la lista. | texto | no | "Integración con PHP backend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La SPA consume el endpoint sin errores de CORS
- [ ] El contrato JSON se respeta en ambos lados

## Ejemplos de prompts

- "Conectá la SPA al endpoint de pedidos del backend PHP: definí el contrato JSON, configurá el proxy de Vite y renderizá la lista."
- "Aplica Integración con PHP backend (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza La SPA consume el endpoint sin errores de CORS"
- "Revisa mi frontend-spa y dime qué pasos de Integración con PHP backend me faltan en este nivel"