//funciones de orden superior
// high order functiones
//funciones que reciben otras funciones como paramentros

const myfunctionWithBigName = () =>{
    console.log('Esta es una funcion');
}

myfunctionWithBigName();

const myfun = myfunctionWithBigName;

myfun();

const funOne = () => {
    console.log('Ejecutuda funcion 1');
    
}

const funTwo = (name) => {
    console.log('hola'+" " +name);
    console.log('Ejecutuda funcion 2');

}
funOne();
funTwo('adri');

const funThree = (otherFunction) => {
    otherFunction();
    console.log('Ejecucion 3');

}

funThree(funOne);