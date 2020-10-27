function eliminarProducto() {

  if (confirm("Deseas eliminar el producto")) {
    mensaje = "Aceptar";
    document.getElementById("producto").innerHTML = "";
  } else {
    mensaje = "Cancelar";
  }

}

function total() {
  event.preventDefault();
  var precio = document.getElementById("precio").innerHTML;
  var cantidad = document.getElementById("cantidad").value;
  var total;

  total = cantidad * precio;
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
  cajaTotal();
}

function cajaTotal() {
  event.preventDefault();
  var precio = document.getElementById("precio").innerHTML;
  var cantidad = document.getElementById("cantidad").value;
  var total;

  total = cantidad * precio;
  document.getElementById("subtotal1").innerHTML = "$" + total.toFixed(2);
  document.getElementById("subtotal2").innerHTML = "$" + total.toFixed(2);
}

function productoCarrito() {
  const nuevoProductoCarrito = [];
  nuevoProductoCarrito.forEach(producto => {
    
  })
}