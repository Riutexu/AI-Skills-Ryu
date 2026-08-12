---
name: mvc-propio-repositorios-dao-avanzado
description: Repositorios y DAOs · nivel Avanzado · Framework MVC propio. Separar la persistencia del dominio: repositorios con contratos, mapeo y testeo sin BD. Objetivo del nivel: contratos y consultas de dominio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "repositorios-dao"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Repositorios y DAOs — Avanzado

## Qué hace este skill

Separar la persistencia del dominio: repositorios con contratos, mapeo y testeo sin BD. En este nivel se entrega: **contratos y consultas de dominio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Repositorios y DAOs** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir interfaces de repositorio (contrato del dominio)
2. Implementar consultas de dominio (specifications básicas)
3. Criterios de paginación y filtrado como tipos
4. Probar repositorios contra SQLite/fakes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | contratos y consultas de dominio | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Definir interfaces de repositorio (contrato del dominio) · Implementar consultas de dominio (specifications básicas) · Criterios de paginación y filtrado como tipos · Probar repositorios contra SQLite/fakes | lista | sí | 3-4 pasos |
| $criterios_clave | Las interfaces de repositorio no filtran detalles de persistencia · Los filtros se prueban sin BD real | lista | sí | calidad verificable |
| $prompt_guia | Define los contratos de repositorio de mi dominio con criterios tipados y tests con fakes | texto | no | "Repositorios y DAOs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las interfaces de repositorio no filtran detalles de persistencia
- [ ] Los filtros se prueban sin BD real

## Ejemplos de prompts

- "Define los contratos de repositorio de mi dominio con criterios tipados y tests con fakes"
- "Aplica Repositorios y DAOs (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Las interfaces de repositorio no filtran detalles de persistencia"
- "Revisa mi mvc-propio y dime qué pasos de Repositorios y DAOs me faltan en este nivel"