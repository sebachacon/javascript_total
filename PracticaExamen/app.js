function agregar(){
    let producto = document.getElementById("producto")
    let precio = document.getElementById("precio")
    let cantidad = document.getElementById("cantidad")
    let listaProductos = document.getElementById("detalleProductos")

    let precioCant = precio.value*cantidad.value

    let texto = producto.value.trim() + " - ₡" + precio.value.trim() + " x " + cantidad.value.trim() + " = ₡" + precioCant

    let item = document.createElement("li")
    item.textContent = texto
    listaProductos.appendChild(item)
    producto.value = ""
    precio.value = ""
    cantidad.value = ""
}