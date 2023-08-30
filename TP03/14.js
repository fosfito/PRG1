/* ===========================================================================================
 Realiza un script que dada una lista de números devuelva el mayor y el menor de esa lista y
donde se encuentra cada uno. 
============================================================================================*/

let mayor=0;                // variable para mayor
let posmayor=0;             // Variable para la posicion del mayor
let posmenor=0;             // Variable para la posicion del menor
let menor=0;                // Variable para menor
const arraynum =[];         //Variable tipo array con los valores
Aux=0;                      //Variable de propositos multiples (Auxiliar)
let numero=0;               //Variable para ingresar el array

// Ingreso del array hasta presionar la tecla f 
while (numero!="f") 
{
    numero=prompt("Ingrese un valor para el array, o la tecla f para finalizarlo");
    if (numero!="f") 
    {
        arraynum[aux]=numero;    
    }
    aux++;
}
console.log(arraynum);
