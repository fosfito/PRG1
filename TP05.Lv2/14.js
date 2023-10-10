let valores=0;

function suma(ar)
{
    let suma=0;
    for (let i = 0; i < ar.length; i++) 
    {
        suma+= parseInt(ar[i]);
        
    }
    return suma;
}

array=prompt("Ingrese los valores");
alert("La suma de los valores da:"+suma(array))