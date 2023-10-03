/*
VARIANTE:
Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los
números pares en ese rango.
Continuando adivinando los enunciados, aca voy a pedir un v1, un v2 y voy a sumar
todos los pares dentro de ese rango (Considero que v1 es el menor y v2 el mayory menor a 20 
    sino me paso del array)
 (Tomo desde 0 hasta el valor ingresado)
 Ejemplo: input: 12,20  output: 12+14+16+18+20
*/

//variables
const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let v1=0;
let v2=0;
let total=0;

//funciones
function sumOfEven(min,max)
    {
        for (let i = min; i <= max; i++) 
        {
           if(i%2==0)   //si el indice es par lo sumo
               {
                total+=array[i];
               } 
        }
        return total
    }

//main
v1=prompt("ingrese la cota inferior:");
v2=prompt("Ingrese cota superior")
alert(sumOfEven(v1,v2));