---
name: mvc-propio-refactorizacion-segura-avanzado
description: Refactorización segura · nivel Avanzado · Framework MVC propio. Mejorar código sin romper comportamiento: red de tests, malos olores y migración gradual. Objetivo del nivel: malos olores y deuda
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "refactorizacion-segura"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Refactorización segura — Avanzado

## Qué hace este skill

Mejorar código sin romper comportamiento: red de tests, malos olores y migración gradual. En este nivel se entrega: **malos olores y deuda**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Refactorización segura** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar y resolver malos olores (god object, feature envy)
2. Aplicar extracción de clases y módulos
3. Establecer caracterizaciones (characterization tests) previas
4. Reducir deuda con plan visible

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | malos olores y deuda | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Detectar y resolver malos olores (god object, feature envy) · Aplicar extracción de clases y módulos · Establecer caracterizaciones (characterization tests) previas · Reducir deuda con plan visible | lista | sí | 3-4 pasos |
| $criterios_clave | Las caracterizaciones protegen el comportamiento previo · La deuda técnica tiene plan y progreso rastreable | lista | sí | calidad verificable |
| $prompt_guia | Refactoriza mi módulo con malos olores usando characterization tests y plan de deuda | texto | no | "Refactorización segura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las caracterizaciones protegen el comportamiento previo
- [ ] La deuda técnica tiene plan y progreso rastreable

## Ejemplos de prompts

- "Refactoriza mi módulo con malos olores usando characterization tests y plan de deuda"
- "Aplica Refactorización segura (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Las caracterizaciones protegen el comportamiento previo"
- "Revisa mi mvc-propio y dime qué pasos de Refactorización segura me faltan en este nivel"