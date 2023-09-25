//Strings
const firstName='Adriana';
const lastName='Madina';
const fullName= firstName+" "+lastName;

console.log("i'm "+ fullName)
console.log("i\'m "+ fullName)

//String Multilinea
const menu = `
elige:
1- Opción 1
2- Opción 2
3- Opción 3
4- Opción 4
`;
console.log(menu);
//Strings Templetes
//placeholder 

const city = 'Huamantla';
const phone = '2471070244';
const rol = 'Profesor';

const presentacion = ` 
holaa
soy ${fullName}, ${rol} en la SpeechSynthesisUtt
Vivo en  ${city}
Te puedes comunicar conmigo en ${phone}
`;
console.log(presentacion);