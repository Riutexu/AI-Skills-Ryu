---
name: wordpress-plugins-custom-basico
description: Plugins y hooks · nivel Básico · WordPress: temas y plugins. Lógica respetando las convenciones: hooks actions/filters, WP-CLI-safe, y separación plugin/tema. Objetivo del nivel: primer plugin y hooks
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "plugins-custom"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Plugins y hooks — Básico

## Qué hace este skill

Lógica respetando las convenciones: hooks actions/filters, WP-CLI-safe, y separación plugin/tema. En este nivel se entrega: **primer plugin y hooks**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Plugins y hooks** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un plugin mínimo con cabecera correcta
2. Enganchar actions (init, wp_head) y filters (the_content)
3. Entender el lifecycle de activación

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primer plugin y hooks | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Crear un plugin mínimo con cabecera correcta · Enganchar actions (init, wp_head) y filters (the_content) · Entender el lifecycle de activación | lista | sí | 3-4 pasos |
| $criterios_clave | El plugin añade funcionalidad sin tocar el tema · La activación no rompe el sitio (bare test) | lista | sí | calidad verificable |
| $prompt_guia | Crea un plugin mínimo que añade un shortcode y un filtro al contenido sin tocar el tema | texto | no | "Plugins y hooks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El plugin añade funcionalidad sin tocar el tema
- [ ] La activación no rompe el sitio (bare test)

## Ejemplos de prompts

- "Crea un plugin mínimo que añade un shortcode y un filtro al contenido sin tocar el tema"
- "Aplica Plugins y hooks (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza El plugin añade funcionalidad sin tocar el tema"
- "Revisa mi wordpress y dime qué pasos de Plugins y hooks me faltan en este nivel"