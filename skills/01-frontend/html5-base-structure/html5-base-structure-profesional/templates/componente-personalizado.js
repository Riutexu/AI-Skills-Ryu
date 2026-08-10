/* componente-personalizado.js
   Custom element "tarjeta-precio" conforme a la spec de Web Components:
   shadow DOM, slots, atributos observables, eventos personalizados
   y limpieza de listeners en disconnectedCallback. */

const plantilla = document.createElement("template");
plantilla.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: "Segoe UI", system-ui, sans-serif;
      border: 1px solid var(--borde-tarjeta, #d1d5db);
      border-radius: 12px;
      padding: 1.25rem;
      background: var(--fondo-tarjeta, #ffffff);
      color: var(--texto-tarjeta, #111827);
    }
    h3 { margin: 0 0 0.25rem; font-size: 1rem; }
    .precio { font-size: 2rem; font-weight: 700; }
    .precio small { font-size: 0.85rem; font-weight: 400; color: #6b7280; }
    ::slotted(ul) { padding-left: 1.25rem; }
    button {
      width: 100%;
      margin-top: 1rem;
      padding: 0.6rem 1rem;
      font: inherit;
      font-weight: 600;
      border: 0;
      border-radius: 8px;
      background: var(--acento-tarjeta, #1d4ed8);
      color: #ffffff;
      cursor: pointer;
    }
    button:focus-visible { outline: 3px solid var(--enfoque-tarjeta, #f59e0b); outline-offset: 2px; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
  <h3 part="titulo"></h3>
  <p class="precio"><span part="precio"></span> <small></small></p>
  <slot name="caracteristicas"></slot>
  <button type="button" part="boton"></button>
`;

class TarjetaPrecio extends HTMLElement {
  static observedAttributes = ["titulo", "precio", "unidad", "etiqueta-boton", "deshabilitado"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(plantilla.content.cloneNode(true));
    this._boton = this.shadowRoot.querySelector("button");
  }

  connectedCallback() {
    this._boton.addEventListener("click", this._enClick);
    /* Si el contenido proyectado cambia, mantenemos el estado del botón */
    this._render();
  }

  disconnectedCallback() {
    this._boton.removeEventListener("click", this._enClick);
  }

  attributeChangedCallback(nombre, anterior, nuevo) {
    if (anterior === nuevo) return;
    this._render();
  }

  _enClick = () => {
    /* API pública: evento que burbujea hacia fuera del componente */
    const detalle = {
      titulo: this.getAttribute("titulo") || "",
      precio: this.getAttribute("precio") || "",
      id: this.id || null,
    };
    this.dispatchEvent(
      new CustomEvent("tarjeta-seleccionada", {
        bubbles: true,
        composed: true,
        detail: detalle,
      })
    );
  };

  _render() {
    if (!this.shadowRoot) return;
    const q = (selector) => this.shadowRoot.querySelector(selector);
    q("[part='titulo']").textContent = this.getAttribute("titulo") || "";
    q("[part='precio']").textContent = this.getAttribute("precio") || "";
    q("[part='precio'] + small").textContent = this.getAttribute("unidad") || "";
    q("[part='boton']").textContent = this.getAttribute("etiqueta-boton") || "Elegir";
    q("[part='boton']").disabled = this.hasAttribute("deshabilitado");
  }
}

if (!customElements.get("tarjeta-precio")) {
  customElements.define("tarjeta-precio", TarjetaPrecio);
}

export { TarjetaPrecio };