// tipagem dinamica
// Constante de variaveis 

console.clear()
console.log("STRINGS___________________________________")
let nome = "kain"
console.log(nome)
console.log(typeof(nome))

 nome="kaiozadas"
 console.log(nome)
 console.log(nome.replace("kaiozin","kaiozadass"))


//  concatenaçao 
console.log("Professor:"+nome)
console.log(`Professor${nome}`)

console.log("NUMBERS___________________________________")
let peso = 62
let altura = 1.65
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc= peso / (altura*altura)
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("BOOLEANS________________________")
let sw = true
console.log(typeof(sw))
console.log(`Chaves:${sw}`)


// Atençao!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log (10 / 0) 
console.log("3" +2)     //concatena
console.log("3" -2)     // faz a conta
console.log("3" *2)     
console.log("3" /2)
console.log("3x" -2)
console.log(0.5+ 0.5)
console.log(0.1+ 0.3)

