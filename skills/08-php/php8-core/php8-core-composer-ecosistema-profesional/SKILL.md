---
name: php8-core-composer-ecosistema-profesional
description: Composer: dependencias y autoload · nivel Profesional · PHP 8.3: fundamentos profesionales. Instalar, versionar y organizar dependencias con Composer: autoload PSR-4, scripts y auditoría. Objetivo del nivel: gobernanza de dependencias y monorepo
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "composer-ecosistema"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Composer: dependencias y autoload — Profesional

## Qué hace este skill

Instalar, versionar y organizar dependencias con Composer: autoload PSR-4, scripts y auditoría. En este nivel se entrega: **gobernanza de dependencias y monorepo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Composer: dependencias y autoload** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar versiones con composer-rector o constraintes cuidadosas
2. Auditar dependencias con composer audit y política de actualización
3. Estructurar un monorepo con paquetes con dependencias internas con path
4. Automatizar el bump de dependencias en CI con Dependabot/Renovate

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | gobernanza de dependencias y monorepo | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Centralizar versiones con composer-rector o constraintes cuidadosas · Auditar dependencias con composer audit y política de actualización · Estructurar un monorepo con paquetes con dependencias internas con path · Automatizar el bump de dependencias en CI con Dependabot/Renovate | lista | sí | 3-4 pasos |
| $criterios_clave | composer audit pasa sin vulnerabilidades conocidas en el lock · El monorepo publica todas las versiones de sus paquetes con un solo tag | lista | sí | calidad verificable |
| $prompt_guia | Implementa gobernanza de dependencias para mi monorepo PHP: auditoría en CI, bump automático y versiones por paquete | texto | no | "Composer: dependencias y autoload" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] composer audit pasa sin vulnerabilidades conocidas en el lock
- [ ] El monorepo publica todas las versiones de sus paquetes con un solo tag

## Ejemplos de prompts

- "Implementa gobernanza de dependencias para mi monorepo PHP: auditoría en CI, bump automático y versiones por paquete"
- "Aplica Composer: dependencias y autoload (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza composer audit pasa sin vulnerabilidades conocidas en el lock"
- "Revisa mi php8-core y dime qué pasos de Composer: dependencias y autoload me faltan en este nivel"