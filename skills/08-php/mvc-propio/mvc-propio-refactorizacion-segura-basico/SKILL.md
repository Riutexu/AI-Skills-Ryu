---
name: mvc-propio-refactorizacion-segura-basico
description: Refactorización segura · nivel Básico · Framework MVC propio. Mejorar código sin romper comportamiento: red de tests, malos olores y migración gradual. Objetivo del nivel: mover código con seguridad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "refactorizacion-segura"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Refactorización segura — Básico

## Qué hace este skill

Mejorar código sin romper comportamiento: red de tests, malos olores y migración gradual. En este nivel se entrega: **mover código con seguridad**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Refactorización segura** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar duplicación y extraer funciones
2. Renombrar variables con significado
3. Usar git como red de seguridad (commits atómicos)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | mover código con seguridad | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Detectar duplicación y extraer funciones · Renombrar variables con significado · Usar git como red de seguridad (commits atómicos) | lista | sí | 3-4 pasos |
| $criterios_clave | Cada refactor va en commit separado sin cambios de comportamiento · Las pruebas existentes pasan sin modificar | lista | sí | calidad verificable |
| $prompt_guia | Refactoriza este script extraído en funciones con commits atómicos sin cambiar comportamiento | texto | no | "Refactorización segura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada refactor va en commit separado sin cambios de comportamiento
- [ ] Las pruebas existentes pasan sin modificar

## Ejemplos de prompts

- "Refactoriza este script extraído en funciones con commits atómicos sin cambiar comportamiento"
- "Aplica Refactorización segura (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Cada refactor va en commit separado sin cambios de comportamiento"
- "Revisa mi mvc-propio y dime qué pasos de Refactorización segura me faltan en este nivel"