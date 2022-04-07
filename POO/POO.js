import funções from './funções.js'
import ingredientes from './ingredientes.js'

let ingredientesOrdenados = funções.ord2(ingredientes, 'nome');
let containerIngredientes = document.getElementById('container-ingredientes');
let ingredientesCapitalizados = funções.capObj(ingredientesOrdenados, 'nome');


for(let ingrediente of ingredientesOrdenados){ 
    let textoHTML = `
    <div class="ingrediente">
        <img src="img/${ingrediente.img}">
        <p class="nome-ingredientes">${ingrediente.nome}</p>
    </div>
    `;
    containerIngredientes.innerHTML += textoHTML

}

/*
 <div class="ingrediente">
    <img src="" alt="">
    <p class="nome-ingredientes"></p>
</div>
*/