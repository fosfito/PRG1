/*
La densidad de una sustancia se calcula de la siguiente manera: densidad = masa/volumen.
Escribe una función que calcule la densidad
*/

//Declaro variables
let masa=0;
let volum=0;

//declaro funcion
function densidad(mas,vol)
    {
        //verifico si el volumen es cero no se puede dividir por cero devuelvo mensaje
        if (vol==0) 
        {
            return("Santa ciencia! Metiste la masa igual a cero, es inaceptable!!");
        }
        else
        //si no es cero devuelvo el calculo
        {
            return(parseFloat(mas/vol))
        }
    }

//main del programa
//ingreso de datos
masa=parseFloat(prompt("Ingrese la masa:"))
volum=parseFloat(prompt("Ingrese el volumen:"))

//muestro el resultado de la llamada a la funcion
alert("Oh Martin!, la densidad es de: "+densidad(masa,volum));
