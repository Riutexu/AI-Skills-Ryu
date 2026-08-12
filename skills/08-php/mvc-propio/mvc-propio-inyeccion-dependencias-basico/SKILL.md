---
name: mvc-propio-inyeccion-dependencias-basico
description: Contenedor e inyección de dependencias · nivel Básico · Framework MVC propio. Composición del sistema: contenedor de servicios, autowiring y resolución de dependencias. Objetivo del nivel: inyección manual y constructor
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "inyeccion-dependencias"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Contenedor e inyección de dependencias — Básico

## Qué hace este skill

Composición del sistema: contenedor de servicios, autowiring y resolución de dependencias. En este nivel se entrega: **inyección manual y constructor**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contenedor e inyección de dependencias** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Pasar dependencias por constructor en vez de instanciar dentro
2. Crear factories simples de servicios
3. Eliminar llamadas globales dispersas (new en controladores)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | inyección manual y constructor | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Pasar dependencias por constructor en vez de instanciar dentro · Crear factories simples de servicios · Eliminar llamadas globales dispersas (new en controladores) | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún controlador instancia servicios directamente · Los servicios se construyen en un punto central | lista | sí | calidad verificable |
| $prompt_guia | Refactoriza mis controladores a inyección por constructor con factories de servicios | texto | no | "Contenedor e inyección de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún controlador instancia servicios directamente
- [ ] Los servicios se construyen en un punto central

## Ejemplos de prompts

- "Refactoriza mis controladores a inyección por constructor con factories de servicios"
- "Aplica Contenedor e inyección de dependencias (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Ningún controlador instancia servicios directamente"
- "Revisa mi mvc-propio y dime qué pasos de Contenedor e inyección de dependencias me faltan en este nivel"