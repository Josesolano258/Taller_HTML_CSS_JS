// Convertir temperaturas entre Celsius y Fahrenheit


function ejercicio10(temperatura, tipo) {

    if (tipo === "C") {
        let resultado = (temperatura * 9/5) + 32;
        return `${temperatura}°C equivalen a ${resultado.toFixed(2)}°F`;
    }

    if (tipo === "F") {
        let resultado = (temperatura - 32) * 5/9;
        return `${temperatura}°F equivalen a ${resultado.toFixed(2)}°C`;
    }

    return "Debe ingresar C o F.";
}