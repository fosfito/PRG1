/*
Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de
colores RGB en una matriz.
*/

//defino variables

let valoresHexa = "0123456789ABCDEF"    //se usa para tomar un valor hexa (Un texto es una array de char)
let cantidad="0"                        //cantidad de colores que solicita el usuario

//defino funcion
function arrayOfHexaColors()
     //genero un color en hexa
    {
                let color="#";  //Genero la variable aca para que se resetee con cada color (Sino sigue concatenando)
                for (let i = 0; i < 6; i++)   //genero 6 elementos del string valoresHexa
                {     
                color = color + valoresHexa[Math.floor(Math.random() * 15)];
                }
                return color;
     }


//main del programa
cantidad=parseInt(prompt("Por favor ingrese la cantidad de colores que desea generar"));

//Ahora llamo a la funcion para generar un color en hexa las veces que pidio el usuario
for (let j = 0; j < cantidad; j++) 
{
    alert(arrayOfHexaColors());
}


