// 3. Escriba una función arrayOfHexaColors que devuelva cualquier cantidad de
// colores hexadecimales en una matriz.
const hexaNumbersColors = "0123456789ABCDEF" 
//console.log(randomNumberColor(hexaNumbersColors.length))
let numberHex = []
let matrizHex = []

const arrayOfHexaColors = () =>{
    
for (let hexaColor = 0; hexaColor <= 1; hexaColor++){
    numberHex+= hexaNumbersColors[randomNumberColor(hexaNumbersColors.length-1)]
    console.log(numberHex)
}
    return `#${numberHex}`
}
console.log(arrayOfHexaColors())

const matrizOfHexaColors = (cantidadColoresHexa ) => {
    for (let hexaCant = 0; hexaCant <= cantidadColoresHexa ; hexaCant++){
        matrizHex.push(arrayOfHexaColors())
    }
    return matrizHex
}
console.log(matrizOfHexaColors(8))