const fecha = String(new Date());   //guardo la fecha del sistema y la convierto a texto para recorrer como un array
let dia="";
let mes="";
let anio="";
let hora="";

function showDateTime(fecha)
{
    dia=fecha[8]+fecha[9];
    for (let i = 4; i < 7; i++) 
    {
        console.log(fecha[i])
        mes=mes+fecha[i];
    }
    for (let i = 12; i < 16; i++) 
    {
        anio=anio+fecha[i];
    }
    for (let i = 17; i < 24; i++) 
    {
        hora=hora+fecha[i];
    }
    alert(dia+"/"+mes+"/"+anio+" "+hora)
}

console.log(fecha);
showDateTime(fecha);