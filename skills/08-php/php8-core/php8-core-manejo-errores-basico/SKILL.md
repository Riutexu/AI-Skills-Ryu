---
name: php8-core-manejo-errores-basico
description: Manejo de errores y excepciones · nivel Básico · PHP 8.3: fundamentos profesionales. Errores que se comportan: excepciones tipadas, logging estructurado y respuestas coherentes. Objetivo del nivel: try/catch y mensajes claros
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "manejo-errores"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Manejo de errores y excepciones — Básico

## Qué hace este skill

Errores que se comportan: excepciones tipadas, logging estructurado y respuestas coherentes. En este nivel se entrega: **try/catch y mensajes claros**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores y excepciones** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Envolver operaciones peligrosas (archivo, BD) en try/catch/finally
2. Distinguir errores recuperables de errores fatales
3. Mostrar mensajes de error amables al usuario sin filtrar detalles

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | try/catch y mensajes claros | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Envolver operaciones peligrosas (archivo, BD) en try/catch/finally · Distinguir errores recuperables de errores fatales · Mostrar mensajes de error amables al usuario sin filtrar detalles | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún fatal sin capturar posible en las rutas principales · El usuario jamás ve stack traces ni rutas internas | lista | sí | calidad verificable |
| $prompt_guia | Envuelve el acceso a BD y archivos de mi script en try/catch con mensajes amables y sin datos internos | texto | no | "Manejo de errores y excepciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún fatal sin capturar posible en las rutas principales
- [ ] El usuario jamás ve stack traces ni rutas internas

## Ejemplos de prompts

- "Envuelve el acceso a BD y archivos de mi script en try/catch con mensajes amables y sin datos internos"
- "Aplica Manejo de errores y excepciones (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Ningún fatal sin capturar posible en las rutas principales"
- "Revisa mi php8-core y dime qué pasos de Manejo de errores y excepciones me faltan en este nivel"