//Crear un número de teléfono

//Escribe una función que acepte un array con 10 números enteros positivos(entre 0 y 9) y devuelva una cadena de texto con esos números en forma denúmero de teléfono.
//Ejemplo:
//  createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-7890"
//  createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) => devuelve "(305) 127-7249"
//El formato del número de teléfono devuelto debe ser correcto para completareste desafío. ¡No olvides el espacio después del paréntesis de cierre!

function createPhoneNumber(arr) {
    if(arr.length != 10) {
        return "Error";
    } else {
        return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
    }
}

const tel1 = [5, 5, 5, 1, 3, 4, 7, 8, 9, 0];
const tel2 = [3, 0, 5, 1, 2, 7, 7, 2, 4, 9];

console.log(createPhoneNumber(tel1));
console.log(createPhoneNumber(tel2));