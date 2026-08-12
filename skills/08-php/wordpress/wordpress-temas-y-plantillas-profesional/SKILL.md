---
name: wordpress-temas-y-plantillas-profesional
description: Temas y plantillas · nivel Profesional · WordPress: temas y plugins. Temas profesionales con custom theme: hierarchy de plantillas, functions.php y hooks visuales. Objetivo del nivel: themify como producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "temas-y-plantillas"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Temas y plantillas — Profesional

## Qué hace este skill

Temas profesionales con custom theme: hierarchy de plantillas, functions.php y hooks visuales. En este nivel se entrega: **themify como producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Temas y plantillas** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el theme como producto: customizer, options y documentación
2. Integrar patterns y templates del block editor
3. Rendimiento del theme: enqueue con condiciones y críticos
4. Internacionalización completa (i18n) y accesibilidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | themify como producto | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Diseñar el theme como producto: customizer, options y documentación · Integrar patterns y templates del block editor · Rendimiento del theme: enqueue con condiciones y críticos · Internacionalización completa (i18n) y accesibilidad | lista | sí | 3-4 pasos |
| $criterios_clave | El tema se personaliza desde Customizer sin tocar código · Enqueue condicional evita CSS/JS innecesarios en cada página | lista | sí | calidad verificable |
| $prompt_guia | Profesionaliza mi theme: Customizer, block patterns, enqueue condicional y i18n completo | texto | no | "Temas y plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tema se personaliza desde Customizer sin tocar código
- [ ] Enqueue condicional evita CSS/JS innecesarios en cada página

## Ejemplos de prompts

- "Profesionaliza mi theme: Customizer, block patterns, enqueue condicional y i18n completo"
- "Aplica Temas y plantillas (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza El tema se personaliza desde Customizer sin tocar código"
- "Revisa mi wordpress y dime qué pasos de Temas y plantillas me faltan en este nivel"