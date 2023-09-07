/* ================================================================================
Realiza un script que indique si dos listas contienen los mismos datos pero en ubicaciones distintas
 ================================================================================*/

/* MODO DE RESOLUCION: 
                        * CONSIDERO QUE LOS ARRAYS PUEDEN CONTENER DISTINTAS MEDIDAS, POR EJEMPLO:
                          A1.LENGHT=4 Y A2.LENGHT=50 Y QUE TAMBIEN PUEDEN SER IGUALES
                        * CONSIDERO QUE DEBO BUSCAR LOS ELEMENTOS DE A1 EN A2 Y LOS DE A2 EN A1
                          PARA QUE SE CONTENGAN ENTRE SI.

                        1) TOMO UN ELEMENTO DEL PRIMER ARRAY Y LO COMPARO CONTRA TODOS 
                        LOS ELEMENTOS DEL OTRO ARRAY, AL TERMINAR DE RECORRER EL ARRAY
                        CON ESE ELEMENTO, SI NO ESTA, LA BANDERA "COINCIDE" SE PASO A 
                        FALSE PORQUE ESE ELEMENTO NO ESTA EN EL OTRO ARRAY.
                        ANTES DE VOLVER A ENTRAR PARA COMPARAR EL SIGUIENTE ELEMENTO 
                        DEL PRIMER ARRAY CONTRA TODOS LOS ELEMENTOS DEL SEGUNDO, 
                        SI LA BANDERA "COINCIDE"=FALSE CAMBIO LA BANDERA "RESULTADO"
                        A FALSE PARA AVISAR QUE EL ARRAY NO CONTIENE ESE ELEMENTO EN 
                        NINGUNA POSICION DEL OTRO
                        
                        2) HAGO LA MISMA COMPARACION PERO AHORA INVIERTO LOS VECTORES,
                        COMPARO A2 VS A1 (PUEDE DARSE QUE UN ELEMENTO DE A2 NO ESTE EN A1)

                        3) AL TERMINAR, SI LA BANDERA "RESULTADO"=TRUE ES PORQUE TODOS 
                        LOS ELEMENTOS DE UN VECTOR "A" ESTAN EN EL "B" Y TODOS LOS ELEMENTOS
                        DE "B" ESTAN EN "A". LO INFORMO EN PANTALLA, SI LA BANDERA ES FALSE
                        ES PORQUE FALTAN ELEMENTOS.
*/

// =============== DECLARACION DE VARIABLES =============================================
let coincide=true;          //Bandera para informar si se encuentra el valor del vector 
                            //en el vector contrario, default=SI

let resultado=true;         //Bandera para indicar que el vector coincide, por defecto=true.
let letra=""                //Almacena el ingreso del usuario
let i=0;                    //Contador
let j=0;                    //Contador
//================ FIN DE DECLARACION DE VARIABLES =======================================

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

// Ingreso la segunda lista "a2"
letra="";
i=0;
while (letra!=="zz")   
{
    letra=prompt("Ingrese un elemento para el array 1, para finalizar ingrese zz");
    if (letra!="zz")
    {
        
        a2[i]=letra
        i++;
    }
}

//Empiezo comparando los elementos del primer array contra el segundo
for (j = 0; j < a1.length; j++) 
{
    for (let i = 0; i < a2.length; i++) 
        {
            if (a1[i]!=a2[j]) 
            {
                coincide=false;
            }
    
        }
    //TERMINO LA COMPARACION DE UN ELEMENTO CONTRA TODO EL OTRO ARRAY, SI NO ESTÁ
    //LA VARIABLE RESULTADO VALDRA FALSE 
    if (coincide==false)
     {
        resultado=false   
     }
}

//AHORA DEBO REPETIR LA BUSQUEDA DE CADA ELEMENTO DEL VECTOR CONTRARIO A2 DENTRO DEL VECTOR A1
// SE INVIERTEN LOS ROLES

//Empiezo comparando los elementos del segundo array contra el primero
for (j = 0; j < a2.length; j++) 
{
    for (let i = 0; i < a1.length; i++) 
        {
            if (a2[i]!=a1[j]) 
            {
                coincide=false;
            }
    
        }
    //TERMINO LA COMPARACION DE UN ELEMENTO CONTRA TODO EL OTRO ARRAY, SI NO ESTÁ
    //LA VARIABLE RESULTADO VALDRA FALSE 
    if (coincide==false)
     {
        resultado=false   
     }
}

// Ahora solo muestro en pantalla si coincide Resultado=true o si no coincide resultado=false

if (resultado=false)    //corregir
{
    console.log("Los arrays no contienen los mismos elementos entre si");
}
else
{
    console.log("Los arrays contienen los mismos elementos");
}