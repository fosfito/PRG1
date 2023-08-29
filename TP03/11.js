let aux=2                     //variable para el ingreso por teclado y auxiliar para revertir
const pp =[]                //Array 
const ppaux= []               //array auxiliar
let i

while (aux!="")                 //El usuario Crea el array
    {
        aux=prompt("Ingrese una nota, ENTER para finalizar");
        if(aux.length!=0)
        {
           pp.push(parseInt(aux));
        }
        else
        {
            alert("Programa finalizado");
        }
    }

for (i=((pp.length)-1); i >= 0; i--)     //desde cantidad de elementos -1 hasta cero
    {
    ppaux.push(pp[i]);            //[3]->0; [2]->1; [1]->2; [0]-> 3 ...
    
    } 
