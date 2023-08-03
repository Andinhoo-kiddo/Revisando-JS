// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 222

console.log(produto)

delete produto['marca do produto']
delete produto.preco 
console.log(produto)

const carro = {
    modelo: 'Skyline GT-R',
    preco: 6700000,
        proprietario: {
            nome: 'Andinho rei delas',
            idade: 17,
            endereco: {
                logradouro: 'Rua ABA',
                numero: 22
            }
        },
        condutores: [
            {
                nome: 'Junior',
                idade: 19
        }, {
            nome: 'Ana',
            idade: 26
        }], 
        calcularValorSeguro: function() {
            // ...
        }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Estádio São Januário' // qnd vc receber de algum parametro string, pode acessar assim
console.log(carro)

delete carro.condutores
console.log(carro) // se ligue pra n acessar um atributo de algo q está undefined, q quebra o cod
