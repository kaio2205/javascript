/**Assincronismo
 * Promises
 * @author Kaio eduardo 
 */
const { red } = require('colors')
const read = require('readline-sync')

// simulaçao banco de dados usando estrutura de dados 
const databese = {
    admin: {
        usuario: "Administrado",
        senha: "password"
    },
    prof: {
        usuario: "José de Assis",
        senha: "123456"
    }
}

// Autenticaçao de usuario
console.clear()
console.log("------------------------")
console.log("USUARIO")
console.log("------------------------")
// entrada dos dados 
let login = read.question("Login: ")
let senha = read.question("Senha: ")
console.log("------------------------")
// excecutando uma funçao assincrona com uso de promise
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`Erro de autenticaçao. ${error}`)
    })

// funçao Logar autenticaçao do usuario 
function logar(login, senha) {
    // uso de promise para trabalhar a requisiçao ao banco de dados de forma assincrona 
    return new Promise((resolve, reject) => {
        // uso do setTimeout() simular um atraso 
        setTimeout(() => {
            // logica para autenticar um usuario
            // O primeiro if verifica  se existe o login
            if (databese.hasOwnProperty(login)) {
                // segundo if verifica se a senha esta correta 
                if (databese[login].senha === senha) {
                    resolve(`Autenticaçao bem sucedida. Óla,${databese[login].usuario}`)
                } else {
                    reject("senha incorreta. Por favor tente novamente")

                }
            } else {
                reject("Usuario nao encontrado. Por favor, verifique o Login")
            }
        }, 2000)
    })
}