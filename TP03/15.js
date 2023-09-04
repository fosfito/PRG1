/* ========================================================================
TP 03 ** EJERCICIO 15 ** : Realiza un script que dada una lista de 
caracteres devuelva si la misma es un palindromo o no.
========================================================================*/

const frase = []
let letra=0;
let igual=1;
let i=0;

// ARMADO DEL ARRAY
while (letra!=="zz")   
{
    letra=prompt("Ingrese una letra, para finalizar ingrese zz");
    if (letra!="zz")
    {
        
        frase[i]=letra
        i++;
    }
}

// VERIFICO SI ES PALINDROMO
for (let i = 0; i < frase.length; i++) 
{
    //    if (frase[i]!=" ");   // Si no es un espacio vacio procedo a comparar
    {
        
        if (frase[i]!=frase[(frase.length)-1-i]) igual=0;    // Si un caracter es distinto a su complemento, la bandera igual vale 0 (No hay coincidencia)
 
        /*{
            console.log("Paso "+frase[(frase.length)-1-i])
        }*/
    }
}

if (igual==0) 
{
    console.log("El texto "+ frase + " NO es palindromo")
}
else
{
    console.log("El texto "+ frase + " ES palindromo")
}
