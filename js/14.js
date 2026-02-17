// Encontrar todos los números primos del 1 al 100

// Chequeamos si un número es primo
function esPrimo(numero) {

    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

// Buscar los primos del 1 al 100
function ejercicio14() {

    let resultado = "";

    for (let i = 2; i <= 100; i++) {
        if (esPrimo(i)) {
            resultado += i + "<br>";
        }
    }

    return resultado;
}
