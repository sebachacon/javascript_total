
let notas = [82, 50, 100, 90, 60] 

function listarNotas() { 
    let listaNotas = document.getElementById("listaNotas") 
    for (let nota of notas) { 
        let lista = document.createElement("li")
        lista.innerText = nota 
        listaNotas.appendChild(lista) 
    }
}

function calcularPromedio() {
    let promedio = document.getElementById("promedio")
    let suma = 0 
    for (let nota of notas) { 
        suma += nota 
    }
    promedio.textContent = suma / notas.length 

}

function notaMasAlta() { 
    let notaAlta = document.getElementById("notaAlta") 
    let alta = 0 
    for (let nota of notas) { 
        if (nota > alta) { 
            alta = nota 
        }
    }
    notaAlta.textContent = alta 
}

function hayAplazados() { 
    let aplazo = document.getElementById("aplazados") 
    for (let nota of notas) { 
        if (nota < 40) {
            aplazo.textContent = "Sí" 
            return 
        } else {
            aplazo.textContent = "No"
        }
    }
}