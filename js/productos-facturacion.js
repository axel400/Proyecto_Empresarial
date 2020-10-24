function producto_cantidad(){
    event.preventDefault();
    var precio = document.getElementById("precio").innerHTML;
    var cantidad = document.getElementById("cantidad").value;
    var total ;
    total = cantidad*precio ;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}