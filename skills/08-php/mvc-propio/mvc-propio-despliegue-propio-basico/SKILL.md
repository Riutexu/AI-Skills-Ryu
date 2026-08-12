---
name: mvc-propio-despliegue-propio-basico
description: Despliegue y producción · nivel Básico · Framework MVC propio. Llevar el framework propio a producción: FPM, nginx, opcache, entorno y deployments. Objetivo del nivel: producción simple
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "despliegue-propio"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Despliegue y producción — Básico

## Qué hace este skill

Llevar el framework propio a producción: FPM, nginx, opcache, entorno y deployments. En este nivel se entrega: **producción simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue y producción** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar nginx + PHP-FPM para el front controller
2. Activar opcache y ajustes de PHP
3. Proteger archivos sensibles (configuración fuera de webroot)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | producción simple | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Configurar nginx + PHP-FPM para el front controller · Activar opcache y ajustes de PHP · Proteger archivos sensibles (configuración fuera de webroot) | lista | sí | 3-4 pasos |
| $criterios_clave | El sitio responde vía nginx/FPM sin configs inseguras · Los archivos de configuración no son accesibles por web | lista | sí | calidad verificable |
| $prompt_guia | Despliega mi framework propio a producción con nginx, PHP-FPM y opcache | texto | no | "Despliegue y producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El sitio responde vía nginx/FPM sin configs inseguras
- [ ] Los archivos de configuración no son accesibles por web

## Ejemplos de prompts

- "Despliega mi framework propio a producción con nginx, PHP-FPM y opcache"
- "Aplica Despliegue y producción (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza El sitio responde vía nginx/FPM sin configs inseguras"
- "Revisa mi mvc-propio y dime qué pasos de Despliegue y producción me faltan en este nivel"