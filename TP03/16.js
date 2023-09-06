/* ============================================================================================================
Realiza un script que indique si dos listas contienen los mismos datos en las mismas 
ubicaciones, es decir si son idénticas.
==============================================================================================================*/

const a1 = []
const a2 = []
let letra="";
let i=0;
let iguales = true;

// Ingreso la primer lista "a1"
while (letra!=="zz")   
{
    letra=prompt("Ingrese un elemento para el array 1, para finalizar ingrese zz");
    if (letra!="zz")
    {
        
        a1[i]=letra
        i++;
    }
}

// Ingrreso la segunda lista "a2"
letra="";
i=0;
while (letra!=="zz")   
{
    letra=prompt("Ingrese un elemento para el array 2, para finalizar ingrese zz");
    if (letra!="zz")
    {
        a2[i]=letra
        i++;
    }
}

//Comienzo a verificar si los arrays son iguales.
if ((a1.length)!=(a2.length)) 
    {
        iguales=false;  //si el largo de los dos arrays es diferente los marco como distintos
    }
else
//Si el largo es igual, los recorro posicion a posicion comparando        
    {   
        for (let i = 0; i < a1.length; i++) 
        {
            if( (a1[i]!=a2[i]) && iguales==true) iguales=false;
        }
    }

    //muestro el resultado de lo calculado
    if (iguales==true) 
    {
    console.log("Los vectores son iguales");    
    }
    else
    {
        console.log("Los vectores son distintos");    
    }






