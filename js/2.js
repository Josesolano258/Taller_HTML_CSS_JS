// Tabla de multiplicar de un número

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
