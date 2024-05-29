/**Assincronismo
 *  Fetch(Promises simplificada)
 * @author Kaio eduardo 
 */

const read = require("readline-sync")
console.clear()
console.log("VIA CEP")
let cep = read.question("Digite o cep: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
// apoio ao entendimento logica 
// console.log(urlAPI)
//  uso de promise para recuperar os dados do web service (API)
fetch(urlAPI)
.then((response)=>{ // obter os dados
return response.json()
})
.then((dados)=>{ // manipular os dados obtidos 
console.log(dados.logradouro)
console.log(dados.bairro)
console.log(dados.localidade)
console.log(dados.uf)
})
.catch((erro)=>{
    console.log(`Erro ao obter o endereço: ${erro}`)
})