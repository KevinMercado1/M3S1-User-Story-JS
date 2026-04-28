// En este apartado está las constantes definidas//
const userName = prompt('Cúal es tú nombre?:', '').trim();
const age = Number(prompt('Cuantos años tienes?:', '').trim());

// Aquí va los condicionales que hacen preguntar la edad del cliente.//
if (isNaN(age)) {
  console.error('Por favor, deben ser NUMEROS!');
  alert('Error: Debes ingresar un número para la edad.');
} else if (age >= 18) {
  //Aquí esta el condicional que hace sí es MAYOR de edad.//
  alert(
    `Hola ${userName}, tienes ${age} años y eres mayor de edad. ¡Prepárate para grandes oportunidades!`
  );
} else {
  //Aquí está el condicional que se ejecuta si es MENOR de edad.//
  alert(
    `Hola ${userName}, tienes ${age} años y eres menor de edad. ¡Sigue aprendiendo!`
  );
}
