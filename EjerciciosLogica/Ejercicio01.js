//Número palíndromo

//Un número palíndromo es aquel que se lee de la misma manera de izquierda aderecha y de derecha a izquierda.
//En otras palabras, es un número que se mantiene igual cuando sus dígitos soninvertidos.
//Ejemplos:
//121, 12321 y 333.
//En este desafío, se te pide que crees una función llamada
//"next_pal()"
//quereciba como parámetro un número entero positivo, tu objetivo es que lafunción retorné el siguiente número palíndromo a partir del recibido porparámetro.
//Aquí tienes algunos ejemplos:
    //next_pal(11) debe devolver 22, ya que 22 es el siguiente númeropalíndromo después de 11.
    //next_pal(188) debe devolver 191, ya que 191 es el siguiente númeropalíndromo después de 188.
    //next_pal(191) debe devolver 202, ya que 202 es el siguiente númeropalíndromo después de 191.
    //next_pal(2541) debe devolver 2552, ya que 2552 es el siguiente númeropalíndromo después de 2541.

function inversao(num) { //function for number inversion
    let inverso = [];
    for (let i = num.length - 1; i >= 0; i--) {
        inverso = inverso + num[i];
    }
    return inverso;
}

function next_pal(num){ //even though the number given by the user is a palindrome, we need to compute the next one, so num_s and inv must start as non equals
    let num_s = "0"; //inicialization of num_s and inv as non equals
    let inv = "1";
    while (num_s !== inv) {
        num += 1;
        num_s = num.toString(); //converts the number to a string to facilitate the inversion
        inv = inversao(num_s);
    }
    return num
} 

let numero = 11;

console.log(next_pal(numero));
