// Buscar si un elemento existe en un array

function ejercicio9(array, valor) {

    if (!Array.isArray(array)) {
        return "El primer parámetro debe ser un array.";
    }

    for (let i = 0; i < array.length; i++) {

        if (array[i] === valor) {
            return true;
        }
    }

    return false;
}
