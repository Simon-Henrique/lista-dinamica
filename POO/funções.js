function capitalizarObj (colecao, atributo) { //vetor e atributo
    if(typeof colecao[0] == 'object') { // primeiro uma pequena validação, só executa a função se for objeto
        var res = colecao.map(function(obj){ // uma variável que contem a função map(), que mapeia um vetor, nesta função recebe-se o parâmetro vetor q nomeamos neste exemplo como obj
            var primeiraletraM = obj[atributo].charAt(0).toUpperCase() 
            var restante = obj[atributo].slice(1)
            obj[atributo] = primeiraletraM + restante
            return obj
        })
        console.log(res)
    } else {
        
        var res2 = colecao.map(function(vetor){
            var primeiraletraM = vetor.charAt(0).toUpperCase()
            var restante = vetor.slice(1)
            var junção = primeiraletraM + restante
             
            
            return junção
        })
        console.log(res2)
    }
}
function ordenarOBJ (colecao, atributo){
  return atributo ?
    colecao.sort(function(a,b){
        return typeof a[atributo] == 'number' ?
            a[atributo] - b[atributo]:
            a[atributo].localeCompare(b[atributo])
    }):
    colecao.sort(function(a,b){
        return typeof a == 'number' ?
        a - b : a.localeCompare(b)
    }) 
        
    
}
/*function ordenarOBJ(colecao, attr){    
    return attr ?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a == 'number' ?
                a - b :
                a.localeCompare(b)
        });
}*/
function ordenar (vetor) { //função para alterar o sort para pt-br
    var ordenado = vetor.sort(function(a,b) {
        return a.localeCompare(b)  //compara a localidade, por exemplo, latinos
    })
    return ordenado
}

function capitalizar (vetor) { // função para deixar a primeira letra maiúscula
    var ingmodificado = [];
for(var c = 0;c < vetor.length;c++) {
    var primeiraletraM = vetor[c].charAt(0).toUpperCase()
    var restante = vetor[c].slice(1)
    var junção = primeiraletraM + restante
    ingmodificado[c] = junção
}
return ingmodificado
}

function caixaAlta(vetor) { //todos os valores do vetor em caixa alta
    var caixa_alta = [];
    for(var c = 0;c  < vetor.length;c++) {
       var caixa_alta1 = vetor[c].toUpperCase()
       caixa_alta[c] = caixa_alta1
    } 
    return caixa_alta


}
export default { //exportando um objeto
    cap: capitalizar, //nome: propriedade
    ord: ordenar,
    cxa: caixaAlta,
    capObj: capitalizarObj,
    ord2: ordenarOBJ
}