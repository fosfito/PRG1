/*
Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los
números pares en ese rango.
Continuando adivinando los enunciados, aca creo que me pide sumar los pares
 (Tomo desde 0 hasta el valor ingresado)
 Ejemplo: input: 7  output:0+2+4+6
*/

//variables
const array = [0,1,2,3,4,5,6]
let valor=0;
let total=0;

//funciones
function sumOfEven(valor)
    {
        for (let i = 0; i <= valor; i=i+2) 
        {
            total+=array[i];
        }
        return total
    }

//main
valor=prompt("ingrese un valor");
alert(sumOfEven(valor));