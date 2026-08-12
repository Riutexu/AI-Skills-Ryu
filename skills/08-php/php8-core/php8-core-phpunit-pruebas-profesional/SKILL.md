---
name: php8-core-phpunit-pruebas-profesional
description: PHPUnit: pruebas unitarias · nivel Profesional · PHP 8.3: fundamentos profesionales. Escribir pruebas unitarias limpias, rápidas y útiles que protejan el comportamiento real del código. Objetivo del nivel: TDD, mutaciones y calidad de la suite
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "phpunit-pruebas"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# PHPUnit: pruebas unitarias — Profesional

## Qué hace este skill

Escribir pruebas unitarias limpias, rápidas y útiles que protejan el comportamiento real del código. En este nivel se entrega: **TDD, mutaciones y calidad de la suite**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PHPUnit: pruebas unitarias** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Practicar TDD: red-verde-refactor en una feature completa
2. Medir la calidad de la suite con Infection (mutation testing)
3. Fijar umbral de cobertura en CI y política de regresión
4. Escribir pruebas para errores y caminos de borde como ciudadanos de primera clase

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | TDD, mutaciones y calidad de la suite | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Practicar TDD: red-verde-refactor en una feature completa · Medir la calidad de la suite con Infection (mutation testing) · Fijar umbral de cobertura en CI y política de regresión · Escribir pruebas para errores y caminos de borde como ciudadanos de primera clase | lista | sí | 3-4 pasos |
| $criterios_clave | Infection reporta >85% de mutantes matados en módulos críticos · La suite completa corre en <2 minutos en CI | lista | sí | calidad verificable |
| $prompt_guia | Convertiré a TDD la feature de reembolsos: guíame con red-verde-refactor y mide la suite con Infection | texto | no | "PHPUnit: pruebas unitarias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Infection reporta >85% de mutantes matados en módulos críticos
- [ ] La suite completa corre en <2 minutos en CI

## Ejemplos de prompts

- "Convertiré a TDD la feature de reembolsos: guíame con red-verde-refactor y mide la suite con Infection"
- "Aplica PHPUnit: pruebas unitarias (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Infection reporta >85% de mutantes matados en módulos críticos"
- "Revisa mi php8-core y dime qué pasos de PHPUnit: pruebas unitarias me faltan en este nivel"