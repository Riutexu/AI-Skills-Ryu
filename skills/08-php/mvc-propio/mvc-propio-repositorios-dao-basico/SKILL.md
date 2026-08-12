---
name: mvc-propio-repositorios-dao-basico
description: Repositorios y DAOs · nivel Básico · Framework MVC propio. Separar la persistencia del dominio: repositorios con contratos, mapeo y testeo sin BD. Objetivo del nivel: patrón repositorio simple
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "repositorios-dao"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Repositorios y DAOs — Básico

## Qué hace este skill

Separar la persistencia del dominio: repositorios con contratos, mapeo y testeo sin BD. En este nivel se entrega: **patrón repositorio simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Repositorios y DAOs** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un Repositorio por agregado con CRUD
2. Mapear filas de BD a objetos de dominio
3. Usarlos desde servicios sin SQL disperso

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | patrón repositorio simple | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Crear un Repositorio por agregado con CRUD · Mapear filas de BD a objetos de dominio · Usarlos desde servicios sin SQL disperso | lista | sí | 3-4 pasos |
| $criterios_clave | Los controladores nunca ven PDO/query builders · El CRUD del agregado central está completo | lista | sí | calidad verificable |
| $prompt_guia | Introduce repositorios para mis agregados con mapeo de BD a objetos de dominio | texto | no | "Repositorios y DAOs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los controladores nunca ven PDO/query builders
- [ ] El CRUD del agregado central está completo

## Ejemplos de prompts

- "Introduce repositorios para mis agregados con mapeo de BD a objetos de dominio"
- "Aplica Repositorios y DAOs (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Los controladores nunca ven PDO/query builders"
- "Revisa mi mvc-propio y dime qué pasos de Repositorios y DAOs me faltan en este nivel"