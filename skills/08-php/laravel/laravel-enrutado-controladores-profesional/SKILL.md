---
name: laravel-enrutado-controladores-profesional
description: Enrutado y controladores · nivel Profesional · Laravel 11: framework productivo. Rutas limpias, controladores delgados y REST coherente con el flujo de Laravel 11. Objetivo del nivel: diseño de API y contratos de ruta
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "enrutado-controladores"
  nivel: profesional
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Enrutado y controladores — Profesional

## Qué hace este skill

Rutas limpias, controladores delgados y REST coherente con el flujo de Laravel 11. En este nivel se entrega: **diseño de API y contratos de ruta**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Enrutado y controladores** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el contrato REST completo de un dominio (recursos, verbos, estados)
2. Implementar rate limiting y throttling por grupo de rutas
3. Documentar rutas con OpenAPI/Scribe automático
4. Aplicar politicas de autorización por ruta centralizadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | diseño de API y contratos de ruta | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Diseñar el contrato REST completo de un dominio (recursos, verbos, estados) · Implementar rate limiting y throttling por grupo de rutas · Documentar rutas con OpenAPI/Scribe automático · Aplicar politicas de autorización por ruta centralizadas | lista | sí | 3-4 pasos |
| $criterios_clave | El contrato REST está documentado y versionado · Cada ruta crítica tiene límites y política aplicados y probados | lista | sí | calidad verificable |
| $prompt_guia | Diseña el contrato REST de mi dominio de pedidos con rate limiting, OpenAPI y políticas de autorización | texto | no | "Enrutado y controladores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El contrato REST está documentado y versionado
- [ ] Cada ruta crítica tiene límites y política aplicados y probados

## Ejemplos de prompts

- "Diseña el contrato REST de mi dominio de pedidos con rate limiting, OpenAPI y políticas de autorización"
- "Aplica Enrutado y controladores (nivel profesional) a mi trabajo actual con Laravel 11: framework productivo: prioriza El contrato REST está documentado y versionado"
- "Revisa mi laravel y dime qué pasos de Enrutado y controladores me faltan en este nivel"