//--------------------------------------------------------------------------------------------------------------------------------
/* 
Verifico si puede desguazar una variable de tipo char sin usar metodos

Conclusiones: 1) No puedo modificar por arrays un char ( palabra[2]="C"; )
*/

let palabra="CASA";
//convierto el string a array
palabra=palabra.split("");
console.log(palabra);
palabra[2]="C";
console.log(palabra);

//-------------------------------------------------------------------------------------------------------------------------------

