//generar color #FFCCEE hexa
let color="#"

function hexa()
{
    const valor="0123456789ABCDEF";
    return valor[Math.floor(Math.random()*valor.length)]
}

function colorh(valor)
{
    for (let i = 0; i < 6; i++) {
        valor+=hexa();
        
    }
    return valor
}

alert("El color hexa generado al azar es: "+colorh(color))