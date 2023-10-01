/*
El volumen de un prisma rectangular se calcula de la siguiente manera: volumen = largo x
ancho x alto. Escribe una función que calcule el volumenDeRectPrism
*/

//Declaracion de variables
let largo=0;
let ancho=0;
let alto=0;

//Declaracion de funcion
function volprism(lar,anc,alto)
    {
        return(parseFloat(lar*anc*alto))
    }

//main 
//ingreso de valores
largo=parseFloat(prompt("Ingrese el alto: "))
ancho=parseFloat(prompt("Ingrese el ancho: "))
alto=parseFloat(prompt("Ingrese el alto: "))

//saco en pantalla el rdo de la funcion
alert("El resultado es: "+volprism(largo,ancho,alto))

