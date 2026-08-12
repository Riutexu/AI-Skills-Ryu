---
name: mvc-propio-router-front-controller-basico
description: Router y Front Controller · nivel Básico · Framework MVC propio. El corazón del patrón: index.php como punto único de entrada y despacho de rutas a controladores. Objetivo del nivel: front controller y rutas simples
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "router-front-controller"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Router y Front Controller — Básico

## Qué hace este skill

El corazón del patrón: index.php como punto único de entrada y despacho de rutas a controladores. En este nivel se entrega: **front controller y rutas simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Router y Front Controller** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Montar index.php que redirige todo a un bootstrap
2. Resolver rutas GET/POST con parámetros
3. Devolver respuestas simples (texto, vistas)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | front controller y rutas simples | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Montar index.php que redirige todo a un bootstrap · Resolver rutas GET/POST con parámetros · Devolver respuestas simples (texto, vistas) | lista | sí | 3-4 pasos |
| $criterios_clave | Toda la petición pasa por index.php (probado con .htaccess/nginx) · Las rutas con parámetros se despachan correctamente | lista | sí | calidad verificable |
| $prompt_guia | Construye el front controller de mi mini-framework con rutas GET/POST y parámetros | texto | no | "Router y Front Controller" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda la petición pasa por index.php (probado con .htaccess/nginx)
- [ ] Las rutas con parámetros se despachan correctamente

## Ejemplos de prompts

- "Construye el front controller de mi mini-framework con rutas GET/POST y parámetros"
- "Aplica Router y Front Controller (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Toda la petición pasa por index.php (probado con .htaccess/nginx)"
- "Revisa mi mvc-propio y dime qué pasos de Router y Front Controller me faltan en este nivel"