
let aux=2                     //variable para el ingreso por teclado
let canti=0
let promedio;
const notas =[]             //Variable para el almacenamiento de las notas




while (aux!="") 
    {
        aux=prompt("Ingrese una nota, ENTER para finalizar");
        if(aux.length!=0)
        {
           notas.push(parseInt(aux));
        }
    }
    aux=0

for (let i = 0;i < notas.length;i++)        //calculo del promedio total
    {
    aux=(aux)+(notas[i]);
    }
    (promedio)= (aux)/(notas.length);

aux=0;
for (let i = 0;i < notas.length;i++)        //calculo del promedio >=7
   {
    if (notas[i]>=7) 
        {
        aux=aux+notas[i];
        canti++;
        }
    }

    if (notas.length==0) 
    {
    console.log("No se ingresaron notas. Programa finalizado");         // Filtro si no hay notas para salir
    }
    else
    {
    console.log("E promedio de todas las notas es: "+promedio);
    console.log("El promedio de notas mayores o iguales a 7: ",parseFloat(aux)/parseFloat(canti));
    }

