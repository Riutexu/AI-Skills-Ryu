---
name: mvc-propio-seguridad-framework-basico
description: Seguridad del framework · nivel Básico · Framework MVC propio. Opciones seguras por defecto: CSRF, escape, headers, contraseñas y registro de configuraciones. Objetivo del nivel: seguridad por defecto básica
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "seguridad-framework"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Seguridad del framework — Básico

## Qué hace este skill

Opciones seguras por defecto: CSRF, escape, headers, contraseñas y registro de configuraciones. En este nivel se entrega: **seguridad por defecto básica**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar escape automático en vistas
2. Proteger formularios con tokens CSRF
3. Configurar cabeceras básicas (X-Frame, nosniff)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | seguridad por defecto básica | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Activar escape automático en vistas · Proteger formularios con tokens CSRF · Configurar cabeceras básicas (X-Frame, nosniff) | lista | sí | 3-4 pasos |
| $criterios_clave | Los formularios centrales rechazan peticiones sin token · Las cabeceras de seguridad están presentes | lista | sí | calidad verificable |
| $prompt_guia | Activa la seguridad básica de mi framework: escape, CSRF y cabeceras | texto | no | "Seguridad del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los formularios centrales rechazan peticiones sin token
- [ ] Las cabeceras de seguridad están presentes

## Ejemplos de prompts

- "Activa la seguridad básica de mi framework: escape, CSRF y cabeceras"
- "Aplica Seguridad del framework (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Los formularios centrales rechazan peticiones sin token"
- "Revisa mi mvc-propio y dime qué pasos de Seguridad del framework me faltan en este nivel"