alert("Ingresar Producto:");

function createProduct( nombre, precio ) {

    const newProduct = {
        nombre,
        precio
    }

    alert( 'Se creó el producto: ' + JSON.stringify(newProduct));
    return newProduct
}

function registerProduct() {
    const nombre = prompt('Nombre')
    const precio = prompt('Precio')

    createProduct(nombre, precio)
}

registerProduct();