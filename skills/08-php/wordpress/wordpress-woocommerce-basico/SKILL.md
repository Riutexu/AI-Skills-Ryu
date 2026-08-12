---
name: wordpress-woocommerce-basico
description: WooCommerce: tienda · nivel Básico · WordPress: temas y plugins. Tiendas funcionales: productos, variaciones, carrito, pagos, envío y personalización segura. Objetivo del nivel: montar una tienda base
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "woocommerce"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# WooCommerce: tienda — Básico

## Qué hace este skill

Tiendas funcionales: productos, variaciones, carrito, pagos, envío y personalización segura. En este nivel se entrega: **montar una tienda base**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WooCommerce: tienda** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar productos simples y categorías
2. Activar pasarela de pago de prueba y envío
3. Personalizar página de producto y checkout con bloques

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | montar una tienda base | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Configurar productos simples y categorías · Activar pasarela de pago de prueba y envío · Personalizar página de producto y checkout con bloques | lista | sí | 3-4 pasos |
| $criterios_clave | El flujo compra-pago-envío funciona de punta a punta · Los precios y stock se gestionan desde el panel | lista | sí | calidad verificable |
| $prompt_guia | Monta mi tienda WooCommerce base con productos, pago de prueba y flujo de compra completo | texto | no | "WooCommerce: tienda" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El flujo compra-pago-envío funciona de punta a punta
- [ ] Los precios y stock se gestionan desde el panel

## Ejemplos de prompts

- "Monta mi tienda WooCommerce base con productos, pago de prueba y flujo de compra completo"
- "Aplica WooCommerce: tienda (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza El flujo compra-pago-envío funciona de punta a punta"
- "Revisa mi wordpress y dime qué pasos de WooCommerce: tienda me faltan en este nivel"