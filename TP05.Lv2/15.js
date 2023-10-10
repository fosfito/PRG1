//devuelve una terna de la direccion ip xxx.xxx.xxx.xxx  Para xxx entre cero y 255
function terna1()   
{
    return Math.floor(Math.random()*255)        //genero un valor entre 0-255
}

function ip()           //genero la ip
{
    let rta="";
    for (let i = 0; i < 4; i++)         //genero 4 veces la terna
    {
        if (i<3)
         {
          rta+=terna1()+"."
        }
        else
        {
            rta+=terna1()
        }
        
    }
    return rta
}

alert("La ip del usuario será: "+ip())