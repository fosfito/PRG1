const palabras = [["casa", "pc", "puerta"],["departamento", "vidrio", "silla"],
                  ["control", "botella", "vaso"],["latas","perro","gato"]]
// El array palabras contiene 4 ELEMENTOS(i) y cada uno de ellos tiene 3 PALABRAS dentro (j) 
// o lo que es igual palabras[i][j]   i=4 j=3
let palabraelegida="";     //guarda la palabra al azar como texto
let aux=""                 //para guardar la letra al intercambiar A=>aux B=>A Aux=B 
let indice1=0;              //indice de la primer letra al azar a cambiar
let indice2=0;              //indice de la segunda letra al azar a ser cambiada
const arrayauxiliar=[]      //array donde voy a guardar la palabra como array de char

//elijo al azar un elemento de         [ i ]                                    [ j ]
palabraelegida=palabras[Math.floor(Math.random()*(palabras.length-1))][Math.floor(Math.random()*3)]

//convierto la palabraelegida a un array de letras
for (let i = 0; i < palabraelegida.length; i++) 
{
arrayauxiliar[i]=palabraelegida[i];    
}

for (let i = 0; i < 10; i++) 
{
    //con la palabra seleccionada, elijo dos indices para intercambiar las letras de esa palabra
    indice1=Math.floor(Math.random()*arrayauxiliar.length);
    indice2=Math.floor(Math.random()*arrayauxiliar.length);

    //hago el intercambio
    aux=arrayauxiliar[indice1]                         //aux     <= letra1
    arrayauxiliar[indice1]=arrayauxiliar[indice2]     //letra1  <= letra2
    arrayauxiliar[indice2]=aux                         //letra2  <= aux
}

console.log("La palabra mezclada es:"+arrayauxiliar);
console.log("La palabra original es: "+palabraelegida);


//Si la palabra mezclada la quiero volver a armar para que se 
//vea junta Sin las separaciones de las comas de arriba:
let resultado=""            //variable donde voy a concatenar cada elemento del array
for (let i = 0; i < arrayauxiliar.length; i++) 
{
    resultado+=arrayauxiliar[i];
}
console.log("La palabra mezclada vista con las letras juntas es: "+resultado);
