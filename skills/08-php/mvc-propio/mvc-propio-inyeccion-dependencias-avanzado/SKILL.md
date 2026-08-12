---
name: mvc-propio-inyeccion-dependencias-avanzado
description: Contenedor e inyección de dependencias · nivel Avanzado · Framework MVC propio. Composición del sistema: contenedor de servicios, autowiring y resolución de dependencias. Objetivo del nivel: contenedor con autowiring
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "inyeccion-dependencias"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Contenedor e inyección de dependencias — Avanzado

## Qué hace este skill

Composición del sistema: contenedor de servicios, autowiring y resolución de dependencias. En este nivel se entrega: **contenedor con autowiring**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contenedor e inyección de dependencias** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un contenedor con autowiring por reflection
2. Registrar binding manuales (interfaces a implementaciones)
3. Resolver ciclos y servicios lazy
4. Soportar parámetros escalares con configuración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | contenedor con autowiring | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Implementar un contenedor con autowiring por reflection · Registrar binding manuales (interfaces a implementaciones) · Resolver ciclos y servicios lazy · Soportar parámetros escalares con configuración | lista | sí | 3-4 pasos |
| $criterios_clave | El autowiring resuelve el grafo principal sin config manual · Un ciclo de dependencias se detecta con error claro | lista | sí | calidad verificable |
| $prompt_guia | Construye un contenedor con autowiring por reflection y bindings de interfaces en mi framework | texto | no | "Contenedor e inyección de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El autowiring resuelve el grafo principal sin config manual
- [ ] Un ciclo de dependencias se detecta con error claro

## Ejemplos de prompts

- "Construye un contenedor con autowiring por reflection y bindings de interfaces en mi framework"
- "Aplica Contenedor e inyección de dependencias (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza El autowiring resuelve el grafo principal sin config manual"
- "Revisa mi mvc-propio y dime qué pasos de Contenedor e inyección de dependencias me faltan en este nivel"