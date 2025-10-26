
let notas = [82, 50, 100, 90, 60] // Arra de notas para las funciones

function listarNotas() { // LISTA LAS NOTAS
    let listaNotas = document.getElementById("listaNotas") // Se crea una instancia hacia el contenedor de las notas (ul)
    for (let nota of notas) { // Recorre el array
        let lista = document.createElement("li") // Crea los elemento li en el ul para escribir las notas
        lista.innerText = nota // Escribe cada nota con li, creando la lista
        listaNotas.appendChild(lista) // Inserta dentro del ul los grupos de li, crea la lista de notas
    }
}

function calcularPromedio() { // CALCULA EL PROMEDIO
    let promedio = document.getElementById("promedio") // Se crea una instancia hacia el contenedor del promedio
    let suma = 0 // Almacenar la suma de notas
    for (let nota of notas) { // El for para recorrer cada valor del array notas
        suma += nota // Por cada nota se va sumando en la variable suma
    }
    promedio.textContent = suma / notas.length // Escribe en pantalla el promedio
    // Promedio es igual a suma de notas divido por la cantidad de notas
}

function notaMasAlta() { // BUSCA LA NOTA MÁS ALTA
    let notaAlta = document.getElementById("notaAlta") // Se crea una instancia hacia el contenedor de la nota mas alta
    let alta = 0 // alta almacenara la nota mas alta
    for (let nota of notas) { // Recorre el array
        if (nota > alta) { // Si una nota es mayor al valor de alta
            alta = nota // alta almacenara la nota mas alta gracias a esa comparacion con cada nota del array
        }
    }
    notaAlta.textContent = alta // Escribe en pantalla la nota más alta
}

function hayAplazados() { // CONSULTA SI HAY APLAZADOS
    let aplazo = document.getElementById("aplazados") // Se crea una instancia hacia el contenedor de aplazados
    for (let nota of notas) { // Recorre el array
        if (nota < 40) { // Si una nota es menor o igual a 40 habra una aplazada
            aplazo.textContent = "Sí" //Escribe en pantalla que hay aplazados
            return // Retorna en caso de que si haya aplazados
        } else {
            aplazo.textContent = "No" // Si no hay por defecto retornara que no hay aplazados
        }
    }
}