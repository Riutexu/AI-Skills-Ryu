---
name: wordpress-acf-campos-basico
description: ACF: campos y bloques · nivel Básico · WordPress: temas y plugins. Campos personalizados para clientes sin código: ACF PRO fields, local JSON y bloques dinámicos. Objetivo del nivel: campos ACF y mostrar datos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "acf-campos"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# ACF: campos y bloques — Básico

## Qué hace este skill

Campos personalizados para clientes sin código: ACF PRO fields, local JSON y bloques dinámicos. En este nivel se entrega: **campos ACF y mostrar datos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ACF: campos y bloques** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear field groups de ACF para páginas/CPTs
2. Mostrar campos con the_field/get_field en plantillas
3. Explicar el modelo de datos ACF al cliente

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | campos ACF y mostrar datos | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Crear field groups de ACF para páginas/CPTs · Mostrar campos con the_field/get_field en plantillas · Explicar el modelo de datos ACF al cliente | lista | sí | 3-4 pasos |
| $criterios_clave | Los campos se muestran en las plantillas sin código duplicado · Los datos ACF persisten en BD como post meta | lista | sí | calidad verificable |
| $prompt_guia | Crea el grupo de campos ACF para mi página de inicio y muéstralos en la plantilla | texto | no | "ACF: campos y bloques" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los campos se muestran en las plantillas sin código duplicado
- [ ] Los datos ACF persisten en BD como post meta

## Ejemplos de prompts

- "Crea el grupo de campos ACF para mi página de inicio y muéstralos en la plantilla"
- "Aplica ACF: campos y bloques (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza Los campos se muestran en las plantillas sin código duplicado"
- "Revisa mi wordpress y dime qué pasos de ACF: campos y bloques me faltan en este nivel"