/*
El área de un rectángulo se calcula de la siguiente manera: área = largo x ancho. Escribe una
función que calcule areaOfRectangle.
*/
let largo=0;
let ancho=0;

//declaracion de la funcion
function areaOfRectangle(largo,ancho)
    {
        return(parseFloat(largo)*parseFloat(ancho))     //devuelvo el resultado de la cuenta pasado a float
    }

//main del programa

largo=prompt("Ingrese largo del rectangulo: ");
ancho=prompt("Ingrese ancho del rectangulo: ");
alert("El area del rectangulo es de: "+parseFloat(areaOfRectangle(largo,ancho))); //Muestro en pantalla el resultado de la funcion
