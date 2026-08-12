---
name: php8-core-composer-ecosistema-avanzado
description: Composer: dependencias y autoload · nivel Avanzado · PHP 8.3: fundamentos profesionales. Instalar, versionar y organizar dependencias con Composer: autoload PSR-4, scripts y auditoría. Objetivo del nivel: scripts, plataformas y entornos reproducibles
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "composer-ecosistema"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Composer: dependencias y autoload — Avanzado

## Qué hace este skill

Instalar, versionar y organizar dependencias con Composer: autoload PSR-4, scripts y auditoría. En este nivel se entrega: **scripts, plataformas y entornos reproducibles**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Composer: dependencias y autoload** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir scripts composer (lint, test, cs) integrados en el flujo
2. Fijar platform en composer.json para entornos reproducibles
3. Publicar un paquete propio interno (vía repo VCS privado o Packagist)
4. Distinguir require vs require-dev y aplicarlo con criterio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | scripts, plataformas y entornos reproducibles | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Definir scripts composer (lint, test, cs) integrados en el flujo · Fijar platform en composer.json para entornos reproducibles · Publicar un paquete propio interno (vía repo VCS privado o Packagist) · Distinguir require vs require-dev y aplicarlo con criterio | lista | sí | 3-4 pasos |
| $criterios_clave | composer run test ejecuta la suite desde cero en otra máquina · El paquete interno se instala con nombre de vendor correcto | lista | sí | calidad verificable |
| $prompt_guia | Organiza mi proyecto PHP con scripts composer de lint/test, platform fijada y un paquete interno propio | texto | no | "Composer: dependencias y autoload" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] composer run test ejecuta la suite desde cero en otra máquina
- [ ] El paquete interno se instala con nombre de vendor correcto

## Ejemplos de prompts

- "Organiza mi proyecto PHP con scripts composer de lint/test, platform fijada y un paquete interno propio"
- "Aplica Composer: dependencias y autoload (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza composer run test ejecuta la suite desde cero en otra máquina"
- "Revisa mi php8-core y dime qué pasos de Composer: dependencias y autoload me faltan en este nivel"