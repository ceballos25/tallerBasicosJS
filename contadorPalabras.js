// Función para contar palabras en un texto
function contarPalabras(texto) {
  // Quitamos espacios al inicio y al final
  texto = texto.trim();

  // Si el texto está vacío, retornamos 0
  if (texto === "") {
    return 0;
  }

  // Separamos por espacios y contamos
  let palabras = texto.split(" ");
  return palabras.length;
}

// Ejemplo de uso
let textoUsuario = "Hola este es un ejemplo de texto";
console.log("Número de palabras:", contarPalabras(textoUsuario));
// Resultado: 7
