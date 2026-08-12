---
name: php8-core-phpunit-pruebas-avanzado
description: PHPUnit: pruebas unitarias · nivel Avanzado · PHP 8.3: fundamentos profesionales. Escribir pruebas unitarias limpias, rápidas y útiles que protejan el comportamiento real del código. Objetivo del nivel: test doubles y datos de prueba
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "phpunit-pruebas"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# PHPUnit: pruebas unitarias — Avanzado

## Qué hace este skill

Escribir pruebas unitarias limpias, rápidas y útiles que protejan el comportamiento real del código. En este nivel se entrega: **test doubles y datos de prueba**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PHPUnit: pruebas unitarias** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear stubs/mocks/clones de doble de test para el transporte HTTP y BD
2. Usar data providers y fixtures por caso
3. Organizar cobertura por unidad y no acoplar tests al orden interno
4. Escribir tests de integración ligeros contra SQLite de test

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | test doubles y datos de prueba | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Crear stubs/mocks/clones de doble de test para el transporte HTTP y BD · Usar data providers y fixtures por caso · Organizar cobertura por unidad y no acoplar tests al orden interno · Escribir tests de integración ligeros contra SQLite de test | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests corren en paralelo sin estado compartido · La cobertura de las reglas de negocio principales supera el 80% | lista | sí | calidad verificable |
| $prompt_guia | Añade mocks de HTTP y BD a mis tests PHPUnit y destapa las pruebas en paralelo y con data providers | texto | no | "PHPUnit: pruebas unitarias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests corren en paralelo sin estado compartido
- [ ] La cobertura de las reglas de negocio principales supera el 80%

## Ejemplos de prompts

- "Añade mocks de HTTP y BD a mis tests PHPUnit y destapa las pruebas en paralelo y con data providers"
- "Aplica PHPUnit: pruebas unitarias (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Los tests corren en paralelo sin estado compartido"
- "Revisa mi php8-core y dime qué pasos de PHPUnit: pruebas unitarias me faltan en este nivel"