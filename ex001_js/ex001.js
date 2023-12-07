/*texto do problema: Se listarmos todos os números naturais abaixo 10 que são múltiplos de 3 ou 5, Nós temos 3,5,6 e 9. A soma desses múltiplos é 23 Encontre a soma de todos os múltiplos de  3 ou 5 abaixo de 1000. */
//criar uma variável acumuladora, para que eu possa guardar o valor da minha repetição
let soma = 0
//contador que vai de 1 a 1000.
for (let c = 1; c <= 1000; c++)/*definir o que é um número que é multiplo de 3 ou 5*/ 
  {
    if(c % 3 === 0  || c % 5 === 0 )//se for multiplo some
    {
      soma += c //somar todos os números que são multiplos de 3 ou 5
    }
  }
  //dar o resultado
  console.log(soma)


  /*problemas possíveis
  1 - confusão se não criar uma variável acumuladora, afinal, dentro da repetição vamos apenas declarar números que são divisiveis por 3 ou por 5
  mas não conseguiremos somar eles
  2 - se colocar o resultado de soma dentro da função if, também temos problema, já que enquanto a repetição ocorrer o que tiver dentro da função
  vai continuar acontecendo, portanto, a soma vai ser disparada no console log várias vezes e só queremos o resultado final*/
