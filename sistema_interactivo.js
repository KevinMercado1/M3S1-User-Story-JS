const name = prompt("What's your name?:", "")
const age = Number(prompt("How old are you?:", ""))

if (isNaN(age)) {
    console.error('Please, the age must be a number!');
} else if (age >= 18) {
    alert(`Hola ${name}, tienes ${age} años y eres mayor de edad. ¡Prepárate para grandes oportunidades!`);
} else {
    alert(`Hola ${name}, tienes ${age} años y eres menor de edad. ¡Sigue aprendiendo!`);
}
