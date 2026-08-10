# Checklist — arquitectura-codigo-basico

## Estructura de carpetas

- [ ] Todo el código fuente vive en `src/`
- [ ] Subcarpetas por responsabilidad: `components/`, `pages/`, `services/`, `utils/`
- [ ] `utils/` contiene solo funciones puras sin dependencia del framework
- [ ] Los servicios que llaman APIs están centralizados en `services/`
- [ ] Cada carpeta tiene un propósito documentado en el README
- [ ] El árbol actual coincide con el documentado

## Funciones

- [ ] Cada función hace una sola cosa
- [ ] Funciones de máximo 20 líneas (divididas cuando lo superan)
- [ ] Un solo nivel de abstracción por función
- [ ] Máximo 3 argumentos (o un objeto de opciones)
- [ ] Early returns para casos de error y límite
- [ ] Sin funciones duplicadas: la lógica común está extraída

## Nombres

- [ ] Funciones con verbos que expresan intención
- [ ] Booleanos con prefijos `es`/`tiene`/`puede`
- [ ] Arrays en plural y sustantivos concretos
- [ ] Constantes en UPPER_SNAKE_CASE y clases en PascalCase
- [ ] Archivos en kebab-case

## Comentarios

- [ ] Los comentarios explican el porqué de las decisiones
- [ ] No hay comentarios que repitan el código
- [ ] No hay código muerto comentado
- [ ] Los casos límite y formatos de datos están documentados

## Verificación

- [ ] Un archivo de 400 líneas fue dividido en varios de responsabilidad única
- [ ] Un nombre ambiguo (`d`, `procesar`) fue renombrado con intención
- [ ] Un compañero encontró un archivo concreto sin ayuda usando solo el árbol