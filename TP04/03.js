/*
El perímetro de un rectángulo se calcula de la siguiente manera: perímetro = 2x (largo +
ancho). Escribe una función que calcule el perímetro del rectángulo.
*/

//inicializo variables
let largo=0;
let ancho=0;

//declaro funcion
function Peri(largo, ancho)
    {
        return(parseFloat(2*(largo+ancho)))
        
    }

//main del programa
largo=parseFloat(prompt("Ingrese el largo del rectangulo"))
ancho=parseFloat(prompt("Ingrese el ancho del rectangulo"))
alert("El perimetro del rectangulo es de: "+Peri(largo,ancho));
