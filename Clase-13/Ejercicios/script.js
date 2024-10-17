// Ejercicio 1

function saludo() {
    let nombre = prompt("Ingrese su nombre") || "Nombre no ingresado";
    let apellido = prompt("Ingrese su apellido") || "Apellido no ingresado";
    let edad = prompt("Ingrese su edad") || "Edad no ingresada";
    console.log(`Se llama: ${nombre}, se apellida: ${apellido} y tiene: ${edad} años`);
}

// Ejercicio 2

function confirmacionLogeo() {
    let usuario = prompt("Ingrese el usuario");
    let password = prompt("Ingrese la contraseña");
    usuario === "Juan" && password === "1234" 
        ? alert("Puede acceder al sitio") 
        : alert("Alguno o ambos datos ingresados son incorrectos");
}


// Ejercicio 3

function conversion() {
    let pesos = prompt("Ingrese un valor en pesos") || "0";
    let dolares = parseFloat(pesos) / 170;
    isNaN(dolares) 
        ? console.log("Valor no válido para conversión") 
        : console.log(dolares.toFixed(2));
}


// Ejercicio 4

function parOimpar() {
    let numero = prompt("Ingrese un número") || "0";
    let numeroEntero = parseInt(numero);
    isNaN(numeroEntero) 
        ? console.log("Valor no válido") 
        : numeroEntero % 2 === 0 
        ? console.log("El número ingresado es par") 
        : console.log("El número ingresado es impar");
}


// Ejercicio 5

function promedio() {
    let numero1 = parseInt(prompt("Ingrese el primer número") || "0");
    let numero2 = parseInt(prompt("Ingrese el segundo número") || "0");
    let numero3 = parseInt(prompt("Ingrese el tercer número") || "0");
    let numero4 = parseInt(prompt("Ingrese el cuarto número") || "0");
    let numero5 = parseInt(prompt("Ingrese el quinto número") || "0");

    let promedio = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
    isNaN(promedio) 
        ? console.log("Entrada no válida") 
        : console.log(`El promedio es: ${promedio}`);
}


// Ejercicio 6

let usuarioRegistrado = "Jose";
let passwordRegistrada = "J11144";

function verificacion() {
    let usuario = prompt("Ingrese un usuario") || "Usuario no ingresado";
    let password = prompt("Ingrese una contraseña") || "Contraseña no ingresada";
    
    if (usuario === usuarioRegistrado && password === passwordRegistrada) {
        let admin = prompt("¿Es administrador? Ingrese el número 1 si lo es o 2 si no lo es") || "2";
        admin === "1"
            ? console.log("Tiene acceso a todos los campos")
            : console.log("Tiene acceso limitado");
    } else {
        console.log("Usuario o contraseña incorrecto");
    }
}
