const arraynum = [];
let numero=1;

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
        console.log("El valor:"+numero+" Se encuentra en la posicion "+index);    
    }
}
console.log(arraynum);