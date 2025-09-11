function evaluarCompra(cantidadDisponible){

    let elementoRespuesta = document.getElementById("decision");

    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadCompra = elementoCantidad.value;

    if (cantidadCompra <= cantidadDisponible){
        elementoRespuesta.textContent = "Compraste" + cantidadCompra
         + "hay disponible aun" + 
        (cantidadDisponible - parseInt(cantidadCompra)).toString();;
    }
}