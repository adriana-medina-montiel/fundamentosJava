//Concionales 
// if (exp) {}
const age =18;
if(age >=18){
    console.log('Es mayor')
}
// if (exp) {} else {}
if(age >=18){
    console.log('es mayor');
}else{
    console.log('Es menor');
}

// if ternario  (exp)? true false;
(age >=18)? console.log('Es mayor'): console.log('Es menor');
//if (exp) {} else if (exp) else {}
const ppt= Math.random();
if(ppt < 0.33){
    console.log('Cayó Piedra');
}else if (ppt <0.66){
    console.log('Cayó papel');
}else{
    console.log('Cayó tijera')
}

// switch / case
const day = Math.ceil(Math.random()*7);
switch(day){
    case 1:
        console.log('es domindo');
        break;
    case 2:
        console.log('es lunes');
        break;
    case 3:
        console.log('es martes');
        break;
    case 4:
        console.log('es miercoles');
        break;
    case 5:
        console.log('es jueves');
        break;
    case 6:
        console.log('es viernes');
        break;
    case 7:
        console.log('es sabado');
        break;
}
// Truthy and falsy
const num0fStudents =10;
if(num0fStudents===0){
    console.log("No hay alumnos");
}else{
    console.log(`hay ${ num0fStudents } alumnos`);
}


if(num0fStudents){
    console.log(`hay ${ num0fStudents } alumnos`);
}else{
    console.log('no hay alumnos');
}

const usuario='Adri';
const invitado= usuario || 'desconocido';
console.log(invitado);