/*Se listarmos todos os números naturais abaixo 10 que são múltiplos de 3 ou 5, Nós temos 3,5,6 e 9. A soma desses múltiplos é 23 Encontre a soma de todos os múltiplos de  3 ou 5 abaixo de 1000. */
//contador que vai de 1 a 1000.
//definir o que é um número que é multiplo de 3 ou 5
//se for multiplo some
//somar todos os números que são multiplos de 3 ou 5
//dar o resultado




let soma = 0
for (let i = 1; i <= 1000; i++) {
    if(i % 3 === 0  || i % 5 === 0 ){
      soma += i
    }
  }
  
  console.log(soma)
