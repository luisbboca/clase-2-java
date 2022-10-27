/*let edadUsuario = parseInt(prompt("Cual es tu edad?"));
if(edadUsuario >=18){
    alert('Puedes comprar alcohol');
}
else{
    alert('No puedes comprar alcohol');
}*/

//vamos a pedirle al usuario que ingrese un numero y regresa si es par o impar

/*let numero = parseInt(prompt('Ingresa un numero'));
let esPar = numero%2 == 0;
console.log(numero%2);

if (esPar){
    alert('SI es Par!!');
}
else{
    alert('Es Impar ;D');
}*/

//Pedir al usuario un numero
//Checar si el numero es multiplo de 3
// Imprimir "Fizz"
//Checar si el numero es multiplo de 5 
// Imprimir "Buzz"

let usuarioNum = parseInt(prompt('Ingrese un numero'));

if(usuarioNum%3 == 0 && usuarioNum%5 == 0){
    alert('FizzBuzz')
}
else if (usuarioNum%5 == 0){
    alert('Buzz')
}
else if (usuarioNum%3 == 0){
    alert('Fizz')
}
else{
    alert('Nada')
}
