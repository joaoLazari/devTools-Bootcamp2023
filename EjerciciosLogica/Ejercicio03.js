//Contador de existencias

//Dado un array de nombres, tu objetivo es crear una función que cuente cuántas vecesse repite cada nombre y los represente con asteriscos (*).
//Debes implementar la función countNameRepetitions(names), que tomará comoparámetro un array de nombres y devolverá un objeto con los nombres y surepresentación de asteriscos correspondiente.
//Ejemplo:
//const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
// Llamada a la función
//const resultado = countNameRepetitions(nombres);
// Resultado esperado
//
//Juan: '**',
//María: '***',
//Pedro: '*'

//En el ejemplo anterior, se tiene un array de nombres donde 'Juan' se repite dos veces,'María' se repite tres veces y 'Pedro' se repite una vez.
//La función countNameRepetitions debe imprimir los nombres y su representación deasteriscos correspondiente.
//Recuerda que cada vez que un nombre se repite, se debe agregar un asteriscoadicional al valor asociado al nombre en el objeto de resultado.

function countNameRepetitions(n){
    const dis_names = [...new Set(n)]; //creates a new array with unique elements from the n array
    const count = new Array(dis_names.length); //creates an empty array for the name occurences counting in n
    count.fill('');
    let result ={};
    for (let i = 0; i < dis_names.length; i++) {
        for (let j =0; j < n.length; j++) {
            if(dis_names[i] === n[j]) {
                count[i] += '*';
            }          
        }
        result[i] = `${dis_names[i]}: '${count[i]}'`;
    }
    return result;
}


const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María', 'João', 'Pedro'];
const resultado = countNameRepetitions(nombres);
console.log(resultado);
