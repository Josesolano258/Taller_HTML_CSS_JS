// Cambiar dinero en billetes (50, 20, 10)

function ejercicio15(cantidad) {

    if (isNaN(cantidad) || cantidad <= 0) {
        return "Ingrese una cantidad válida mayor a 0.";
    }

    if (cantidad % 10 !== 0) {
        return "La cantidad debe ser múltiplo de 10.";
    }

    let restante = cantidad;

    let billetes50 = Math.floor(restante / 50);
    restante = restante % 50;

    let billetes20 = Math.floor(restante / 20);
    restante = restante % 20;

    let billetes10 = Math.floor(restante / 10);

    return `
        💵 Monto solicitado: ${cantidad}<br><br>
        Billetes de 50: ${billetes50}<br>
        Billetes de 20: ${billetes20}<br>
        Billetes de 10: ${billetes10}
    `;
}
