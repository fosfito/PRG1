/* Lv2.7
Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el –
array capitalize.
*/
/*tomo el primer caracter del array de char y lo convierto a ascii, 
lo comparo si esta entre los valores ascii minusculas, si es asi, le resto 32 al ascii 
para convertirlo a mayuscula y a ese numero lo paso a char y lo guardo en la primer 
pòsicion del string
*/

// 5LV2.7 definicion de variables
let oracion="" //puede ser una palabra no importa es solo un nombre
let letra=""    //almaceno el primer char de la palabra/oracion

//definicion de funciones
function copia(pal)
    {
      letra=pal.charCodeAt(0);  //obtengo el ascii del primer elemento de la oracion (Puede ser letra o no)
      console.log("Letra= "+letra)
      if ((letra<123)&&(letra>96)) //si el ascii da entre 96y123 es una letra minuscula
        {
            letra=parseInt(letra)-32  //si es minuscula, le resto 32 para ir al ascii mayuscula (TABLA ASCII)
        }
        pal=pal.split("");  //convierto el string a array para poder reemplzar la mayuscula dentro del mismo  
        letra=String.fromCharCode(letra)  //coloco en el primer elemento el char 
        console.log("Letra vale: "+letra);
        console.log("Poronga que no anda: "+String.fromCharCode(64));
        pal[0]=String.fromCharCode(parseInt(letra));   //error no reconoce la variable con el numero dentro, si se coloca el numero anda ok
        console.log("Final: "+pal[0]);
        console.log("Final TOTAL: "+pal);
      return(pal)
    }

//main
oracion=prompt("Ingrese la oracion a capitalizar")
alert(copia(oracion));