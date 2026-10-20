// ===== TEMA: LOCAL STORAGE =====
const CLAVE_ULTIMA = "ultimaBusqueda";
const CLAVE_HISTORIAL = "historialBusquedas";

export function guardarUltimaBusqueda(termino) {
    localStorage.setItem(CLAVE_ULTIMA, termino);
}

export function obtenerUltimaBusqueda() {
    return localStorage.getItem(CLAVE_ULTIMA) || "";
}

export function obtenerHistorial() {
    const datos = localStorage.getItem(CLAVE_HISTORIAL);
    return datos ? JSON.parse(datos) : [];
}

export function agregarAlHistorial(termino) {
    let historial = obtenerHistorial();
    historial = historial.filter((t) => t !== termino); // evita repetidos
    historial.unshift(termino);                          // lo pone primero
    historial = historial.slice(0, 5);                   // máximo 5
    localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historial));
    return historial;
}

export function borrarHistorial() {
    localStorage.removeItem(CLAVE_HISTORIAL);
}