// script.js — Lista de compras con JavaScript moderno (ES6+)
// Estado: única fuente de verdad de la aplicación.
// Se reasigna con cada alta/baja, por eso es let (no const).

let productos = [
  { id: 1, nombre: "Manzanas" },
  { id: 2, nombre: "Pan integral" },
];

const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#entrada");
const lista = document.querySelector("#lista");
const mensajeVacio = document.querySelector("#mensaje-vacio");

// Renderiza la lista a partir del estado. Usa map para transformar
// cada producto en un elemento li del DOM.
function renderizar() {
  lista.replaceChildren();

  const items = productos.map((producto) => {
    const li = document.createElement("li");
    const texto = document.createElement("span");
    const botonEliminar = document.createElement("button");

    texto.textContent = producto.nombre;
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "eliminar";
    botonEliminar.addEventListener("click", () => eliminarProducto(producto.id));

    li.append(texto, botonEliminar);
    return li;
  });

  lista.append(...items);

  // Filtro para el estado vacío: filter devuelve los productos existentes.
  const hayProductos = productos.length > 0;
  mensajeVacio.hidden = hayProductos;
}

function agregarProducto(nombre) {
  const sinDuplicados = productos.filter(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (sinDuplicados.length > 0) {
    alert("El producto ya está en la lista.");
    return;
  }
  const siguienteId = productos.reduce((mayor, producto) => {
    return producto.id > mayor ? producto.id : mayor;
  }, 0) + 1;

  productos = [...productos, { id: siguienteId, nombre }];
  renderizar();
}

function eliminarProducto(id) {
  productos = productos.filter((producto) => producto.id !== id);
  renderizar();
}

// Evento submit del formulario: valida y agrega, luego limpia la entrada.
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = entrada.value.trim();
  if (nombre === "") {
    alert("Escribe el nombre del producto.");
    return;
  }
  agregarProducto(nombre);
  entrada.value = "";
  entrada.focus();
});

renderizar();