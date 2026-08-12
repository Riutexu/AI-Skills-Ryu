---
name: php8-core-manejo-errores-avanzado
description: Manejo de errores y excepciones · nivel Avanzado · PHP 8.3: fundamentos profesionales. Errores que se comportan: excepciones tipadas, logging estructurado y respuestas coherentes. Objetivo del nivel: excepciones de dominio y log estructurado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "manejo-errores"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Manejo de errores y excepciones — Avanzado

## Qué hace este skill

Errores que se comportan: excepciones tipadas, logging estructurado y respuestas coherentes. En este nivel se entrega: **excepciones de dominio y log estructurado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores y excepciones** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear excepciones propias por dominio (ReglaDeNegocio, NoEncontrado)
2. Loggear con contexto estructurado (monolog/monolog): nivel, contexto, usuario
3. Capturar el último error (set_error_handler/set_exception_handler) con estrategia
4. Distinguir errores 4xx (dominio) de 5xx (infraestructura) en la API

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | excepciones de dominio y log estructurado | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Crear excepciones propias por dominio (ReglaDeNegocio, NoEncontrado) · Loggear con contexto estructurado (monolog/monolog): nivel, contexto, usuario · Capturar el último error (set_error_handler/set_exception_handler) con estrategia · Distinguir errores 4xx (dominio) de 5xx (infraestructura) en la API | lista | sí | 3-4 pasos |
| $criterios_clave | Cada error de dominio llega con código HTTP y mensaje coherentes · Los logs de producción tienen contexto suficiente sin datos sensibles | lista | sí | calidad verificable |
| $prompt_guia | Implementa excepciones de dominio con mapeo a códigos HTTP y monolog con contexto estructurado | texto | no | "Manejo de errores y excepciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada error de dominio llega con código HTTP y mensaje coherentes
- [ ] Los logs de producción tienen contexto suficiente sin datos sensibles

## Ejemplos de prompts

- "Implementa excepciones de dominio con mapeo a códigos HTTP y monolog con contexto estructurado"
- "Aplica Manejo de errores y excepciones (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Cada error de dominio llega con código HTTP y mensaje coherentes"
- "Revisa mi php8-core y dime qué pasos de Manejo de errores y excepciones me faltan en este nivel"