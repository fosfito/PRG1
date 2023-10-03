/*
Declare un nombre de función printArray. Toma matriz como parámetro e imprime cada va-
lor de la matriz.
*/

//declaro variables
const vector = [];

//declaro funcion
function PrintArray(array)
{
    for (let i = 0; i < array.length; i++) 
    {
        console.log(array[i]);
    }
    
}

//main
for (let j = 0; j < 20; j++) {
    vector[j]=j;
}
console.log(vector);
PrintArray(vector);