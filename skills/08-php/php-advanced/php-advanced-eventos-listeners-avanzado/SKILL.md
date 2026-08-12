---
name: php-advanced-eventos-listeners-avanzado
description: Eventos y listeners · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Desacoplar efectos: dispatcher de eventos, listeners y el modelo correcto de dominio. Objetivo del nivel: eventos de dominio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "eventos-listeners"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Eventos y listeners — Avanzado

## Qué hace este skill

Desacoplar efectos: dispatcher de eventos, listeners y el modelo correcto de dominio. En este nivel se entrega: **eventos de dominio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos y listeners** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar eventos de dominio (PedidoCreado, PagoFallido)
2. Publicar eventos en transacciones (después del commit)
3. Encadenar efectos secundarios (mail, colas) por eventos
4. Reintentar listeners fallidos sin duplicar efectos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | eventos de dominio | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Modelar eventos de dominio (PedidoCreado, PagoFallido) · Publicar eventos en transacciones (después del commit) · Encadenar efectos secundarios (mail, colas) por eventos · Reintentar listeners fallidos sin duplicar efectos | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos de dominio se publican tras el commit · Un listener fallido no duplica efectos | lista | sí | calidad verificable |
| $prompt_guia | Modela eventos de dominio en mi app y encadena mails y colas con reintentos | texto | no | "Eventos y listeners" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos de dominio se publican tras el commit
- [ ] Un listener fallido no duplica efectos

## Ejemplos de prompts

- "Modela eventos de dominio en mi app y encadena mails y colas con reintentos"
- "Aplica Eventos y listeners (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los eventos de dominio se publican tras el commit"
- "Revisa mi php-advanced y dime qué pasos de Eventos y listeners me faltan en este nivel"