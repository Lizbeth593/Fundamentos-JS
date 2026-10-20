// --- FUNCIONES -----

let nombreProducto = "Celular Moto Edge 70 Fusion";

let precio = 404.6;

let descuento = 0.32;

function calcularDescuento(precio, descuento) {
  let precioFinal = precio - precio * descuento;

  console.log("Resumen de la compra ")
  console.log("Producto: " + nombreProducto);
  console.log("Precio original: $" + precio);
  console.log("Descuento: " + descuento * 100 + "%");
  console.log("Descuento del prodcuto: $" + precioFinal.toFixed(2));
  console.log("Envio Gratis ")
  
}

calcularDescuento(precio, descuento);
