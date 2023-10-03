/*
Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve
el reverso de la matriz (no use el método reverse).
*/

//declaracion de variables:
let cant=0;
const a1 = [];
let i=0;

//funciones
function reverseArray(v1)
{
    let aux="";  
    alert(v1);
    for (let i = 0; i <= (v1.length/2); i++) 
    {
    //    alert(i)
    aux=v1[i];
    v1[i]=v1[v1.length-1-i]
    v1[(v1.length-1)-i]=aux
    }
    
    return(v1)
}

//main
cant=parseInt(prompt("Ingrese cantidad de elementos:"))
for (i = 0; i < cant; i++) 
{
    a1[i]=i
}
alert(reverseArray(a1))
