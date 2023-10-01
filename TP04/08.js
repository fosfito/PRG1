/*
La velocidad se calcula dividiendo la distancia total recorrida por un objeto en movimiento
entre el tiempo total empleado. Escribe una función que calcule la velocidad de un objeto
en movimiento.
*/

//declaracion de variables
let tiempo=0;
let distancia=0;

//declaracion de funcion
function forrest(dist,tiem)
{
    //filtro si el tiempo ingresado es cero, entonces la velocidad es erronea (DIV/0)
    if(tiem==0)
    { return(0) }
    else
    { return(parseFloat(dist/tiem))}
}

//main del programa
//carga de datos
tiempo=parseFloat(prompt("Ingrese el tiempo en segundos: "));
distancia=parseFloat(prompt("Ingrese la distancia en metros: "));

//muestro en pantalla la devolucion de la funcion:
alert("La velocidad alcanzada fue de: "+forrest(tiempo,distancia)+" Mts/Segundos")