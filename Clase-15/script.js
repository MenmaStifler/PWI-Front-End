let listaAlumnos=[];//creamos una variable global con un array vacio

//funciones
//conjunto de instrucciones 

//definir (crear)
//return -> le pedimos que nos retorne (devuelva ) algo (lo que le coloquemos a la derecha)
//indica el fin de la funcion,corta la funcion, no ejecuta lo que venga despues

//2 opciones 
//tradicional
/* sintaxis:

function nombreFuncion(parametros){
    todas las acciones a realizar
} 

*/
saludarDiego() 

function saludar(nombre,apellido) {
    console.log("Holaa! "+nombre+" "+ apellido)//console.log("Holaa! "+ "Claudia")
    alert(nombre+20)
}
function saludarDiego() {
    console.log("Holaa! Diego")
}
function saludarAna() {
    console.log("Holaa! Ana")
}
function agregarAlumno(alumno) {
    if(isNaN(alumno)){
        listaAlumnos.push(alumno);
        console.log(listaAlumnos)        
    }else{
        alert("lo ingresado no es un nombre")
    }
    

}

//                      4  5
function sumaDeDosNum(num1,num2){
    let suma =num1+num2;
    return [suma,"hola"] 
    alert("HOLLLAAAA")//no lo ejecuta por que se escribio despues del return
}

function promedioDosNum(total) {
    console.log(total/2)
}



//funcion flecha - arrow function 
/* sintaxis : (parametros)=>{
        instrucciones
    }

*/

const sumaDeDosNumBis=(num1,num2)=>{
    let suma =num1+num2;
    return suma
};

const saludarADiego=()=>{
    console.log("Holaa! Diego")
};


// ejecucion -> es la misma para cualquier definicion de funcion (tradicional o flecha)
//sintaxis nombreFuncion()
sumaDeDosNumBis(2,5)
// saludar("Cristian","Sanchez")
// saludar("Claudia"+30)
// saludar(33)
// let datoNombre=prompt("Ingrese su nombre")
// let datoApellido=prompt("ingrese su apeliido")

// saludar(datoNombre,datoApellido )

console.log(agregarAlumno("Marta"))//undefined por que no nos retorna nada esa funcion
//agregarAlumno(33)
let respuesta = sumaDeDosNum(4,5);//array [suma,"hola"]
promedioDosNum(respuesta[0])//promedioDosNum(suma)

///----- dato de color que retomamos mas adelante 
let fecha = new Date
fecha.getHours()


/// detalle de orden - recomendado 

//variables globales

//definir las funciones

//ejectuar las funciones 