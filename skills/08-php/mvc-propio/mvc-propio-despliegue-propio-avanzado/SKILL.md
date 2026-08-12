---
name: mvc-propio-despliegue-propio-avanzado
description: Despliegue y producción · nivel Avanzado · Framework MVC propio. Llevar el framework propio a producción: FPM, nginx, opcache, entorno y deployments. Objetivo del nivel: deploys y entornos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "despliegue-propio"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Despliegue y producción — Avanzado

## Qué hace este skill

Llevar el framework propio a producción: FPM, nginx, opcache, entorno y deployments. En este nivel se entrega: **deploys y entornos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue y producción** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar entornos (dev/staging/prod) con variables
2. Automatizar el deploy (rsync/Git tag + script)
3. Preparar metrics de salud (health endpoint)
4. Gestionar logs en producción y rotación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | deploys y entornos | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Configurar entornos (dev/staging/prod) con variables · Automatizar el deploy (rsync/Git tag + script) · Preparar metrics de salud (health endpoint) · Gestionar logs en producción y rotación | lista | sí | 3-4 pasos |
| $criterios_clave | El deploy desde Git replica producción en staging · El health endpoint es monitorizable | lista | sí | calidad verificable |
| $prompt_guia | Monta el pipeline de despliegue de mi framework: entornos, deploy desde Git y health checks | texto | no | "Despliegue y producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El deploy desde Git replica producción en staging
- [ ] El health endpoint es monitorizable

## Ejemplos de prompts

- "Monta el pipeline de despliegue de mi framework: entornos, deploy desde Git y health checks"
- "Aplica Despliegue y producción (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza El deploy desde Git replica producción en staging"
- "Revisa mi mvc-propio y dime qué pasos de Despliegue y producción me faltan en este nivel"