---
name: mvc-propio-pruebas-framework-basico
description: Testing del framework · nivel Básico · Framework MVC propio. Probar el framework como librería: tests unitarios del núcleo, acceptance y CI. Objetivo del nivel: tests del núcleo
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pruebas-framework"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Testing del framework — Básico

## Qué hace este skill

Probar el framework como librería: tests unitarios del núcleo, acceptance y CI. En este nivel se entrega: **tests del núcleo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar PHPUnit para el framework
2. Probar router y plantillas de forma unitaria
3. Fijar umbral mínimo en las rutas principales

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | tests del núcleo | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Configurar PHPUnit para el framework · Probar router y plantillas de forma unitaria · Fijar umbral mínimo en las rutas principales | lista | sí | 3-4 pasos |
| $criterios_clave | El router tiene tests para casos centrales · La suite corre desde cero | lista | sí | calidad verificable |
| $prompt_guia | Configura PHPUnit y cubre el router y las plantillas de mi framework | texto | no | "Testing del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El router tiene tests para casos centrales
- [ ] La suite corre desde cero

## Ejemplos de prompts

- "Configura PHPUnit y cubre el router y las plantillas de mi framework"
- "Aplica Testing del framework (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza El router tiene tests para casos centrales"
- "Revisa mi mvc-propio y dime qué pasos de Testing del framework me faltan en este nivel"