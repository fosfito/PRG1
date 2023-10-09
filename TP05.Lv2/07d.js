/*
Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el –
array capitalize.

RESOLUCION: Para resolverlo sin usar metodos, comparo los el primer elemento de la palabra contra
un array de minusculas, si lo encuentra lo reemplazo por el array de minusculas (Dos arrays uno de mayus 
    y otro de minus con el mismo indice)
*/


// 5LV2.7 definicion de variables
let oracion="" //puede ser una palabra no importa es solo un nombre


//definicion de funciones
function copia(pal)
    {
        let abcmin="abcdefghijklmñopqrstuvwxyz";
        let abcmay="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let letra="";    //almaceno el primer char de la palabra/oracion
        const palarray = [];  //en este array voy a desmembrar la oracion
        letra=pal[0];
        console.log("La letra individualizada es: "+letra);

        //convierto la palabra a array
        for (let j = 0; j < pal.length; j++) 
        {
            const element = array[j];
            
        }
        for (let i = 0; i < abcmay.length; i++) 
        {
            if(letra==abcmin[i])
            {
                pal[0]=abcmay[i];
            }    
            
        }
        //pal[0]=letra
        return(pal)

    }

//main
oracion=prompt("Ingrese la oracion a capitalizar")
alert(copia(oracion));