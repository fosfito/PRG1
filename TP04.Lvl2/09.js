//declaro variables
let pos="";
const array=[0,1,2,3,4,5];

//declaro funciones
function ritem(pos)
    {
        //la idea es desde la posicion a borrar correr todos uno a la izquierda y "nullear"el ultimo que queda repètido
        //0,1,2,3,4  hacer para pos=2:
        //0,2,3,4,4 corro todos una posicion menos (for)
        //0,2,3,4,null poner null el ultimo (ni bien termina el for)
        for (let i = pos; i < array.length; i++) 
             {
                array[i-1]=array[i];
             }
             array[array.length-1]=null;
             return array
    }

//main
pos=prompt("Ingrese la posicion a borrar");
alert(ritem(pos))