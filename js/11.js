// Dibuja una pirámide con asteriscos


function ejercicio11(altura) {

    if (isNaN(altura) || altura <= 0) {
        return "Ingrese una altura válida mayor a 0.";
    }

    let resultado = "";

    for (let i = 1; i <= altura; i++) {

        // Espacios
        let espacios = " ".repeat(altura - i);

        // Asteriscos
        let estrellas = "*".repeat(2 * i - 1);

        resultado += espacios + estrellas + "<br>";
    }

    return resultado;
}
