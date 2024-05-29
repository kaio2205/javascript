/**Assincronismo
 * Async aweit
 * @author Kaio eduardo 
 */

// importar a biblioteca nativa js para trabalhar com manipulaçao 

const fs =require('fs')

// funçao para criar um arquivo 
async function criarArquivo(){
    let conteudo = "Professor Jose de Assis\nExemplo de uso dos recursos async - await"
    await gravarArquivo('teste.txt', conteudo)
}
// funcao para criar o arquivo 
async function gravarArquivo(local, conteudo){
 try{
await fs.promises.writeFile(local,conteudo)
    console.log("Arquivo criado com sucesso")
 } catch(error){
console.log(error)
 }
}

criarArquivo()