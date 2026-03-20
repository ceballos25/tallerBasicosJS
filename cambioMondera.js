// Función para convertir moneda
function convertirMoneda(monto, monedaDestino) {
  // Tasas de cambio aproximadas (ejemplo fijo)
  const tasaUSD = 0.00025; // 1 COP ≈ 0.00025 USD
  const tasaEUR = 0.00023; // 1 COP ≈ 0.00023 EUR

  if (monedaDestino === "USD") {
    return (monto * tasaUSD).toFixed(2) + " USD";
  } else if (monedaDestino === "EUR") {
    return (monto * tasaEUR).toFixed(2) + " EUR";
  } else {
    return "Moneda no válida. Use USD o EUR.";
  }
}

// --- Pedir datos al usuario desde Node.js ---
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el monto en COP: ", function(monto) {
  rl.question("Ingrese la moneda destino (USD/EUR): ", function(monedaDestino) {
    monto = Number(monto); // Convertimos a número
    monedaDestino = monedaDestino.toUpperCase(); // Normalizamos a mayúsculas

    const resultado = convertirMoneda(monto, monedaDestino);
    console.log("Resultado de la conversión: " + resultado);

    rl.close();
  });
});
