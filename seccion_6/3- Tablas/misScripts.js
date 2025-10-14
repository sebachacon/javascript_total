 function multiplicar() 
{

    let elementotexto = document.getElementById("textoTablas");
    let textoNumero = elementotexto.value;
    let numeroTabla = Number(textoNumero);

    let elementoTabla = document.getElementById("listadeTablas");
    elementoTabla.innerText = "";

    for(x = 1; x <=10; x++){
        let numeroResultado = numeroTabla * x;
        let textoResultado = numeroTabla + "por" + x + " es igual a " + numeroResultado

        let itemlista = document.createElement("li");
        itemlista.innerText = textoResultado;
        elementoTabla.appendChild(itemlista);



    }

}