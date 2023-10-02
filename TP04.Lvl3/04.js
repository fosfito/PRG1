/*
Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de
colores RGB en un array.
*/

//defino variables

let valoresHexa = "0123456789ABCDEF"    //se usa para tomar un valor hexa (Un texto es una array de char)
let cantidad="0"                        //cantidad de colores que solicita el usuario
const resultado=[];

//defino funcion
function arrayOfHexaColors(resultado, canti)
     //genero un color en hexa
    {
        for (let j = 0; j < canti; j++)  //for que repite la generacion la cantidad de veces que indico el usuario y lo agrega al array
        {
            let color="#";  //Genero la variable aca para que se resetee con cada color (Sino sigue concatenando)
                for (let i = 0; i < 6; i++)   //genero 6 elementos del string valoresHexa
                {     
                color = color + valoresHexa[Math.floor(Math.random() * 15)];
                }
                  resultado[resultado.length]=color;  
        }
                return resultado;

     }


//main del programa.//

console.log(resultado);
cantidad=parseInt(prompt("Por favor ingrese la cantidad de colores a generar"))

alert(arrayOfHexaColors(resultado,cantidad));       //llamo a la funcion y le paso el array (En teoria no es necesario y la cantidad de colores a generar)
