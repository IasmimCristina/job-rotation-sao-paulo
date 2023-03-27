// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentos = [
  ['sp', 67836.43],
  ['rj', 36678.66],
  ['mg', 29229.88],
  ['es', 27165.48],
  ['outros', 19849.53]
]

// Função que calcula o total dos faturamentos:
const createTotal = () => {
  let total = 0;
  for (let i = 0; i < faturamentos.length; i++) {
    total += faturamentos[i][1];
   
  }
  return total;
}

//Função que calcula as porcentagens:
const createPercentages = (total) => {

  let percentages = [];  
  for (let i = 0; i < faturamentos.length; i++) {
  percentages[i] = ((faturamentos[i][1]/total)*100).toFixed(1) + '%';
  }
  return percentages;
}

// ----------------------------------

console.log("================================")
console.log("============ VALORES ===========")
console.log("Valor total: R$" + createTotal() + ".");
console.log("Porcentagem de SP: " + createPercentages(createTotal())[0] + ".");
console.log("Porcentagem de RJ: " + createPercentages(createTotal())[1] + ".");
console.log("Porcentagem de MG: " + createPercentages(createTotal())[2] + ".");
console.log("Porcentagem de ES: " + createPercentages(createTotal())[3] + ".");
console.log("Porcentagem de Outros: " + createPercentages(createTotal())[4] + ".");
console.log("================================")

