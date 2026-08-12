---
name: php8-core-sesiones-cookies-avanzado
description: Sesiones y cookies · nivel Avanzado · PHP 8.3: fundamentos profesionales. Estado de usuario en el navegador de forma segura: sesiones, cookies HttpOnly/SameSite y expiración. Objetivo del nivel: endurecer sesiones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sesiones-cookies"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Sesiones y cookies — Avanzado

## Qué hace este skill

Estado de usuario en el navegador de forma segura: sesiones, cookies HttpOnly/SameSite y expiración. En este nivel se entrega: **endurecer sesiones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sesiones y cookies** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar session.cookie_httponly, samesite=lax y secure
2. Rotar session id tras login y en intervalos
3. Almacenar sesiones en BD/Redis para multi-server
4. Fijar timeouts de inactividad y absolutos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | endurecer sesiones | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Configurar session.cookie_httponly, samesite=lax y secure · Rotar session id tras login y en intervalos · Almacenar sesiones en BD/Redis para multi-server · Fijar timeouts de inactividad y absolutos | lista | sí | 3-4 pasos |
| $criterios_clave | La cookie de sesión es HttpOnly+SameSite en producción · Dos servidores comparten sesión sin reinicios | lista | sí | calidad verificable |
| $prompt_guia | Endurece mis sesiones: flags de cookie, rotación de session id y almacenamiento en Redis | texto | no | "Sesiones y cookies" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cookie de sesión es HttpOnly+SameSite en producción
- [ ] Dos servidores comparten sesión sin reinicios

## Ejemplos de prompts

- "Endurece mis sesiones: flags de cookie, rotación de session id y almacenamiento en Redis"
- "Aplica Sesiones y cookies (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza La cookie de sesión es HttpOnly+SameSite en producción"
- "Revisa mi php8-core y dime qué pasos de Sesiones y cookies me faltan en este nivel"