/*Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado*/
//window.alert("Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado")


/*var km = document.getElementById("valor_percorrido")
var dias = document.getElementById("valor_percorrido")
function resultado(){
    let km_res = Number(km.value) * 0.15
    let dias_res = Number(dias.value) * 60
    let resultado_final = Number(dias_res) + Number(km_res)
    alert(`O valor a pagar é ${resultado_final}R$`)
}*/

//aqui é um resultado perfeito, porém, eu ainda tenho a possibilidade de receber um dos campos vazio, portanto, vou modificar para evitar erros

var km = document.getElementById("valor_percorrido")
var dias = document.getElementById("valor_percorrido")
let valor_a_pagar = document.getElementById("valor_a_pagar")
function resultado(){
    if(km.value.length == 0  || dias.value.length == 0){
        alert("error")
    }else{
        let km_res = Number(km.value) * 0.15
        let dias_res = Number(dias.value) * 60
        let resultado_final = Number(dias_res) + Number(km_res)
        valor_a_pagar.innerHTML = `o valor a se pagar pelo aluguel é de <strong>R$ ${resultado_final}</strong>`
    }
    
}

