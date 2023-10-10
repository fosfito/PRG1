//devuelve la suma de los argumentos que le pase
const arg=[1,2,3,4]

function sumatutti(arg)
{
    let sum=0;
    for (let i = 0; i < arg.length; i++) {
        sum+=arg[i];
        
    }
    return sum
}

alert(sumatutti(arg))