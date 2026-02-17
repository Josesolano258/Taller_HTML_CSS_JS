// Calcular el factorial de un número

function ejercicio13(numero) {

    if (isNaN(numero) || numero < 0) {
        return "Ingrese un número entero mayor o igual a 0.";
    }

    if (numero === 0 || numero === 1) {
        return `El factorial de ${numero} es 1`;
    }

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return `El factorial de ${numero} es ${factorial}`;
}
