/*
 área de un círculo se calcula de la siguiente manera: área = π x r x r. Escribe una función
que calcule areaOfCircle
*/

//Declaracion de variables
let radio

//declaracion de funcion
function areaOfCircle(rad)
    {
        return(parseFloat(rad*rad*3.14))
    }

//main
//ingreso de datos
radio=parseFloat(prompt("ingrese el radio del circulo:"))

//salida en pantalla devolucion de la funcion
alert(parseFloat(areaOfCircle(radio)))
