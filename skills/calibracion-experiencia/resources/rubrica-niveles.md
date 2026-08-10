# Rúbrica de niveles de experiencia

Usada por la skill `calibracion-experiencia` para clasificar con honestidad el nivel del usuario. La clasificación se hace por EVIDENCIA (lo que el usuario dice y demuestra), no por título.

## Nivel 0 — Autoaprendiz absoluto

**Pistas**: "es mi primera vez", "no he hecho nada aún", "ni sé por dónde empezar".
**Registro**: cero jerga; cada concepto con analogía; pasos mínimos; celebrar pequeños logros; muchos ejemplos ejecutables.
**Trampa de credibilidad**: copiar código con características que no sepa explicar.

## Nivel 1 — Autoaprendiz con base

**Pistas**: lleva días/semanas, conoce la teoría pero no ha terminado proyectos.
**Registro**: explicar cada patrón; código comentado; evitar librerías sin explicarlas; fomentar el "prueba y toca".
**Trampa de credibilidad**: entregar arquitecturas de 3 capas para tareas de 10 líneas.

## Nivel 2 — Junior en formación

**Pistas**: ha completado tutos y mini-proyectos; sabe lo que NO sabe ("esto no lo domino").
**Registro**: buenas prácticas visibles; explicar decisiones; mostrar alternativas; incitar a leer la documentación.
**Trampa de credibilidad**: importar un framework de batería para un caso sencillo (sobre-ingeniería).

## Nivel 3 — Junior sólido

**Pistas**: trabaja con un stack concreto, comete errores reales los identifica.
**Registro**: código correcto con estándares; reviews ligeras; testing básico si aplica.
**Trampa de credibilidad**: mezclar estilos de distintos tutoriales (código "frankenstein").

## Nivel 4 — Intermedio

**Pistas**: decide entre opciones técnicas y puede justificarlo; lee documentación por gusto.
**Registro**: patrones del ecosistema; trade-offs; mensajería de errores útil; refactors con propósito.
**Trampa de credibilidad**: arquitectura "de libro" sin considerar el caso real (YAGNI).

## Nivel 5 — Intermedio avanzado

**Pistas**: diseña soluciones completas; conoce errores comunes del stack y cómo evitarlos.
**Registro**: testing real; performance mencionada; seguridad básica; estructura de carpetas coherente.
**Trampa de credibilidad**: resolver con parches donde un refactor era la respuesta.

## Nivel 6 — Senior

**Pistas**: habla de escalabilidad, mantenibilidad, deuda técnica; revisa trabajo ajeno.
**Registro**: código de producción con errores manejados, límites, logs; decisiones con costos.
**Trampa de credibilidad**: sobre-documentar lo evidente (documentación "por relleno").

## Nivel 7 — Senior avanzado

**Pistas**: particiona problemas en sistemas; negocia con stakeholders técnicos.
**Registro**: arquitecturas por dominios; observabilidad; CI/CD como parte del código.
**Trampa de credibilidad**: sobre-ingeniería por prestigio (patrones donde no aportan).

## Nivel 8-9 — Arquitecto

**Pistas**: define estándares de equipo; evalúa plataformas; conoce RFCs y alternativas.
**Registro**: trade-offs a nivel sistema; evolución planificada; documentación de decisiones (ADRs).
**Trampa de credibilidad**: paralizar con análisis infinito (análisis-parálisis).

## Nivel 10 — Referente técnico

**Pistas**: escribe sobre el tema, habla en conferencias, sus decisiones se convierten en estándar.
**Registro**: trabajo de referencia; contribuciones públicas; mentoring.

## Cómo clasificar

1. Busca EVIDENCIA en las respuestas: ejemplos concretos > palabras técnicas.
2. Ante la duda, baja UN nivel: es mejor explicar de más que entregar de menos.
3. La clasificación es POR TAREA: el mismo usuario puede ser nivel 2 en React y nivel 5 en SQL.
4. Confirma siempre con el usuario: "te clasifico como X, ¿me corriges?"