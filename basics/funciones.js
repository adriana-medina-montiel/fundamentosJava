//funciones en java
//funcion sin parametros y sin retorno
function saludo(){
    console.log('hola');
}
saludo();
//funcion sin retorno
function addOne(num){
    console.log(`el ${num}+1 = ${num+1}`)
}
addOne(15);
//funcion con parametros
function suma(num1,num2){
    return num1+num2;
}
const result = suma(12,34)
console.log(result);

//funciones como constantes
//funciones anonimas
const resta = function(num1,num2){
    return num1-num2
}
const resultado =resta(12,2)
console.log(resultado);
//funciones de fecha arrow function
(param1,param2) => {
    //code
    //return
}

const duplica =(num) => {
    return num *2;
}
const multiplica = (num1, num2) => {
    console.log('Multiplica numeros')
    return num1*num2;
}

const doble = duplica (16);
console.log(doble);

const resultM = multiplica(13,26);
console.log(resultM);


//simplificado Arrow Function
let cambiaMinusculas = (word) =>{
    return word.toLowerCase();

}
//si solo es un unico parametro se pueden omitir parentesis
//su la unica linea es el return se pueden omitir llaves y return
cambiaMinusculas = word => word.toLowerCase();
