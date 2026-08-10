---
name: testing-calidad-basico
description: Primeros tests con Vitest: tipos de testing, describe/it/expect, pruebas de funciones puras y ejecucion con watch. Usar al iniciar la cobertura de tests de un proyecto.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "testing-calidad"
  nivel: basico
  stack: "vitest, typescript, node"
---

# Testing Básico: Primeros Tests con Vitest

## Qué hace este skill

Introduce a la disciplina del testing: qué tipos de test existen y cuándo usarlos, cómo escribir assertions claras con Vitest (describe/it/expect) y cómo testear funciones puras de forma determinista. Configura la ejecución local con `--watch` y deja un proyecto listo para crecer en cobertura.

## Cuándo usarlo

- Al arrancar un proyecto sin tests y querer montar la infraestructura de Vitest.
- Al añadir tests unitarios para utilidades, helpers y funciones puras.
- Cuando se pide "hacer un test para esta función" con lógica simple de entrada/salida.
- Al correr la suite localmente (`vitest run` / `vitest --watch`) y entender resultados.

## Requisitos previos

- Proyecto Node con npm/pnpm/yarn y TypeScript (recomendado) o JavaScript.
- `vitest` instalado como dependencia de desarrollo.
- Conocimiento básico de funciones y módulos ES.

## Workflow paso a paso

1. Instala Vitest: `npm i -D vitest` y añade el script `"test": "vitest"` y `"test:run": "vitest run"` al `package.json`.
2. Si el proyecto es de Vite/Next, copia la config base de `templates/vitest.config.ts` y ajústala a la estructura del proyecto.
3. Identifica una función pura (misma entrada, misma salida, sin efectos externos) en `src/` para empezar.
4. Crea el archivo de test junto al fuente o en `src/__tests__/` siguiendo la convención del proyecto (`suma.test.ts` en este caso).
5. Escribe la estructura del test: `describe` agrupa el conjunto, `it` define cada caso concreto, `expect` hace la afirmación.
6. Testea primero los casos felices (entradas típicas) y después casos límite (vacío, cero, negativos, tipos raros).
7. Ejecuta una sola vez con `vitest run` o en modo watch con `vitest` (o `npm test`), y corrige hasta que todo pase en verde.
8. Revisa los mensajes de fallo: `expected X, received Y` te dice exactamente qué divergió.
9. Añade un test por cada caso de borde relevante y ejecuta de nuevo la suite completa antes de cerrar.
10. Al finalizar, marca los ítems del checklist y reporta al usuario cuántos tests hay y cuáles pasan.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `ruta_modulo` | Ruta del módulo a testear | string | Sí | `src/utils/formato.ts` |
| `ruta_test` | Ruta del archivo de test | string | No | `src/utils/formato.test.ts` |
| `framework` | vitest, jest u otro | string | No | `vitest` |
| `modo_ejecucion` | run (una vez) o watch | string | No | `watch` |
| `casos_borde` | Lista de casos límite a cubrir | array | No | `["string vacio", "negativo", "null"]` |
| `cobertura_minima` | Umbral de cobertura exigido | number | No | `80` |
| `con_jsdom` | Si se requiere entorno DOM | boolean | No | `false` |

## Reglas y checklist

- [ ] Vitest instalado como devDependency y scripts `test`/`test:run` configurados.
- [ ] Un test por función pura: cubre caso feliz y casos límite (vacío, cero, negativos).
- [ ] Los tests son deterministas: sin fechas/hora actual, sin números aleatorios ni red.
- [ ] Nombres legibles: `describe` describe el módulo y `it` describe el comportamiento esperado.
- [ ] Una sola aserción o un conjunto coherente por test; nada de "test gigante que lo cubre todo".
- [ ] Suite ejecutada con `vitest run` y todo en verde antes de terminar.
- [ ] No se modifica código de producción para "hacer pasar" el test (sin false positives).
- [ ] Mensaje final: nº de tests, estado y cobertura aproximada.

## Ejemplos de prompts

- "Configura Vitest en este proyecto, añade los scripts y crea un test básico para `src/utils/format.ts`."
- "Escribe tests para la función `calcularIva(precio: number): number` cubriendo cero, negativos y decimales."
- "Ejecuta la suite en modo watch y corrije los tests que fallen, explicando cada fallo."
- "¿Qué tipos de test hay y cuál corresponde para esta función? Aplica el más simple que aporte valor."
- "Revisa `src/validators/` y escribe un test por cada validator siguiendo los casos límite típicos."

## Plantillas y recursos

- [Configuración base de Vitest](templates/vitest.config.ts)
- [Test de utilidad con Vitest](templates/utilidad.test.ts)
- [Checklist de verificación del nivel básico](resources/checklist.md)