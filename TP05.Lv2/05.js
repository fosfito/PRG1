/*
Declare un nombre de función swapValues. Esta función intercambia el valor de x a y.
*/

//declaracion de variables
let vx=0;
let vy=0;
let aux=0;

//declaracion de funciones
function swapValues(x,y)
    {
        aux=x;
        x=y;
        y=aux;
    return(x+"-"+y)
    }

//Main
    vx=parseFloat(prompt("iNGRESE VALOR PARA x"))
    vy=parseFloat(prompt("Ingrese valor para Y"))
    alert(swapValues(vx,vy))
