console.log("Ejercicio 6.1 y 6.2")

let suma = (a, b) => {
    if (typeof (a) === "number" && typeof (b) === "number") {
        if (Number.isInteger(a, b)) {
            return a + b
        } else {
            return console.log("One of the inputs is not an interger")
        }
    }else{
        return console.log("One of the inputs is not a number")
    }
}
console.log(suma(1, 2))