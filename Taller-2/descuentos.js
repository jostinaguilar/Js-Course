function calcularPrecioConDescuento(precio, descuento) {
  let precioFinal = (precio * (100 - descuento)) / 100;
  return precioFinal;
}

function calcularDescuento() {
  const precio = document.getElementById("precio").value;
  const descuento = document.getElementById("descuento").value;

  const precioFinal = calcularPrecioConDescuento(precio, descuento);
  const p = document.getElementById("Resultado");
  p.innerText = "El precio con descuento es S/" + precioFinal;
}
