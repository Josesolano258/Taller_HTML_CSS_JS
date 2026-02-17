// Validar que una contraseña sea segura

function ejercicio12(password) {

    if (!password || password.length <= 8) {
        return "La contraseña debe tener más de 8 caracteres.";
    }

    if (!/[A-Z]/.test(password)) {
        return "Debe contener al menos una letra mayúscula.";
    }

    if (!/[0-9]/.test(password)) {
        return "Debe contener al menos un número.";
    }

    return "Contraseña válida ✅";
}
