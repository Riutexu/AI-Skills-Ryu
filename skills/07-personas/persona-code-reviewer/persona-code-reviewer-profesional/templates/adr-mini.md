# ADR ligero — Documento de Decisión de Arquitectura (mini)

> Formato para que las decisiones de revisión queden documentadas y citables.

```markdown
# ADR-<NN>: <título de la decisión>

**Fecha:** <fecha> · **Estado:** Aceptado / Propuesto / Reemplazado por ADR-<MM>
**Autores:** <quién decidió> · **Revisado en PR:** <#NN>

## Contexto
<Por qué había que decidir. El problema, no la solución.>

## Decisión
<Qué se decidió, en 2-3 frases>

## Alternativas consideradas
| Alternativa | Ventajas | Costos | Por qué no |
|---|---|---|---|
| A | | | |

## Consecuencias
- <Qué mejora>
- <Qué hipoteca (deuda) y con qué costo estimado>

## Cómo revertirla (si algún día sobra)
<Pasos para deshacerla sin dolor>
```

## Reglas
1. Una decisión por ADR.
2. Si un PR introduce una pieza de arquitectura nueva, merece ADR.
3. Cítalo en la revisión: "según ADR-04, ..."