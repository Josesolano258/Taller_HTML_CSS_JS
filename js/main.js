document.addEventListener("DOMContentLoaded", () => {

    // Referencias al DOM
    const menu = document.getElementById("menu");
    const inputsContainer = document.getElementById("inputs");
    const boton = document.getElementById("btn");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const resultado = document.getElementById("resultado");

    // Generador de inputs dinámicos
    const generarInput = (tipo, id, placeholder) => {
        return `<input type="${tipo}" id="${id}" placeholder="${placeholder}">`;
    };

    menu.addEventListener("change", () => {

        const opcion = menu.value;
        inputsContainer.innerHTML = "";
        resultado.innerHTML = "";

        switch (opcion) {

            case "1":
            case "2":
            case "13":
            case "14":
                inputsContainer.innerHTML = generarInput("number", "dato1", "Ingrese un número");
            break;

            case "3":
                inputsContainer.innerHTML = generarInput("text", "dato1", "Ingrese una palabra");
            break;

            case "4":
                inputsContainer.innerHTML = `
                    ${generarInput("number", "dato1", "Número inicial")}
                    ${generarInput("number", "dato2", "Número final")}
                `;
            break;

            case "5":
                inputsContainer.innerHTML = generarInput("text", "dato1", "Ej: 12, 17, 25, 8");
            break;

            case "6":
                inputsContainer.innerHTML = `
                    ${generarInput("number", "dato1", "Primer número")}
                    ${generarInput("number", "dato2", "Segundo número")}
                    <input type="text" id="dato3" placeholder="Operación (suma, resta, multi, div)">
                `;
            break;

            case "7":
                inputsContainer.innerHTML = "<p>Este ejercicio no requiere inputs. Haz clic en 'Ejecutar'.</p>";
            break;

            case "8":
                inputsContainer.innerHTML = generarInput("text", "dato1", "Ingrese un texto");
            break;

            case "15":
                inputsContainer.innerHTML = generarInput("number", "dato1", "Ingrese cantidad de dinero");
            break;
            case "12":
                inputsContainer.innerHTML = `
                <input type="password" id="dato1" placeholder="Ingrese la contraseña">
                `;
            break;
            case "11":
                inputsContainer.innerHTML = `
                <input type="number" id="dato1" placeholder="Ingrese la altura">
                `;
            break;
            case "9":
                inputsContainer.innerHTML = `
                    ${generarInput("text", "dato1", "Ej: 1, 2, 3, 4, 5")}
                    ${generarInput("text", "dato2", "Elemento a buscar")}
                `;
            break;

            case "10":
                inputsContainer.innerHTML = `
                <input type="number" id="dato1" placeholder="Ingrese un número">
                 <input type="text" id="dato2" placeholder="Ingrese C o F">
                `;
            break;

        }
    });

    // Ejecutar el ejercicio
    boton.addEventListener("click", () => {

        const opcion = menu.value;

        if (!opcion) {
            mostrarResultado("Seleccione un ejercicio primero.");
            return;
        }

        let respuesta = "";

        const valor1 = document.getElementById("dato1")?.value;
        const valor2 = document.getElementById("dato2")?.value;

        switch (opcion) {

            case "1":
                respuesta = validarNumero(valor1, ejercicio1);
            break;

            case "2":
                respuesta = validarNumero(valor1, ejercicio2);
            break;

            case "3":
                if (!valor1) return mostrarResultado("Ingrese una palabra.");
                respuesta = ejercicio3(valor1);
            break;

            case "4":
                if (isNaN(valor1) || isNaN(valor2))
                    return mostrarResultado("Ingrese ambos números.");
                respuesta = ejercicio4(parseInt(valor1), parseInt(valor2));
            break;

            case "5":
                if (!valor1)
                    return mostrarResultado("Ingrese datos separados por coma.");

                const edades = valor1
                    .split(",")
                    .map(e => parseInt(e.trim()))
                    .filter(e => !isNaN(e));

                respuesta = ejercicio5(edades);
            break;

            case "6":
                const num1 = parseFloat(document.getElementById("dato1")?.value);
                const num2 = parseFloat(document.getElementById("dato2")?.value);
                const operacion = document.getElementById("dato3")?.value;

                if (isNaN(num1) || isNaN(num2)) {
                    mostrarResultado("Ingrese números válidos.");
                    return;
                }

                if (!operacion) {
                    mostrarResultado("Ingrese una operación válida.");
                    return;
                }

                respuesta = ejercicio6(num1, num2, operacion);
            break;

            case "7":
                respuesta = ejercicio7();
            break;

            case "8":
                if (!valor1) return mostrarResultado("Ingrese un texto.");
                respuesta = ejercicio8(valor1);
            break;

            case "13":
                respuesta = validarNumero(valor1, ejercicio13);
            break;

            case "14":
                respuesta = validarNumero(valor1, ejercicio14);
            break;

            case "15":
                respuesta = validarNumero(valor1, ejercicio15);
            break;

            case "9":
                if (!valor1 || !valor2)
                    return mostrarResultado("Ingrese array y elemento a buscar.");

                const elementos = valor1
                    .split(",")
                    .map(e => {
                        const trimmed = e.trim();
                        return isNaN(trimmed) ? trimmed : parseInt(trimmed);
                    });
                const elementoBuscado = isNaN(valor2) ? valor2 : parseInt(valor2);

                respuesta = ejercicio9(elementos, elementoBuscado);
            break;

            case "12":
                const password = document.getElementById("dato1")?.value;

                if (!password) {
                    mostrarResultado("Ingrese una contraseña.");
                    return;
                }
            
                respuesta = ejercicio12(password);  
            break;
            case "11":
                const altura = parseInt(document.getElementById("dato1")?.value);

                if (isNaN(altura)) {
                    mostrarResultado("Ingrese una altura válida.");
                    return;
                }

                respuesta = ejercicio11(altura);
            break;

            case "10":
                const temp = parseFloat(document.getElementById("dato1")?.value);
                const tipo = document.getElementById("dato2")?.value?.toUpperCase();

                if (isNaN(temp) || !tipo) {
                    mostrarResultado("Ingrese temperatura y tipo (C o F).");
                    return;
                }

                respuesta = ejercicio10(temp, tipo);
            break;
        }

        mostrarResultado(respuesta);
    });

    // Funciones auxiliares
    function validarNumero(valor, callback) {
        const numero = parseInt(valor);
        if (isNaN(numero)) {
            return "Ingrese un número válido.";
        }
        return callback(numero);
    }

    function mostrarResultado(texto) {
        resultado.innerHTML = `
            <div class="card-resultado">
                ${texto}
            </div>
        `;
    }

    // Botón para limpiar todo
    btnLimpiar.addEventListener("click", () => {
        resultado.innerHTML = "";
        inputsContainer.innerHTML = "";
        menu.value = "";
    });

});
