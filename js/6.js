// Calculadora con suma, resta, multiplicación y división

function ejercicio6(num1, num2, operacion) {

    // Validamos que sean números
    if (isNaN(num1) || isNaN(num2)) {
        return "Ingrese números válidos.";
    }

    let resultado;

    switch (operacion) {

        case "suma":
            resultado = num1 + num2;
        break;

        case "resta":
            resultado = num1 - num2;
        break;

        case "multi":
            resultado = num1 * num2;
        break;

        case "div":
            if (num2 === 0) {
                return "No se puede dividir entre 0.";
            }
            resultado = num1 / num2;
        break;

        default:
            return "Operación no válida. Use: suma, resta, multi o div.";
    }

    return `Resultado: ${resultado}`;
}
