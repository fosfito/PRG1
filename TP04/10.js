/*
La temperatura en oC se puede convertir a oF usando esta fórmula: oF = (oC x 9/5) + 32.
Escriba una función que convierta oC a oF convertCelsiusToFahrenheit.
*/

//declaracion de variables
let celsius=0;

//declaracion de funcion
function convertCelsiusToFahrenheit(cel)
    {
        return(parseFloat((cel*(9/5))+32))
    }

//main del programa
//carga de datos
celsius=parseFloat(prompt("Ingrese el valor en Celsius: "));
alert("La conversion a Farenheits es de: "+parseFloat(convertCelsiusToFahrenheit(celsius)));
