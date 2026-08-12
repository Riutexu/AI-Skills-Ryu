---
name: wordpress-instalacion-configuracion-basico
description: Instalación y configuración · nivel Básico · WordPress: temas y plugins. WordPress limpio y explotado: instalación local, wp-config, permalinks y estructura del core. Objetivo del nivel: instalar y configurar un WordPress local
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "instalacion-configuracion"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Instalación y configuración — Básico

## Qué hace este skill

WordPress limpio y explotado: instalación local, wp-config, permalinks y estructura del core. En este nivel se entrega: **instalar y configurar un WordPress local**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y configuración** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar WordPress en local (WAMP/Localwp)
2. Configurar wp-config.php, URLs y permalinks
3. Distinguir contenido vs código: páginas, temas, plugins

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | instalar y configurar un WordPress local | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Instalar WordPress en local (WAMP/Localwp) · Configurar wp-config.php, URLs y permalinks · Distinguir contenido vs código: páginas, temas, plugins | lista | sí | 3-4 pasos |
| $criterios_clave | El sitio local navega con permalinks limpios · El usuario ubica el contenido en BD y el diseño en el tema | lista | sí | calidad verificable |
| $prompt_guia | Instala y configura WordPress local con permalinks limpios y explícame la separación contenido/código | texto | no | "Instalación y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El sitio local navega con permalinks limpios
- [ ] El usuario ubica el contenido en BD y el diseño en el tema

## Ejemplos de prompts

- "Instala y configura WordPress local con permalinks limpios y explícame la separación contenido/código"
- "Aplica Instalación y configuración (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza El sitio local navega con permalinks limpios"
- "Revisa mi wordpress y dime qué pasos de Instalación y configuración me faltan en este nivel"