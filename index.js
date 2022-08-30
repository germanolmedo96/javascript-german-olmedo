// Calculador de pagos (intereses/descuentos)

let precioDelProducto = 0;
let resultadoTotal = 0;
let metodoDePago = 0;
let opcionElegida = 0;

const formulaUno = (precioDelProducto,opcionElegida) => {
    resultadoTotal = precioDelProducto*opcionElegida;
}

const formulaCuotas = (cantidadDeCuotas) => {
    cuota = resultadoTotal/cantidadDeCuotas;
}

precioDelProducto = parseInt(prompt("Ingresa el precio del producto a pagar"));

metodoDePago = parseInt(prompt(`Selecciona un método de pago
(Elige un número)
1 - Efectivo (10% de descuento)
2 - Tarjeta de Débito/Crédito (1 pago)
3 - 03 cuotas (interés 10%)
4 - 06 cuotas (interés 20%)
5 - 12 cuotas (interés 30%)`
));

while(opcionElegida===0) {
    switch(metodoDePago){
        case 1: {
            formulaUno(precioDelProducto,0.9);
            alert(`En efectivo el total a pagar es de $${resultadoTotal}`);
            opcionElegida=1;
            break;
        }
        case 2: {
            formulaUno(precioDelProducto,1);
            alert(`Con tarjeta de Débito/Crédito el total a pagar es de $${resultadoTotal}`);
            opcionElegida=1;
            break;
        }
        case 3: {
            formulaUno(precioDelProducto,1.1);
            formulaCuotas(3);
            alert(`Plan de 3 cuotas: 
            El total a pagar es de $${resultadoTotal} en 3 cuotas de $${cuota}`);
            opcionElegida=1;
            break;
        }
        case 4: {
            formulaUno(precioDelProducto,1.2);
            formulaCuotas(6);
            alert(`Plan de 6 cuotas: 
            El total a pagar es de $${resultadoTotal} en 6 cuotas de $${cuota}`);
            opcionElegida=1;
            break;
        }
        case 5: {
            formulaUno(precioDelProducto,1.3);
            formulaCuotas(12);
            alert(`Plan de 12 cuotas: 
            El total a pagar es de $${resultadoTotal} en 12 cuotas de $${cuota}`);
            opcionElegida=1;
            break;
        }
        default: {
            alert("Seleccione un método de pago del 1 al 5");
        }
    metodoDePago = parseInt(prompt(`Selecciona un método de pago
    (Elige un número)
    1 - Efectivo (10% de descuento)
    2 - Tarjeta de Débito/Crédito (1 pago)
    3 - 03 cuotas (interés 10%)
    4 - 06 cuotas (interés 20%)
    5 - 12 cuotas (interés 30%)`));
    }
}