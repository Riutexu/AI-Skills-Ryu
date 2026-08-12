---
name: mvc-propio-motor-plantillas-basico
description: Motor de plantillas · nivel Básico · Framework MVC propio. Vistas seguras sin PHP crudo: motor propio con layouts, secciones y escape automático. Objetivo del nivel: vistas con datos y escape
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "motor-plantillas"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Motor de plantillas — Básico

## Qué hace este skill

Vistas seguras sin PHP crudo: motor propio con layouts, secciones y escape automático. En este nivel se entrega: **vistas con datos y escape**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Motor de plantillas** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cargar vistas PHP con variables
2. Escapar la salida automáticamente
3. Usar layouts con section/append

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | vistas con datos y escape | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Cargar vistas PHP con variables · Escapar la salida automáticamente · Usar layouts con section/append | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna salida sin escapar en las vistas · Los layouts se reutilizan sin duplicar HTML | lista | sí | calidad verificable |
| $prompt_guia | Implementa la carga de vistas con escape y un layout base en mi framework | texto | no | "Motor de plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna salida sin escapar en las vistas
- [ ] Los layouts se reutilizan sin duplicar HTML

## Ejemplos de prompts

- "Implementa la carga de vistas con escape y un layout base en mi framework"
- "Aplica Motor de plantillas (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Ninguna salida sin escapar en las vistas"
- "Revisa mi mvc-propio y dime qué pasos de Motor de plantillas me faltan en este nivel"