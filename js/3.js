// Contar cuantas vocales tiene una palabra


function ejercicio3(palabra) {
    let contador = 0;
    const vocales = "aeiou";

    // Todo en minúscula para poder comparar
    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }

    return contador;
}

