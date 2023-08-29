let oracion=" ";
let palabra="";
palabra=prompt("Ingrese una palabra, -cancelar- finaliza");
while (palabra!="cancelar") {
    oracion=oracion + palabra+  " - ";
    palabra=prompt("Ingrese una palabra, -cancelar- finaliza");
}
alert("la palabra es: "+ oracion);