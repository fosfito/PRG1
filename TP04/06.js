/*
La circunferencia de un círculo se calcula de la siguiente manera: circunferencia = 2πr.
Escribe una función que calcule circumOfCircle
*/

//declaracion de variables
let radio=0;

//declaracion de la funcion
function circumOfCircle(rad)
    {
        return(parseFloat(rad*3.1415*2))
    }

//main
//carga de datos
radio=parseFloat(prompt("Ingrese el radio: "));
alert(parseFloat(circumOfCircle(radio)))