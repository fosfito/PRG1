/*========================================================================================
TP 04.01
Declare una funcion addNumbers y toma dos parametros y devuelve la suma
========================================================================================*/

// Declaracion de funciones
function addNumbers(v1, v2) 
{                                               // La funcion recibe dos valores
    let rdo=parseFloat(v1)+parseFloat(v2);      // los suma convirtiendolos a float
    return rdo;                                 // devuelve el resultado
}

// Declaracion de variables
let v1;         // primer valor
let v2;         // segundo valor

//Main
v1=prompt("Ingrese el primer valor a sumar");
v2=prompt("Ingrese el segundo valor a sumar");
//console.log("El resultado es de: "+addNumbers(v1,v2)); 
alert("El resultado es de: "+addNumbers(v1,v2)); 