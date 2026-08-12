---
name: wordpress-acf-campos-avanzado
description: ACF: campos y bloques · nivel Avanzado · WordPress: temas y plugins. Campos personalizados para clientes sin código: ACF PRO fields, local JSON y bloques dinámicos. Objetivo del nivel: local JSON y fields estructurados
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "acf-campos"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# ACF: campos y bloques — Avanzado

## Qué hace este skill

Campos personalizados para clientes sin código: ACF PRO fields, local JSON y bloques dinámicos. En este nivel se entrega: **local JSON y fields estructurados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ACF: campos y bloques** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Versionar campos con ACF local JSON en Git
2. Usar repeater y flex content con estructuras complejas
3. Validar y condicionar campos por plantilla
4. Construir opciones globales del sitio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | local JSON y fields estructurados | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Versionar campos con ACF local JSON en Git · Usar repeater y flex content con estructuras complejas · Validar y condicionar campos por plantilla · Construir opciones globales del sitio | lista | sí | 3-4 pasos |
| $criterios_clave | Los fields viven en Git (local JSON) y se despliegan con el código · Las estructuras repeater se renderizan limpias | lista | sí | calidad verificable |
| $prompt_guia | Gestiona mis campos ACF con local JSON en Git, repeater para bloques de contenido y opciones globales | texto | no | "ACF: campos y bloques" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los fields viven en Git (local JSON) y se despliegan con el código
- [ ] Las estructuras repeater se renderizan limpias

## Ejemplos de prompts

- "Gestiona mis campos ACF con local JSON en Git, repeater para bloques de contenido y opciones globales"
- "Aplica ACF: campos y bloques (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza Los fields viven en Git (local JSON) y se despliegan con el código"
- "Revisa mi wordpress y dime qué pasos de ACF: campos y bloques me faltan en este nivel"