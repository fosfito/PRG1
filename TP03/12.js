/* TP 03.12 Realiza un script que dado una lista de números. Solicite otro número al usuario e indique si
el número se encuentra en la lista. */

const arraynum = [];
let numero=1;
let flag=0;

while(numero!=0)
{
    numero=prompt("Ingrese un valor distinto a cero");
    if(numero!=0) arraynum.push(numero);
}

numero=prompt("Ingrese un valor a buscar");
for(let index = 0; index < arraynum.length; index++) 
{
    if (arraynum[index]==numero) 
    {
        console.log("El valor:"+numero+" Se encuentra en la posicion "+Number(index+1));   //le sumo al index para que me de la posicion real y no la del vector
        flag=1;   
    }
}
if (flag==1) console.log("No se encontró el número en el array")
console.log(arraynum);