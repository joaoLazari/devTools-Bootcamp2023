//FizzBuzz

//Tu tarea es escribir un programa que recorra los números del 1 al n. Para cada número:
//Si el número es divisible por 3, debes imprimir "Fizz".
//Si el número es divisible por 5, debes imprimir "Buzz".
//Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
//Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual.
//Para lograrlo debes implementar una función llamada fizzBuzz(n), que tome comoparámetro un número entero n y ejecute el juego FizzBuzz.
//Ejemplo:
// Llamada a la función
//fizzBuzz(15);
// Resultado esperado
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
//En el ejemplo anterior, la función fizzBuzz se ejecuta con el número 15. El programarecorre los números del 1 al 15 y aplica las reglas del juego FizzBuzz. Los números queson divisibles por 3 se reemplazan por "Fizz", los números divisibles por 5 se reemplazanpor "Buzz" y los números divisibles tanto por 3 como por 5 se reemplazan por"FizzBuzz". El resultado se imprime en la consola.
//Tu objetivo es implementar la función fizzBuzz de manera que cumpla con las reglas deljuego y produzca el resultado esperado.

function fizzBuzz(n) {
    let result = {};
    for (let i = 1;  i <= n; i++) {
        if((i%3 === 0) && (i%5 === 0)){
           result[i] = `FizzBuzz`;
        } else if((i%3 === 0) && (i%5 !== 0)){
            result[i] = `Fizz`;
        } else if((i%3 !== 0) && (i%5 === 0)){
            result[i] = `Buzz`;
        } else {
            result[i] = i;
        }
    }
    return result;
}

console.log(fizzBuzz(15));