# Checklist de calidad: estructura HTML5 nivel básico

## Base del documento

- [ ] `<!DOCTYPE html>` en la primera línea del archivo.
- [ ] `<html lang="es">` con el idioma real del contenido.
- [ ] `meta charset="UTF-8"` en el `head`, antes del título.
- [ ] Viewport `width=device-width, initial-scale=1.0` presente.
- [ ] `title` único, descriptivo y de 50-60 caracteres.
- [ ] `meta description` de 120-160 caracteres con llamada a la acción.

## Semántica

- [ ] Un solo `h1` y jerarquía de encabezados sin saltos.
- [ ] `header` usado para la cabecera de la página, no para secciones internas.
- [ ] `nav` con la navegación principal en una lista (`ul`).
- [ ] `main` contiene únicamente el contenido único de la página.
- [ ] `section` agrupa bloques con título propio (`aria-labelledby` cuando aplique).
- [ ] `article` usado para contenidos autocontenidos (receta, noticia, producto).
- [ ] `aside` reservado a información complementaria.
- [ ] `footer` con autoría, contacto y enlaces legales.
- [ ] Enlaces con texto descriptivo y `mailto:`/`tel:` en datos de contacto.

## Formularios

- [ ] Cada campo con `label` asociado vía `for`/`id`.
- [ ] `placeholder` solo como ayuda, nunca como sustituto del label.
- [ ] Validación nativa: `required`, `type="email"`, `type="url"`, `minlength`, `pattern`.
- [ ] `autocomplete` en nombre, email, teléfono y web.
- [ ] `fieldset`/`legend` agrupando bloques de campos.
- [ ] Mensajes de ayuda (`title` o texto) en campos con `pattern`.

## Formato

- [ ] Indentación de 2 espacios consistente.
- [ ] Una etiqueta de apertura y cierre por línea en anidamientos.
- [ ] Atributos con comillas dobles.
- [ ] El documento pasa el validador del W3C sin errores de estructura.
- [ ] Prueba real: el formulario envía y los campos inválidos se señalan solos.