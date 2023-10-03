/*
Declare un nombre de función sumOfNumbers. Toma un parámetro numérico y suma todos
los números en ese rango.
-> Traduciendo el enunciado, y poniendole mucha onda entiendo que la paso una posicion 
del array y debo retornar la suma a partir de esa posicion hasta el ultimo elemento 
del array (Un acumulador)
*/

//variables
let pos=0;
const array=[0,1,2,3,4,5]
let total=0;

//funciones
function sumon(pos)
    {
        for (let i = pos-1; i < array.length; i++) {
            total+=array[i];
        }
        return total
    }

//main
pos=prompt("ingrese una posicion");
alert(sumon(pos));