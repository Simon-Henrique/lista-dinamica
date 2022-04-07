var colecao = [1,2,3,4,5,6]


function soma(colecao) {
    var soma = 0
    for(let c = 0;c < colecao.length;c++){
        soma += colecao[c]
        
               
    }
    return soma
}
console.log(soma(colecao))
