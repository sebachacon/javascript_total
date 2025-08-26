 function calcularlitros(){
        var elementoKM = document.getElementById("textokm");
        var textoKM = elementoKM.value;
        var cantkm = Number(textoKM);

        var cantLitros = Math.ceil(cantkm / 8.8);

        var resultado = document.getElementById("textoResultado");
        resultado.textContent = "Carga " + cantLitros + " litros de combustible";
    }