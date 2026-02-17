// FizzBuzz del 1 al 50

function ejercicio7() {

    let resultado = "";

    for (let i = 1; i <= 50; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            resultado += "FizzBuzz<br>";
        }
        else if (i % 3 === 0) {
            resultado += "Fizz<br>";
        }
        else if (i % 5 === 0) {
            resultado += "Buzz<br>";
        }
        else {
            resultado += i + "<br>";
        }
    }

    return resultado;
}
