---
name: php8-core-formularios-seguros-avanzado
description: Formularios: validación y saneamiento · nivel Avanzado · PHP 8.3: fundamentos profesionales. Formularios que no mienten: validación server-side, saneamiento de entradas y errores por campo. Objetivo del nivel: validador de dominio y reutilización
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "formularios-seguros"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Formularios: validación y saneamiento — Avanzado

## Qué hace este skill

Formularios que no mienten: validación server-side, saneamiento de entradas y errores por campo. En este nivel se entrega: **validador de dominio y reutilización**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Formularios: validación y saneamiento** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir un motor de validación reutilizable (reglas por campo)
2. Validar reglas de negocio (unicidad, rangos, dependencias entre campos)
3. Sanear con contexto: htmlspecialchars en salida, parámetros en BD
4. Proteger de CSRF con tokens en todos los formularios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | validador de dominio y reutilización | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Construir un motor de validación reutilizable (reglas por campo) · Validar reglas de negocio (unicidad, rangos, dependencias entre campos) · Sanear con contexto: htmlspecialchars en salida, parámetros en BD · Proteger de CSRF con tokens en todos los formularios | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas se reutilizan entre web y API · Ningún formulario acepta datos que rompan la regla de unicidad | lista | sí | calidad verificable |
| $prompt_guia | Construye un motor de validación reutilizable con reglas por campo y protección CSRF en todos mis formularios | texto | no | "Formularios: validación y saneamiento" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas se reutilizan entre web y API
- [ ] Ningún formulario acepta datos que rompan la regla de unicidad

## Ejemplos de prompts

- "Construye un motor de validación reutilizable con reglas por campo y protección CSRF en todos mis formularios"
- "Aplica Formularios: validación y saneamiento (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Las reglas se reutilizan entre web y API"
- "Revisa mi php8-core y dime qué pasos de Formularios: validación y saneamiento me faltan en este nivel"