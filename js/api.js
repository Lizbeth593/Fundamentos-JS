
export function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ===== TEMA: API =====
const USAR_MERCADOLIBRE = false;

export async function buscarProductos(texto) {
    console.log("2) Inicia la petición fetch para:", texto);

    const url = USAR_MERCADOLIBRE
        ? `https://api.mercadolibre.com/sites/MEC/search?q=${encodeURIComponent(texto)}`
        : `https://dummyjson.com/products/search?q=${encodeURIComponent(texto)}&limit=12`;

    const respuesta = await fetch(url);
    console.log("3) Llegó la respuesta, status:", respuesta.status);

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los productos");
    }

    const datos = await respuesta.json();
    const lista = USAR_MERCADOLIBRE ? datos.results : datos.products;
    console.log("4) JSON convertido, resultados:", lista.length);
    return lista;
}