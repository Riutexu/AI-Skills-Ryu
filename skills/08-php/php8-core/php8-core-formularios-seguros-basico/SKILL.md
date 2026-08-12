---
name: php8-core-formularios-seguros-basico
description: Formularios: validación y saneamiento · nivel Básico · PHP 8.3: fundamentos profesionales. Formularios que no mienten: validación server-side, saneamiento de entradas y errores por campo. Objetivo del nivel: validar en servidor y mostrar errores
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "formularios-seguros"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Formularios: validación y saneamiento — Básico

## Qué hace este skill

Formularios que no mienten: validación server-side, saneamiento de entradas y errores por campo. En este nivel se entrega: **validar en servidor y mostrar errores**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Formularios: validación y saneamiento** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar cada campo en servidor (nunca confiar solo en HTML)
2. Devolver errores por campo y conservar los valores introducidos
3. Saneamiento básico: trim, strip_tags y filtros filter_var

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | validar en servidor y mostrar errores | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Validar cada campo en servidor (nunca confiar solo en HTML) · Devolver errores por campo y conservar los valores introducidos · Saneamiento básico: trim, strip_tags y filtros filter_var | lista | sí | 3-4 pasos |
| $criterios_clave | Enviar un formulario vacío muestra errores por campo sin datos perdidos · El HTML de salida no rompe por entradas con <script> | lista | sí | calidad verificable |
| $prompt_guia | Implementa validación server-side de mi formulario de registro con errores por campo y valores conservados | texto | no | "Formularios: validación y saneamiento" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Enviar un formulario vacío muestra errores por campo sin datos perdidos
- [ ] El HTML de salida no rompe por entradas con <script>

## Ejemplos de prompts

- "Implementa validación server-side de mi formulario de registro con errores por campo y valores conservados"
- "Aplica Formularios: validación y saneamiento (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Enviar un formulario vacío muestra errores por campo sin datos perdidos"
- "Revisa mi php8-core y dime qué pasos de Formularios: validación y saneamiento me faltan en este nivel"