// ===============================
// REFERENCIAS AL DOM
// ===============================

// Capturamos el select donde el usuario elige el ejercicio
let menu = document.getElementById("menu");

// Contenedor donde vamos a crear los inputs dinámicamente
let inputsContainer = document.getElementById("inputs");

// Botón que ejecuta el ejercicio seleccionado
let boton = document.getElementById("btn");

// Botón que limpia todo
let btnLimpiar = document.getElementById("btnLimpiar");

// Div donde se mostrará el resultado
let resultado = document.getElementById("resultado");



// ===============================
// EVENTO: CUANDO CAMBIA EL MENÚ
// ===============================

menu.addEventListener("change", function () {

    // Guardamos qué opción eligió el usuario
    let opcion = menu.value;

    // Limpiamos los inputs anteriores (si cambia de ejercicio)
    inputsContainer.innerHTML = "";

    // Dependiendo del ejercicio seleccionado
    switch(opcion) {

        case "1":
        case "2":
            // Para el ejercicio 1 y 2 necesitamos UN número
            // Entonces generamos un input tipo number
            inputsContainer.innerHTML = `
                <input type="number" id="dato1" placeholder="Ingrese un número">
            `;
        break;

    }
});



// ===============================
// EVENTO: CUANDO PRESIONAN EJECUTAR
// ===============================

boton.addEventListener("click", function () {

    // Saber qué ejercicio está seleccionado
    let opcion = menu.value;

    // Variable donde guardaremos el resultado final
    let respuesta = "";

    switch(opcion) {

        case "1":
            // Tomamos el valor del input
            // parseInt convierte texto en número
            let numero1 = parseInt(document.getElementById("dato1").value);

            // Llamamos la función del ejercicio 1
            respuesta = ejercicio1(numero1);
        break;

        case "2":
            let numero2 = parseInt(document.getElementById("dato1").value);

            // Llamamos la función del ejercicio 2
            respuesta = ejercicio2(numero2);
        break;

        default:
            // Si no seleccionan nada
            respuesta = "Seleccione un ejercicio válido.";
    }

    // Mostramos el resultado en el div
    resultado.innerHTML = respuesta;
});



// ===============================
// EVENTO: BOTÓN LIMPIAR
// ===============================

btnLimpiar.addEventListener("click", function () {

    // Borra el resultado mostrado
    resultado.innerHTML = "";

    // Borra los inputs generados dinámicamente
    inputsContainer.innerHTML = "";

    // Reinicia el menú al valor inicial
    menu.value = "";

});
