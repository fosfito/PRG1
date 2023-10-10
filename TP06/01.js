let factorial="";

function fact(fa)
{
    let rdo=1;
    for (let i = 1; i <= fa; i++) 
    {
    rdo=rdo*i;   
        
    }
    return  rdo
}

factorial=prompt("Ingrese el factorial")
alert("El factorial de: "+factorial+" es:" + fact(factorial))