var idade = 99;

console.log(idade);
console.log(typeof idade);

var sexo = 'feminino';
console.log(sexo);
console.log(typeof sexo)

var existe = false;
console.log(existe);
console.log(typeof existe)
console.log(!!existe) // quando vc declara como false 
//vai mostrar false, se declarr true vai mostrar true

var nome;
console.log(typeof nome) //retorna undefined

var endereco = null;
console.log(endereco) //null é um objeto 
console.log(endereco == null)

console.log(!!idade) // true pq está preenchid
//tudo com exceção de null e undefined vsi dar true


//////////////////
// Em JS tudo eh objeto, em ai to usando um metódo num objeto
var nome2 = 'Anderson'
var primeiroChar = nome2.charAt(0);
console.log(primeiroChar)
var nomeMaisculo = nome2.toUpperCase();
console.log(nomeMaisculo)