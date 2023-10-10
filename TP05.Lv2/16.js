function parhexa()
{
    let rta="";
    let rango="0123456789ABCDEF";
    for (let i = 0; i < 2; i++) 
    {

      rta+=rango[Math.floor(Math.random()*rango.length)]
        
    }
    return rta
}


function macadress()
{
    let maca="";
    for (let i = 0; i < 12; i++) {
        if (i<11) 
        {
            maca+=parhexa()+":";
        }
        else
        {
                maca+=parhexa();
        }
        
    }
    return maca
}

alert("La Mac Adress generada al azar es: "+macadress());