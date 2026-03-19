//validarContraseña

function validarContrasena(contrasena) {
  if (contrasena.length >= 8 && /\d/.test(contrasena) && /[A-Z]/.test(contrasena)) {
        return "Bienvenido....";
    } else {
        return "Tu contraseña no cumple (mínimo 8 caracteres, 1 mayúscula y al menos 1 número)";;
    }
}
console.log(validarContrasena("Hola123"));