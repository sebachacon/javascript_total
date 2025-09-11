function verificar() {
let elementorespuesta = document.getElementById("desicion");

        let elemetoEdad = document.getElementById("textoEdad");
        let edad = parseInt(elemetoEdad.value);
        
            if (edad < 18) {
                elementorespuesta.textContent = "Tienes" + edad
                 + "años,te falta " +  (18 - parseInt(edad)).toString() +
                  " años para ser mayor de edad";

            } else {
                if ( edad >= 18 && edad < 21) {

                    elementorespuesta.textContent = "tienes " + 
                    edad + " años,te falta "  + (21 - parseInt(edad)).toString() + 
                    " años para " + 21 + " , no puesdes comprar licor";
                } else {
                elementorespuesta.textContent = " Ya puedes comprar licor";
            }
        }
            
}
    