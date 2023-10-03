//variables
let valor=0;
let par=0;
let impar=0;
let rta="";

//funciones
function parimpar(valor)
    {
        for (let i = 0; i <= valor; i++) {
            if (i%2==0)
             {
                par++;
            }
            else
            {
                impar++
            }
        }
            rta="En "+valor+" hay "+par+" valores pares y "+impar+" valores impares"
        return rta
    }

    //main
    valor=prompt("Ingrese valor");
    alert((parimpar(valor)));