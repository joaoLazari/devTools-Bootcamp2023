//Dibujando una X con asteriscos

//Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). LaX debe tener un tamaño variable según el número ingresado.
//Debes implementar una función llamada drawX(tamano) , donde el parámetrotamano es un número entero y dibuje la X correspondiente.
//Ejemplo:
// Llamada a la función
//dibujarX(5);
// Resultado esperado
// *   *
//  * *
//   *
//  * *
// *   *
//En el ejemplo anterior, la función drawX() se ejecuta con el tamaño 5. Elprograma dibuja una X formada por asteriscos, donde el tamaño se adaptasegún el número ingresado.
//En este caso, se muestra una X con dimensiones 5x5.
//Tu objetivo es implementar la función drawX() de manera que generecorrectamente la X con asteriscos de acuerdo al tamaño especificado.

function drawX(size){
    let line = {};
    for (let row = 0; row < size; row++) {
        line[row] = '';
        for (let col = 0; col < size; col++) {
              if((row === col) || (col === (size - row - 1))) {
                line[row] += "*"
            } else {
                line[row] += " ";
            }
        }  
    }
    return line; 
}

console.log(drawX(100));
