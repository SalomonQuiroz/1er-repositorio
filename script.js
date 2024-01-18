


alert("Bienvenid@!")

let pass = "1234"
let validoPass = false


//Login
for (i = 3; i >= 0; i--){
    let passIngresado = prompt("Ingresa tu clave: ");
    if (pass == passIngresado){
        alert("Usuario correcto!")
        validoPass = true
        break 
    } else{
        alert("Error. Ahora tiene: " + i + " intentos")
    }
}

 function descuento(a){
    let desc = a - 0.50
    return desc
 }

 function PrecioTotal(a){
    let iva = 1.08
    let total = a + iva
 }

let cuentaDinero = 100000
if(validoPass){
    let carro = prompt("Que carro desas comprar \n1 - Toyota TXL \n2 - Mercedez Benz Cla200 \n3 - BMW M4s \n4 - Onix Turbo \n X para salir" )
    
        switch (carro) {
            case "1":
                valorToyota = 100
                alert("Haz elegido una Toyota TXL, con un valor de: $" + valorToyota)
                alert("Por tu compra tu descuento es del $" + descuento(valorToyota))
                break
            case "2":
                valorMercedez = 200
                alert("Haz elegido un  Mercedez Benz Cla200, con un valor de: $" + valorMercedez)
                alert("Por tu compra tu descuento es del $" + descuento(valorMercedez))
                let carro = prompt("Que carro desas comprar \n1 - Toyota TXL \n2 - Mercedez Benza Cla200 \n3 - BMW M4s \n4 - Onix Turbo \nX para salir " )   
                break
            }

            

            
        
        
}