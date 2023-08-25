const palabras=[]
let ingreso="inicializacion";
while (ingreso!="") {
    ingreso=prompt("Ingrese una palabra, enter para finalizar");
    if (ingreso!="") {
        palabras.push(ingreso);
    }

}
console.log(palabras);