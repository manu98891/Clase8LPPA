console.log("")
console.log("Ejercicio 5.1")
let arrayPalabras = ["papa","lechuga","tomate","albaca","rucula"];

for (let index = 0; index < arrayPalabras.length; index++) {
  console.log(arrayPalabras[index]);
}

console.log("Ejercicio 5.2")
for (let index = 0; index < arrayPalabras.length; index++) {
    
    let palabra = arrayPalabras[index];
    palabra = palabra.substring(0,1).toUpperCase() + palabra.substring(1);
    console.log(palabra) 
}

console.log("Ejercicio 5.3")

let arrayVacio = []

for (let index = 0; index < 10; index++) {3
    arrayVacio.push(index)
}

console.log(arrayVacio);