/* Lv2.7
Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el –
array capitalize.
*/

//tomo el primer caracter del array de char y lo paso a uppercase

// 5LV2.7 definicion de variables
let oracion="" //puede ser una palabra no importa es solo un nombre
let letra=""    //almaceno el primer char de la palabra/oracion

//definicion de funciones
function copia(pal)
    {
      return(pal.charAt(0).toUpperCase() + pal.slice(1));

    }

//main
oracion=prompt("Ingrese la oracion a capitalizar")
alert(copia(oracion));