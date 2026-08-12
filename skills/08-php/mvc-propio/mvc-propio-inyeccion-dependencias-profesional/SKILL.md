---
name: mvc-propio-inyeccion-dependencias-profesional
description: Contenedor e inyección de dependencias · nivel Profesional · Framework MVC propio. Composición del sistema: contenedor de servicios, autowiring y resolución de dependencias. Objetivo del nivel: contenedor como producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "inyeccion-dependencias"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Contenedor e inyección de dependencias — Profesional

## Qué hace este skill

Composición del sistema: contenedor de servicios, autowiring y resolución de dependencias. En este nivel se entrega: **contenedor como producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contenedor e inyección de dependencias** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la API del contenedor (registro, decoración, tags)
2. Compilar el contenedor a código PHP para producción (speed)
3. Implementar decoradores de servicios y override por entorno
4. Documentar y probar el contenedor como librería

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | contenedor como producto | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Diseñar la API del contenedor (registro, decoración, tags) · Compilar el contenedor a código PHP para producción (speed) · Implementar decoradores de servicios y override por entorno · Documentar y probar el contenedor como librería | lista | sí | 3-4 pasos |
| $criterios_clave | El contenedor compilado mejora el arranque mediblemente · Decoración de servicios funciona sin tocar clases | lista | sí | calidad verificable |
| $prompt_guia | Transforma mi contenedor en librería: compilación a código, decoradores y tags con documentación | texto | no | "Contenedor e inyección de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El contenedor compilado mejora el arranque mediblemente
- [ ] Decoración de servicios funciona sin tocar clases

## Ejemplos de prompts

- "Transforma mi contenedor en librería: compilación a código, decoradores y tags con documentación"
- "Aplica Contenedor e inyección de dependencias (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza El contenedor compilado mejora el arranque mediblemente"
- "Revisa mi mvc-propio y dime qué pasos de Contenedor e inyección de dependencias me faltan en este nivel"