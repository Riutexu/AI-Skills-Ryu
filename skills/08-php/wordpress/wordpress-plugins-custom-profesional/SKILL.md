---
name: wordpress-plugins-custom-profesional
description: Plugins y hooks · nivel Profesional · WordPress: temas y plugins. Lógica respetando las convenciones: hooks actions/filters, WP-CLI-safe, y separación plugin/tema. Objetivo del nivel: plugins de producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "plugins-custom"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Plugins y hooks — Profesional

## Qué hace este skill

Lógica respetando las convenciones: hooks actions/filters, WP-CLI-safe, y separación plugin/tema. En este nivel se entrega: **plugins de producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Plugins y hooks** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el plugin como producto: updater propio o marketplace
2. Seguridad de plugin: nonces, sanitizaciones y capabilities
3. Compatibilidad con multisitio y versiones de PHP declaradas
4. Documentar el plugin (readme.txt estándar + docs)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | plugins de producto | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Diseñar el plugin como producto: updater propio o marketplace · Seguridad de plugin: nonces, sanitizaciones y capabilities · Compatibilidad con multisitio y versiones de PHP declaradas · Documentar el plugin (readme.txt estándar + docs) | lista | sí | 3-4 pasos |
| $criterios_clave | El plugin pasa el plugin check y el escáner de seguridad · La actualización del plugin preserva opciones y no rompe datos | lista | sí | calidad verificable |
| $prompt_guia | Convierte mi plugin en producto: updater, nonces y capabilities, multisitio y documentación estándar | texto | no | "Plugins y hooks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El plugin pasa el plugin check y el escáner de seguridad
- [ ] La actualización del plugin preserva opciones y no rompe datos

## Ejemplos de prompts

- "Convierte mi plugin en producto: updater, nonces y capabilities, multisitio y documentación estándar"
- "Aplica Plugins y hooks (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza El plugin pasa el plugin check y el escáner de seguridad"
- "Revisa mi wordpress y dime qué pasos de Plugins y hooks me faltan en este nivel"