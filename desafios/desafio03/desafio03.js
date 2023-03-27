// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
const fs = require('fs');



let fileFaturamento = fs.readFileSync('desafios/desafio03/faturamento.json');
let fileParsed = JSON.parse(fileFaturamento);

//Funções:
const biggerSmallest = () => {
  let maior = 0, menor = 0;
  for (let i = 0; i < fileParsed.length; i++) {
    if (maior < fileParsed[i].valor) maior = fileParsed[i].valor
    if ((menor == 0) || (menor > fileParsed[i].valor)) menor = fileParsed[i].valor;
  }
  return {
    "bigger": maior.toFixed(2),
    "smallest": menor.toFixed(2)
  }
}
//Função que calcula o total e a média do faturamento:
const createMedia = () => {
  let total = 0, media, numDias = 0;
  for (let i = 0; i < fileParsed.length; i++) {
    if (fileParsed[i].valor != 0) {
      total += fileParsed[i].valor;
      numDias++;
    }
    media = (total / numDias).toFixed(2);
    return media;
  }
}
//Função que calcula a quantidade de dias que superou a média:
const aboveMedia = (media) => {
  let dias = 0;
  for (let i = 0; i < fileParsed.length; i++) {
    if (fileParsed[i].valor > media) dias++
  }
  return dias;
}
// ------------------------------------

console.log("==============================")

console.log("--- Sendo o número da média mensal de " + createMedia() + " reais, a quantidade de dias que superarou foi " + aboveMedia(createMedia()) + " dias.")
console.log("--- Maior valor do faturamento: " + biggerSmallest().bigger + " reais.")
console.log("--- Menor valor do faturamento: " + biggerSmallest().smallest + " reais.")

console.log("==============================")

