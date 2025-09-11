function Genero(genero){
    let edad = document.getElementById("LaEdad").value;
    let pelicula = document.getElementById("Pelicula");
 
    switch(genero) {
        case 'drama':
            if (edad < 13) {
                pelicula.textContent = "Casablanca";
            } else {
                if (edad >= 13 && edad<=15) {
                    pelicula.textContent = "The Shawshank Redemption";
                } else {
                    pelicula.textContent = "Taxi Driver";
                }
            }
            break;
        case 'comedia':
            if (edad < 13) {
                pelicula.textContent = "Back to the Future";
            } else {
                if (edad >= 13 && edad<=15) {
                    pelicula.textContent = "The Truman Show";
                } else {
                    pelicula.textContent = "The Wolf of Wall Street";
                }
            }
            break;
        case 'musical':
            if (edad < 13) {
                pelicula.textContent = "La La Land";
            } else {
                if (edad>= 13 && edad<=15) {
                    pelicula.textContent = "Les Miserables";
                } else {
                    pelicula.textContent = "The Rocky Horror Picture Show";
                }
            }
            break;
        case 'crimen':
            if (edad < 13) {
                pelicula.textContent = "No hay opciones para esta edad";
            } else {
                if (edad>= 13 && edad<=15) {
                    pelicula.textContent = "El Secreto de tus Ojos";
                } else {
                    pelicula.textContent = "The Godfather";
                }
            }
            break;
    }
}