//Generar ID de 7 chars

//funcion que devuelve un char del id
function generator()
{
    const key="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return key[Math.floor(Math.random()*(key.length-1))]
}

//funcion que llama a la anterior 7 veces
function idgen()
{
    let idname="";
    for (let i = 0; i < 7; i++) {
        idname+=generator();

        
    }
    return idname
}

alert("El useriD es: "+idgen())