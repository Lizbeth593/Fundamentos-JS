// ===== TEMA: MANIPULACIÓN DEL DOM =====

const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("productos");
const mensaje = document.getElementById("mensaje");

export function mostrarMensaje(texto) {
    mensaje.textContent = texto;
}

function crearTarjeta(producto) {
    const card = document.createElement("article");
    card.classList.add("card");
    card.style.border = "1px solid #ccc";
    card.style.padding = "12px";
    card.style.margin = "8px";
    card.style.display = "inline-block";
    card.style.width = "200px";
    card.style.verticalAlign = "top";

    const img = document.createElement("img");
    img.src = producto.thumbnail;
    img.alt = producto.title;
    img.width = 150;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.title;

    const precio = document.createElement("p");
    precio.textContent = `$${Number(producto.price).toFixed(2)}`;

    card.append(img, titulo, precio);

    if (producto.discountPercentage) {
        const descuento = document.createElement("small");
        descuento.textContent = `${Math.round(producto.discountPercentage)}% OFF`;
        descuento.style.color = "green";
        card.appendChild(descuento);
    }

    card.addEventListener("click", () => {
        card.classList.toggle("seleccionada");
        card.style.background = card.classList.contains("seleccionada") ? "#fff8b3" : "white";
    });

    return card;
}

export function renderizarProductos(productos) {
    contenedor.innerHTML = ""; // limpiar resultados anteriores
    productos.forEach((p) => contenedor.appendChild(crearTarjeta(p)));
}

export function renderizarHistorial(historial, alClic) {
    let caja = document.getElementById("historial");

    if (!caja) {
        caja = document.createElement("div");
        caja.id = "historial";
        formulario.after(caja);
    }

    caja.innerHTML = "";
    if (historial.length === 0) return;

    const etiqueta = document.createElement("span");
    etiqueta.textContent = "Búsquedas recientes: ";
    caja.appendChild(etiqueta);

    historial.forEach((termino) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = termino;
        boton.addEventListener("click", () => alClic(termino));
        caja.appendChild(boton);
    });
}