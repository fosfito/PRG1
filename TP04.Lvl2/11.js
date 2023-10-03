/*
Declare un nombre de función sumOfOdds. Toma un parámetro numérico y agrega todos
los números impares en ese rango.
-> Siguiendo con la traduccion (Le podria poner un poco de onda a estas alturas): 
primero hay  que entender que carajo quiso escribir y despues hacerlo
Ingreso un numero y muestro un array con los impares desde 0 hasta ese valor
Ejemplo: Input: 11 Output: 1,3,5,7,9,11
*/
//variables
let nmax=0;
const array=[];

//funciones
function impar(nmax)
    {
        alert(nmax);
        for(let i = 1; i < nmax; i=i+2) 
            {
            array[array.length]=i;
            }
            return array;
    }

    //main
    nmax=prompt("mete el nro:");
    alert(impar(nmax));
