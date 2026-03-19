// Función para calcular el promedio de notas
function calcularPromedio(notas) {
  let suma = 0;

  // Recorremos el array y sumamos las notas
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }

  // Calculamos el promedio
  let promedio = suma / notas.length;

  // Redondeamos a 2 decimales
  return promedio.toFixed(2);
}

// El usuario ingresa las notas como texto separado por comas
let entradaUsuario = "4.5,3.8,5,4"; 

let notasArray = entradaUsuario.split(",").map(Number);

console.log(calcularPromedio(notasArray)); 
