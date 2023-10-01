/*
El peso de una sustancia se calcula de la siguiente manera: peso = masa x gravedad. Escribe
una función que calcule el peso.
*/

//declaracion de variables
let masa=0;

//declaracion de funcion
function peso(masa)
    {
        return(parseFloat(masa*9.8))
    }

//main del programa
//carga de datos
masa=parseFloat(prompt("Ingrese la masa expresada en kilogramos: "))
alert("El peso total es de: "+parseFloat(peso(masa))+" Kgs")