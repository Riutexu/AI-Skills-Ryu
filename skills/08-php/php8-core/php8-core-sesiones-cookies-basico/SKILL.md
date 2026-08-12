---
name: php8-core-sesiones-cookies-basico
description: Sesiones y cookies · nivel Básico · PHP 8.3: fundamentos profesionales. Estado de usuario en el navegador de forma segura: sesiones, cookies HttpOnly/SameSite y expiración. Objetivo del nivel: sesiones y cookies básicas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sesiones-cookies"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Sesiones y cookies — Básico

## Qué hace este skill

Estado de usuario en el navegador de forma segura: sesiones, cookies HttpOnly/SameSite y expiración. En este nivel se entrega: **sesiones y cookies básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sesiones y cookies** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Iniciar sesiones PHP y guardar/leer datos de usuario
2. Crear cookies con expiración y dominio correctos
3. Explicar lifecycle: login, logout y expiración

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | sesiones y cookies básicas | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Iniciar sesiones PHP y guardar/leer datos de usuario · Crear cookies con expiración y dominio correctos · Explicar lifecycle: login, logout y expiración | lista | sí | 3-4 pasos |
| $criterios_clave | Los datos de sesión no contienen secretos ni datos sensibles · Logout limpia la sesión y la cookie | lista | sí | calidad verificable |
| $prompt_guia | Implementa login con sesiones PHP y cookie de recordarme con expiración segura | texto | no | "Sesiones y cookies" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los datos de sesión no contienen secretos ni datos sensibles
- [ ] Logout limpia la sesión y la cookie

## Ejemplos de prompts

- "Implementa login con sesiones PHP y cookie de recordarme con expiración segura"
- "Aplica Sesiones y cookies (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Los datos de sesión no contienen secretos ni datos sensibles"
- "Revisa mi php8-core y dime qué pasos de Sesiones y cookies me faltan en este nivel"