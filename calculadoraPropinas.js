// Calculadora
function calcularPropina(totalCuenta, porcentaje) {
    let totalPagar = totalCuenta + (totalCuenta * porcentaje / 100);
    return totalPagar;
}

console.log(calcularPropina(1000,10));