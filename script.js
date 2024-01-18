
function iva(precio) {
    var precio = precio * 0.30
    return precio
}

function verCatalogo() {
    alert("¡Bienvenido al catálogo!\n1. BMW A\n2. Mercedez B\n3. Toyota\nX PARA SALIR ");
}

function comprar() {
    var producto = prompt("Ingrese el número del producto que desea comprar: \n1. BMW A\n2. Mercedez B\n3. Toyota\nX PARA SALIR ");
    while(producto != "X" && producto != "x"){
    
        switch (producto) {
            case "1":
                let valorBmw = 1000
                let ivaBmw = iva(valorBmw)
                let totalBmw = valorBmw + ivaBmw
                alert("El valor del iva es "+ivaBmw+" Total a pagar BMW: "+ totalBmw)
                break;
            case "2":
                    let valorMerce = 500
                    let ivaMerce = iva(valorMerce)
                    let totalMerce = valorMerce + ivaMerce
                    alert("El valor del iva es "+ivaMerce+" Total a pagar Mercedez benz1: "+ totalMerce)
            break;
            case "3":
                    let valorToyo = 150
                    let ivaToyo = iva(valorToyo)
                    let totalToyo = valorToyo + ivaToyo
                    alert("El valor del iva es "+ivaToyo+" Total a pagar Toyota: "+ totalToyo)
            break;1
        }
        break
    }
}

function menuBienvenida(){
    var menu = prompt("¡Bienvenido, Selecciona una opcion!\n1. Ver catalogo\n2. Comprar\nX PARA SALIR");
    while(menu != "X" && menu != "x"){

        switch (menu) {
            case "1":
                verCatalogo()
                var menu = prompt("¡Bienvenido, Selecciona una opcion!\n1. Ver catalogo\n2. Comprar\nX PARA SALIR");
                break;
            case "2":
                comprar()
                var menu = prompt("¡Bienvenido, Selecciona una opcion!\n1. Ver catalogo\n2. Comprar\nX PARA SALIR");
                break;
        }
    }
}
menuBienvenida()
