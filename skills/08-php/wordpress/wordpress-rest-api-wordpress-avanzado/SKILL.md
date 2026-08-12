---
name: wordpress-rest-api-wordpress-avanzado
description: REST API y headless · nivel Avanzado · WordPress: temas y plugins. WordPress como API: endpoints propios, autenticación, y sitios headless sin fricción. Objetivo del nivel: endpoints propios y rutas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rest-api-wordpress"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# REST API y headless — Avanzado

## Qué hace este skill

WordPress como API: endpoints propios, autenticación, y sitios headless sin fricción. En este nivel se entrega: **endpoints propios y rutas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **REST API y headless** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Registrar rutas REST propias con register_rest_route
2. Validar permisos con permission_callback
3. Manejar errores y paginación en la respuesta
4. Usar ACF en la API (acf fields expuestos)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | endpoints propios y rutas | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Registrar rutas REST propias con register_rest_route · Validar permisos con permission_callback · Manejar errores y paginación en la respuesta · Usar ACF en la API (acf fields expuestos) | lista | sí | 3-4 pasos |
| $criterios_clave | Los endpoints propios validan permisos y parámetros · La API expone ACF sin datos innecesarios | lista | sí | calidad verificable |
| $prompt_guia | Crea endpoints REST propios para mi CPT con permission_callback y campos ACF expuestos | texto | no | "REST API y headless" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los endpoints propios validan permisos y parámetros
- [ ] La API expone ACF sin datos innecesarios

## Ejemplos de prompts

- "Crea endpoints REST propios para mi CPT con permission_callback y campos ACF expuestos"
- "Aplica REST API y headless (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza Los endpoints propios validan permisos y parámetros"
- "Revisa mi wordpress y dime qué pasos de REST API y headless me faltan en este nivel"