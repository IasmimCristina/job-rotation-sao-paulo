// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const prompt = require("prompt-sync")(); //Importação necessária.

// Função:
const changeOrder = (textInput) => {

  let newText = "";

  for (let i = textInput.length - 1; i >= 0; i--) {
    newText += textInput[i];
  }
  return newText;
} 

console.log("===================================")
console.log("======= Inversão de STIRNG ========")

let stringInput = prompt("Digite uma string de tamanho qualquer:");
console.log("----");
console.log("Texto invertido:" + changeOrder(stringInput));
console.log("----");
console.log("===================================")




