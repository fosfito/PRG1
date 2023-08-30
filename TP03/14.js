/* ===========================================================================================
 Realiza un script que dada una lista de números devuelva el mayor y el menor de esa lista y
donde se encuentra cada uno. 
============================================================================================*/

let mayor=0;                // variable para mayor
let posmayor=0;             // Variable para la posicion del mayor
let posmenor=0;             // Variable para la posicion del menor
let menor=0;                // Variable para menor
const arraynum =[];         //Variable tipo array con los valores
let aux=0;                      //Variable de propositos multiples (Auxiliar)
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

//EL PRIMER ELEMENTO DEL ARRAY SERA EL MAYOR Y EL MENOR AL COMENZAR
menor=arraynum[0];
mayor=arraynum[0];

//BUSCO EN EL RESTO DEL ARRAY SI HAY OTROS MAYORES Y MENORES
for (let index = 1; index < arraynum.length; index++) 
{
   if (arraynum[index]>mayor) 
   { 
    mayor=arraynum[index];
    posmayor=index+1;
   }

   if (arraynum[index]<menor) 
   {
    menor=arraynum[index]; 
    posmenor=index+1;
   }
    
}

//Salidas en pantalla de lo solicitado
console.log("==========")
console.log("el array esta formado por: "+arraynum);
console.log("==========")
console.log("el mayor es: "+mayor);
console.log("Su posicion de ingreso es:"+posmayor)
console.log("==========")
console.log("el menor es: "+menor);
console.log("Su posicion de ingreso es:"+posmenor)


