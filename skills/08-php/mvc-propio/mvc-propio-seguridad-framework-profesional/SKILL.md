---
name: mvc-propio-seguridad-framework-profesional
description: Seguridad del framework · nivel Profesional · Framework MVC propio. Opciones seguras por defecto: CSRF, escape, headers, contraseñas y registro de configuraciones. Objetivo del nivel: postura de seguridad del framework
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "seguridad-framework"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Seguridad del framework — Profesional

## Qué hace este skill

Opciones seguras por defecto: CSRF, escape, headers, contraseñas y registro de configuraciones. En este nivel se entrega: **postura de seguridad del framework**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Documentar el modelo de confianza del framework
2. Realizar una auditoría de seguridad del framework (testeos propios)
3. Preparar advisories y canal de reporte si es público
4. Definir el plan de parcheo de dependencias del framework

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | postura de seguridad del framework | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Documentar el modelo de confianza del framework · Realizar una auditoría de seguridad del framework (testeos propios) · Preparar advisories y canal de reporte si es público · Definir el plan de parcheo de dependencias del framework | lista | sí | 3-4 pasos |
| $criterios_clave | La auditoría propia tiene plan de remediación documentado · El canal de reporte y el plan de parcheo existen | lista | sí | calidad verificable |
| $prompt_guia | Establece la postura de seguridad de mi framework: auditoría, modelo de confianza y plan de parcheo | texto | no | "Seguridad del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La auditoría propia tiene plan de remediación documentado
- [ ] El canal de reporte y el plan de parcheo existen

## Ejemplos de prompts

- "Establece la postura de seguridad de mi framework: auditoría, modelo de confianza y plan de parcheo"
- "Aplica Seguridad del framework (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza La auditoría propia tiene plan de remediación documentado"
- "Revisa mi mvc-propio y dime qué pasos de Seguridad del framework me faltan en este nivel"