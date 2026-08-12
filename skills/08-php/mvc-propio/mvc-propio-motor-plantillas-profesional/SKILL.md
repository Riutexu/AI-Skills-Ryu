---
name: mvc-propio-motor-plantillas-profesional
description: Motor de plantillas · nivel Profesional · Framework MVC propio. Vistas seguras sin PHP crudo: motor propio con layouts, secciones y escape automático. Objetivo del nivel: rendering seguro y rápido
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "motor-plantillas"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Motor de plantillas — Profesional

## Qué hace este skill

Vistas seguras sin PHP crudo: motor propio con layouts, secciones y escape automático. En este nivel se entrega: **rendering seguro y rápido**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Motor de plantillas** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Prevenir XSS a nivel de motor (context-aware escaping)
2. Soportar temas/paquetes de vistas externos
3. Rendimiento: compilar a PHP óptimo con opcache
4. Documentar la sintaxis y seguridad del motor

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | rendering seguro y rápido | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Prevenir XSS a nivel de motor (context-aware escaping) · Soportar temas/paquetes de vistas externos · Rendimiento: compilar a PHP óptimo con opcache · Documentar la sintaxis y seguridad del motor | lista | sí | 3-4 pasos |
| $criterios_clave | Un test de XSS confirma el escape por contexto · El motor compilado compite en velocidad con Twig básico | lista | sí | calidad verificable |
| $prompt_guia | Profesionaliza mi motor de plantillas: escaping por contexto, temas externos y compilación optimizada | texto | no | "Motor de plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un test de XSS confirma el escape por contexto
- [ ] El motor compilado compite en velocidad con Twig básico

## Ejemplos de prompts

- "Profesionaliza mi motor de plantillas: escaping por contexto, temas externos y compilación optimizada"
- "Aplica Motor de plantillas (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza Un test de XSS confirma el escape por contexto"
- "Revisa mi mvc-propio y dime qué pasos de Motor de plantillas me faltan en este nivel"