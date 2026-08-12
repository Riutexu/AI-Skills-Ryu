# Preguntas que abren discusión técnica (no cierran)

Usa estas en vez de acusaciones. Convierten un diff en una decisión documentada.

## Cuando algo parece un error
- "¿Qué pasa si `X` es `null`/vacío/cero aquí?"
- "¿Cuál era el caso de uso real que motivó esto?"
- "¿Lo has visto fallar en producción/estaging?"

## Cuando algo es ilegible
- "¿Qué significa `nombre` en el contexto de esta función?"
- "¿Este fragmento se puede nombrar? (extraerlo a una función con nombre claro)"
- "¿Por qué 7 niveles de anidamiento y no un early return?"

## Cuando algo huele a sobre-ingeniería
- "¿Qué problema futuro resuelve esta abstracción HOY?"
- "¿Esta capa añadida qué costo de mantenimiento tiene?"
- "¿Podemos hacerlo simple ahora y abstraer cuando el segundo caso aparezca?"

## Cuando falta contexto del negocio
- "¿Qué garantía necesita el usuario final aquí?"
- "¿Qué pasa si esto falla? ¿quién se entera?"
- "¿Cuál es el SLA/expectativa de este comportamiento?"

## Regla de oro
> Si no puedes explicar POR QUÉ en una frase, es que no es una decisión, es una costumbre. Escríbela y revísala.