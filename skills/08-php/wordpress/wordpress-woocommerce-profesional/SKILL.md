---
name: wordpress-woocommerce-profesional
description: WooCommerce: tienda · nivel Profesional · WordPress: temas y plugins. Tiendas funcionales: productos, variaciones, carrito, pagos, envío y personalización segura. Objetivo del nivel: tienda de producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "woocommerce"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# WooCommerce: tienda — Profesional

## Qué hace este skill

Tiendas funcionales: productos, variaciones, carrito, pagos, envío y personalización segura. En este nivel se entrega: **tienda de producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WooCommerce: tienda** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el modelo de datos de producto (atributos, precio, stock)
2. Desarrollar pasarelas de pago custom y webhooks de conciliación
3. Optimizar checkout (peso, fricción) y análisis de conversión
4. Integrar ERP/contabilidad con exportaciones
5. Garantizar SSL y cumplimiento de PSD2/retención de datos

6. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
7. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | tienda de producto | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Diseñar el modelo de datos de producto (atributos, precio, stock) · Desarrollar pasarelas de pago custom y webhooks de conciliación · Optimizar checkout (peso, fricción) y análisis de conversión · Integrar ERP/contabilidad con exportaciones · Garantizar SSL y cumplimiento de PSD2/retención de datos | lista | sí | 3-4 pasos |
| $criterios_clave | Los webhooks de pago concilian pedidos automáticamente · El checkout alcanza el presupuesto de peso fijado | lista | sí | calidad verificable |
| $prompt_guia | Profesionaliza mi WooCommerce: pago con webhooks de conciliación, modelo de producto y checkout optimizado | texto | no | "WooCommerce: tienda" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los webhooks de pago concilian pedidos automáticamente
- [ ] El checkout alcanza el presupuesto de peso fijado

## Ejemplos de prompts

- "Profesionaliza mi WooCommerce: pago con webhooks de conciliación, modelo de producto y checkout optimizado"
- "Aplica WooCommerce: tienda (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza Los webhooks de pago concilian pedidos automáticamente"
- "Revisa mi wordpress y dime qué pasos de WooCommerce: tienda me faltan en este nivel"