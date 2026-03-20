// Array de usuarios predefinido
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 15 }
];

// Función para filtrar usuarios por edad mínima
function filtrarUsuarios(usuarios, edadMinima) {
  let resultado = [];

  // Recorremos el array y verificamos la edad
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= edadMinima) {
      resultado.push(usuarios[i]); // Agregamos al resultado si cumple
    }
  }

  return resultado; // Retorna el array filtrado
}

// Ejemplo de uso
let edadIngresada = 18; // Supongamos que el usuario escribe 18
let usuariosFiltrados = filtrarUsuarios(usuarios, edadIngresada);

console.log("Usuarios con edad mayor o igual a " + edadIngresada + ":");
console.log(usuariosFiltrados);
