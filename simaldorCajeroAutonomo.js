// Función para retirar dinero
function retirarDinero(saldo, monto) {
  if (monto <= saldo) {
    let nuevoSaldo = saldo - monto;
    console.log("Retiro exitoso. Nuevo saldo: " + nuevoSaldo);
  } else {
    console.log("Fondos insuficientes.");
  }
}

// --- Pedir datos al usuario desde Node.js ---
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su saldo actual: ", function(saldo) {
  rl.question("Ingrese el monto a retirar: ", function(monto) {
    saldo = Number(saldo);   // Convertimos a número
    monto = Number(monto);   // Convertimos a número

    retirarDinero(saldo, monto);

    rl.close();
  });
});
