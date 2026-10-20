// ===== TEMA: MÓDULOS  =====
import { buscarProductos, esperar } from "./api.js";
import {
    guardarUltimaBusqueda,
    obtenerUltimaBusqueda,
    agregarAlHistorial,
    obtenerHistorial,
} from "./storage.js";
import { mostrarMensaje, renderizarProductos, renderizarHistorial } from "./dom.js";

const formulario = document.getElementById("formulario");
const inputBusqueda = document.getElementById("busqueda");

async function ejecutarBusqueda(termino) {
    if (!termino) {
        mostrarMensaje("Escribe algo para buscar.");
        return;
    }

    mostrarMensaje("Buscando...");
    inputBusqueda.value = termino;

    try {
        await esperar(500);
        const productos = await buscarProductos(termino);

        if (productos.length === 0) {
            mostrarMensaje(`No se encontraron resultados para "${termino}".`);
            renderizarProductos([]);
            return;
        }

        mostrarMensaje(`${productos.length} resultados para "${termino}"`);
        renderizarProductos(productos);

        // Local Storage
        guardarUltimaBusqueda(termino);
        const historial = agregarAlHistorial(termino);
        renderizarHistorial(historial, ejecutarBusqueda);
    } catch (error) {
        mostrarMensaje("Ocurrió un error al buscar. Intenta de nuevo.");
    }
}


formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 
    ejecutarBusqueda(inputBusqueda.value.trim());
});


renderizarHistorial(obtenerHistorial(), ejecutarBusqueda);
const ultima = obtenerUltimaBusqueda();
if (ultima) ejecutarBusqueda(ultima);


