// Suma de todos los números en un rango

function ejercicio4(inicio, fin) {
    let suma = 0;

    if (inicio > fin) {
        let temp = inicio;
        inicio = fin;
        fin = temp;
    }

    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }

    return suma;
}
