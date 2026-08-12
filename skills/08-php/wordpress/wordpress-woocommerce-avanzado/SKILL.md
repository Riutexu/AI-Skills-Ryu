---
name: wordpress-woocommerce-avanzado
description: WooCommerce: tienda · nivel Avanzado · WordPress: temas y plugins. Tiendas funcionales: productos, variaciones, carrito, pagos, envío y personalización segura. Objetivo del nivel: variaciones, cupones y hooks
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "woocommerce"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# WooCommerce: tienda — Avanzado

## Qué hace este skill

Tiendas funcionales: productos, variaciones, carrito, pagos, envío y personalización segura. En este nivel se entrega: **variaciones, cupones y hooks**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **WooCommerce: tienda** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar variaciones (tallas/colores) con stock por variación
2. Crear cupones y reglas de promoción
3. Personalizar con hooks de template (pestañas, precio, cantidad)
4. Integrar envío por peso/zonas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | variaciones, cupones y hooks | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Configurar variaciones (tallas/colores) con stock por variación · Crear cupones y reglas de promoción · Personalizar con hooks de template (pestañas, precio, cantidad) · Integrar envío por peso/zonas | lista | sí | 3-4 pasos |
| $criterios_clave | El stock por variación se actualiza correctamente tras compra · Los hooks personalizados sobreviven a updates del tema | lista | sí | calidad verificable |
| $prompt_guia | Añade variaciones con stock, cupones promocionales y personalización por hooks a mi tienda WooCommerce | texto | no | "WooCommerce: tienda" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El stock por variación se actualiza correctamente tras compra
- [ ] Los hooks personalizados sobreviven a updates del tema

## Ejemplos de prompts

- "Añade variaciones con stock, cupones promocionales y personalización por hooks a mi tienda WooCommerce"
- "Aplica WooCommerce: tienda (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza El stock por variación se actualiza correctamente tras compra"
- "Revisa mi wordpress y dime qué pasos de WooCommerce: tienda me faltan en este nivel"