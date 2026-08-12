---
name: mvc-propio-seguridad-framework-avanzado
description: Seguridad del framework · nivel Avanzado · Framework MVC propio. Opciones seguras por defecto: CSRF, escape, headers, contraseñas y registro de configuraciones. Objetivo del nivel: defensa de sesiones y entradas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "seguridad-framework"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Seguridad del framework — Avanzado

## Qué hace este skill

Opciones seguras por defecto: CSRF, escape, headers, contraseñas y registro de configuraciones. En este nivel se entrega: **defensa de sesiones y entradas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar sesiones con flags seguros y rotación
2. Sanear y validar entradas de forma centralizada
3. Proteger de XSS en helpers de salida
4. Implementar rate limiting configurable por ruta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | defensa de sesiones y entradas | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Configurar sesiones con flags seguros y rotación · Sanear y validar entradas de forma centralizada · Proteger de XSS en helpers de salida · Implementar rate limiting configurable por ruta | lista | sí | 3-4 pasos |
| $criterios_clave | Las sesiones tienen flags seguros y rotación tras login · La entrada por defecto se considera no confiable | lista | sí | calidad verificable |
| $prompt_guia | Endurece mi framework: sesiones seguras, saneamiento central y rate limiting por ruta | texto | no | "Seguridad del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las sesiones tienen flags seguros y rotación tras login
- [ ] La entrada por defecto se considera no confiable

## Ejemplos de prompts

- "Endurece mi framework: sesiones seguras, saneamiento central y rate limiting por ruta"
- "Aplica Seguridad del framework (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Las sesiones tienen flags seguros y rotación tras login"
- "Revisa mi mvc-propio y dime qué pasos de Seguridad del framework me faltan en este nivel"