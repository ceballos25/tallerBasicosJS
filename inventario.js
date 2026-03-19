//sistema de inventario
//Stock de productos
const inventario = [
 { nombre: "Arroz", precio: 35000 },
 { nombre: "Azúcar", precio: 6000 },
 { nombre: "Panela", precio: 9000 },
 { nombre: "Bocadillo", precio: 3000 },
 { nombre: "fríjoles", precio: 5400 },
 { nombre: "Pastas", precio: 2000 },
 { nombre: "lentejas", precio: 9000 }
];


function buscarProducto(nombre) {
    const productoEncontrado = inventario.find(producto => 
        producto.nombre === nombre
    );

    if (productoEncontrado) {
        return "Producto: " + productoEncontrado.nombre + ", Precio: $" + productoEncontrado.precio
    } else {
        return "Lo siento, no hay stock disponible de ese producto";
    }
}


console.log(buscarProducto("lentejas"));