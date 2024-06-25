// Tarea 1: Invertir una cadena
function invertirCadena() {
    const input = document.getElementById('inputString').value;
    const output = input.split('').reverse().join('');
    document.getElementById('outputInvertirCadena').textContent = output;
}

// Tarea 2: Número primo
function esNumeroPrimo() {
    const num = parseInt(document.getElementById('inputNumero').value);
    let esPrimo = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    document.getElementById('outputNumeroPrimo').textContent = esPrimo ? 'Sí, es primo' : 'No, no es primo';
}

// Tarea 3: Eliminar duplicados en un arreglo
function eliminarDuplicados() {
    const input = document.getElementById('inputArrayDuplicados').value.split(',');
    const output = [...new Set(input)];
    document.getElementById('outputEliminarDuplicados').textContent = output.join(', ');
}

// Tarea 4: Factorial de un número
function calcularFactorial() {
    const num = parseInt(document.getElementById('inputFactorial').value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('outputFactorial').textContent = factorial;
}

// Tarea 5: Recuento de vocales
function contarVocales() {
    const input = document.getElementById('inputCadenaVocales').value;
    const vocales = 'aeiouAEIOU';
    let count = 0;
    for (let char of input) {
        if (vocales.includes(char)) {
            count++;
        }
    }
    document.getElementById('outputContarVocales').textContent = count;
}

// Tarea 6: Suma los números en un arreglo
function sumarNumeros() {
    const input = document.getElementById('inputArraySuma').value.split(',').map(Number);
    const output = input.reduce((acc, num) => acc + num, 0);
    document.getElementById('outputSumarNumeros').textContent = output;
}

// Tarea 7: Encontrar el máximo en una operación
function encontrarMaximo() {
    const input = document.getElementById('inputArrayMaximo').value.split(',').map(Number);
    const output = Math.max(...input);
    document.getElementById('outputEncontrarMaximo').textContent = output;
}
