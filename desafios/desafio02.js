// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//Função que efetua o teste:
const isFibonacciNumber = (value) => {
  if (value == 0) console.log(value + " está dentro da sequência Fibonacci!")
  else {
    let first = 0, second = 1, next, itisFibonacci = false;
    do {
      next = first + second;
      if (next == value) {
        itisFibonacci = true;
        break;
      }
      first = second;
      second = next;
    } while (next < value);

    if (itisFibonacci) console.log(value + " está dentro da sequência Fibonacci!")
    else console.log(value + " não está dentro da sequência Fibonacci.")
  }

}
const prompt = require("prompt-sync")(); //Importação necessária.

// ------------------------------------------------------
console.log("==========================================");
console.log("=============FIBONACCI CHECKER============");
let valor = prompt("Digite um número: ");
isFibonacciNumber(valor)
console.log("==========================================");
