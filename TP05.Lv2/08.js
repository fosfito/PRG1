/*
Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve un
arreglo después de agregar el elemento (no utilice métodos de arreglos)
*/

//variables
let dato=0;
const vector = [1,2,3,4,5]

//funciones
function additem(dato)
    {
        vector[vector.length]=dato;
        return vector;
    }

    //main
dato=prompt("Dato para agregar: ");
alert(additem(dato));