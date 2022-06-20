// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
// y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]

console.log("");
console.log("Ejercicio 4.1");
if (Math.random() > 0.5){
  console.log("Greater than 0,5")
}else{
    console.log("Lower than 0,5")
}

console.log("");
console.log("Ejercicio 4.2");
let age = Math.floor(Math.random() * 100 + 1);
if (age > 65) {
  console.log("Jubilado");
} else if (age > 18) {
  console.log("Mayor");
} else {
  console.log("Menor");
}