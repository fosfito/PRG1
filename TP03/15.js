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
    if (frase[i]!="ZZ")frase[i]=prompt("Ingrese una letra, para finalizar ingrese zz");
    i++;
}

// VERIFICO SI ES PALINDROMO
for (let i = 0; i < frase.length; i++) 
{
    if (frase[i]!=" ");   // Si no es un espacio vacio procedo a comparar
    {
        if (frase[i]!=frase[i-frase.length]) igual=0;    // Si un caracter es distinto a si complemento, la bandera igual vale 0 (No hay coincidencia)
    }
}

if (igual==1) 
{
    console.log("El texto "+ frase + " NO es palindromo")
}
else
{
    console.log("El texto "+ frase + " ES palindromo")
}
