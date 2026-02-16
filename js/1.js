//Ejercicio 1. Par o impar:Escribe una función que reciba un número y determine mediante un
//condicional si es par o impar. Usa un ciclo para evaluar números del 1 al 10.

function ejercicio1(numero) {

    if (isNaN(numero)) {
        return "Por favor ingrese un número válido.";
    }

    let resultado = "";

    // Evaluar el número ingresado
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
