// usando a notação literal 
const obj1 = {
    // ...
}

console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object) // function / object

const obj2 = new Object 
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome  //tornou a variavel pública (apenas nome)
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }

}

const p1 = new Produto('Caneta', 13.99, 0.4)
const p2 = new Produto('Curso de Urubu do Pix', 899, 0.01)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const funcionario1 = new criarFuncionario('Adenor', 3000, 2)
console.log(funcionario1, funcionario1.getSalario())

const funcionario2 = new criarFuncionario('Riquelme', 9900, 10)
console.log(funcionario2, funcionario2.getSalario())

// Object.create 
const filha = Object.create(null)
filha.nome = 'Bia'
console.log(filha)

// Uma função famosa que retorna um objeto (transformar um JSON em Object)
const fromJSON = JSON.parse('{"info": "Sou um JSON e vou virar um negocinho"}')
console.log(typeof fromJSON.info)