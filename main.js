const prompt = require("prompt-sync")();

const number1 = prompt("Ingresa el primer numero: ")
const number2 = prompt("Ingresa el segundo numero: ")
const number3 = prompt("Ingresa el tercer numero: ")
console.log()

function numeros(number1, number2, number3) {

    if (number1 == number2 && number2 == number3) {
        console.log("Todos los numeros son iguales")
        return
    }

    const numeros = [number1, number2, number3]

    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    let medio

    numeros.filter(element => {
        if (element != maximo && element != minimo)
            medio = Number(element)
    });

    // Numeros repetidos
    if (medio == undefined) {

        if ((maximo == number1 && maximo == number2) || 
            (maximo == number2 && maximo == number3) || 
            (maximo == number1 && maximo == number3)
        ) {
            medio = maximo
            console.log(`Los numeros mayores son ${maximo} y ${medio}`)
            console.log("El menor numero es ", minimo)
        } else {
            medio = minimo
            console.log("El mayor numero es ", maximo)
            console.log(`Los numeros menores son ${medio} y ${minimo}`)
        } 
    } else {

        console.log("El mayor numero es ", maximo)
        console.log("El numero del medio es: ", medio)
        console.log("El menor numero es: ", minimo)

    }

    const ordenados = [maximo, medio, minimo]
    console.log("\nOrdenados de mayor a menor: ", ordenados)
    console.log("Ordenados de menor a mayor: ", ordenados.reverse())
    console.log("---------------------------------------------")

}

numeros(number1, number2, number3)
numeros(4, 3, 2)
numeros(4, 4, 2)
numeros(4, 2, 4)
numeros(2, 4, 4)
numeros(4, 4, 4)
