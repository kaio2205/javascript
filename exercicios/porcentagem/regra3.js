// Regra de 3
// importaçao
const read =  require('readline-sync')

// variaveis
let x,y, valor;

console.clear()
console.log("Regra de 3")
console.log("X% de Y = valor")

x = read.question("Digite o valor de x:")
y = read.question("Digite o valor de y:")

//  Processamento 


valor = (x*y)/100


// saida
console.log(`${x}% de ${y} =${valor.toFixed(2)} `)