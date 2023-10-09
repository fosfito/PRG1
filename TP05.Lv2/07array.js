//declaracion de variables
let oracion="";

//declaracion de funcionaes
function capital(oracion)
{
    let min="abcdefghijklmnñopqrstuvwxyx"
    let may="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    let rta ="";

   console.log("Primer caracter:"+oracion[0])  //asigno al primer array de rta el primer elemento del array mayuscula
   //defino capitalize
   for (let i = 0; i < min.length; i++)         //si empieza con minuscula le cambio a mayuscula
   {
        if(oracion[0]==min[i])
        {
            rta+=may[i]
        }
   }

   //Si empieza con mayuscula en el for anterior quedo rta vacio, si es el caso lo cargo con el primer elemento de la oracion
   if (rta.length==0)
   {
    rta+=oracion[0];             
   }

   //ahora solo resta cargar el resto del array oracion tal cual.
   for (let i = 1; i < oracion.length; i++) 
   {
        rta+=oracion[i];
   }

   console.log("Respuesta final:"+rta)
   
    return rta
}

oracion=prompt("Ingrse el texto")
console.log(capital(oracion));