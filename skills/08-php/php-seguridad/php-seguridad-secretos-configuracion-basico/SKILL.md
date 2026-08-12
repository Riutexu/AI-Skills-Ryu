---
name: php-seguridad-secretos-configuracion-basico
description: Secretos y configuración · nivel Básico · Seguridad web en PHP. Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. Objetivo del nivel: sacar secretos del código
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "secretos-configuracion"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Secretos y configuración — Básico

## Qué hace este skill

Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. En este nivel se entrega: **sacar secretos del código**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Secretos y configuración** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mover credenciales a variables de entorno
2. Crear .env.example sin secretos
3. Añadir .env a .gitignore

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | sacar secretos del código | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Mover credenciales a variables de entorno · Crear .env.example sin secretos · Añadir .env a .gitignore | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna credencial en repos (grep verificado) · El .env.example documenta cada variable | lista | sí | calidad verificable |
| $prompt_guia | Saca las credenciales de mi código a variables de entorno con .env.example | texto | no | "Secretos y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna credencial en repos (grep verificado)
- [ ] El .env.example documenta cada variable

## Ejemplos de prompts

- "Saca las credenciales de mi código a variables de entorno con .env.example"
- "Aplica Secretos y configuración (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Ninguna credencial en repos (grep verificado)"
- "Revisa mi php-seguridad y dime qué pasos de Secretos y configuración me faltan en este nivel"