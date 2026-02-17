// Función que determina si un número es par o impar

function ejercicio1(numero) {

    if (isNaN(numero)) {
        return "Por favor ingrese un número válido.";
    }

    let resultado = "";

    // Evaluamos si es par o impar
    if (numero % 2 === 0) {
        resultado += `${numero} es PAR<br><br>`;
    } else {
        resultado += `${numero} es IMPAR<br><br>`;
    }

    resultado += "Evaluación del 1 al 10:<br>";

    // Ciclo del 1 al 10
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            resultado += `${i} es PAR<br>`;
        } else {
            resultado += `${i} es IMPAR<br>`;
        }
    }

    return resultado;
}
