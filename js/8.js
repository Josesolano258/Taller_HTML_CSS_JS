// Invertir un texto letra por letra

function ejercicio8(texto) {

    if (!texto) {
        return "Ingrese un texto válido.";
    }

    let invertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    return `Texto invertido: ${invertido}`;
}
