var pessoa = new Object();
var pessoa2 = {
    nome: 'Rodrygo Goes', 
    idade: 12, 
    sexo: 'M'
}; 
// Mesmo tipo de declaração
console.log(typeof pessoa)
console.log(typeof pessoa2)

////////////////////////////////////////////////

var mostrarNome = new Function (console.log('Rodrigo Goes, Out!'))
function mostraIdade (idade = 0){
    console.log(idade)
}
mostraIdade(2)

var carro = new Array('Fusquinha', 'uno', 'opala')
console.log(carro)
var carros = ['Fusquinha', 'uno', 'opala']
console.log(carros)
