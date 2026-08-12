---
name: wordpress-temas-y-plantillas-basico
description: Temas y plantillas · nivel Básico · WordPress: temas y plugins. Temas profesionales con custom theme: hierarchy de plantillas, functions.php y hooks visuales. Objetivo del nivel: crear un tema hijo y personalizar
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "temas-y-plantillas"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Temas y plantillas — Básico

## Qué hace este skill

Temas profesionales con custom theme: hierarchy de plantillas, functions.php y hooks visuales. En este nivel se entrega: **crear un tema hijo y personalizar**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Temas y plantillas** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un child theme del tema de cliente
2. Modificar CSS/HTML con overrides
3. Usar plantillas básicas (header, footer, single)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | crear un tema hijo y personalizar | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Crear un child theme del tema de cliente · Modificar CSS/HTML con overrides · Usar plantillas básicas (header, footer, single) | lista | sí | 3-4 pasos |
| $criterios_clave | Las modificaciones sobreviven a updates del tema padre · El diseño nuevo se aplica sin tocar el tema padre | lista | sí | calidad verificable |
| $prompt_guia | Crea un child theme para personalizar el diseño de mi WordPress sin romper updates | texto | no | "Temas y plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las modificaciones sobreviven a updates del tema padre
- [ ] El diseño nuevo se aplica sin tocar el tema padre

## Ejemplos de prompts

- "Crea un child theme para personalizar el diseño de mi WordPress sin romper updates"
- "Aplica Temas y plantillas (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza Las modificaciones sobreviven a updates del tema padre"
- "Revisa mi wordpress y dime qué pasos de Temas y plantillas me faltan en este nivel"