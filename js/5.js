// Separar mayores de menores de edad

function ejercicio5(edades) {

    let mayores = [];
    let menores = [];

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayores.push(edades[i]);
        } else {
            menores.push(edades[i]);
        }
    }

    return `
        Mayores: ${mayores.join(", ")} <br>
        Menores: ${menores.join(", ")}
    `;
}
