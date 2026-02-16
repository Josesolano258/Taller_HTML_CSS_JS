//Ejercicio 2.Tabla de multiplicar: Crea una función que reciba un número (ej. 5) e imprima su
//tabla de multiplicar del 1 al 10 usando un ciclo for

function ejercicio2(numero) {

    if (isNaN(numero)) {
        return "Por favor ingrese un número válido.";
    }

    let resultado = `Tabla de multiplicar del ${numero}:<br><br>`;

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    return resultado;
}
