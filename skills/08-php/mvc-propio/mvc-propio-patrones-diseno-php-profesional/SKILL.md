---
name: mvc-propio-patrones-diseno-php-profesional
description: Patrones de diseño útiles · nivel Profesional · Framework MVC propio. Los patrones que de verdad se usan en PHP: Factory, Repository, Strategy, Observer y más. Objetivo del nivel: patrones como lenguaje
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "patrones-diseno-php"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Patrones de diseño útiles — Profesional

## Qué hace este skill

Los patrones que de verdad se usan en PHP: Factory, Repository, Strategy, Observer y más. En este nivel se entrega: **patrones como lenguaje**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Patrones de diseño útiles** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Elegir patrones por criterio (complejidad, coste, equipo), no por moda
2. Documentar decisiones con ADRs (patrón, alternativa, coste)
3. Diseñar con composición y contratos, no herencia ciega
4. Enseñar los patrones usados al equipo en sesiones cortas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | patrones como lenguaje | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Elegir patrones por criterio (complejidad, coste, equipo), no por moda · Documentar decisiones con ADRs (patrón, alternativa, coste) · Diseñar con composición y contratos, no herencia ciega · Enseñar los patrones usados al equipo en sesiones cortas | lista | sí | 3-4 pasos |
| $criterios_clave | Los ADRs justifican cada patrón elegido · La complejidad del código es proporcional al dominio | lista | sí | calidad verificable |
| $prompt_guia | Revisa mi código y propón patrones solo donde el dominio lo justifica, con ADR por decisión | texto | no | "Patrones de diseño útiles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los ADRs justifican cada patrón elegido
- [ ] La complejidad del código es proporcional al dominio

## Ejemplos de prompts

- "Revisa mi código y propón patrones solo donde el dominio lo justifica, con ADR por decisión"
- "Aplica Patrones de diseño útiles (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza Los ADRs justifican cada patrón elegido"
- "Revisa mi mvc-propio y dime qué pasos de Patrones de diseño útiles me faltan en este nivel"