/**
 * Estrutura de dados
 * Objetos
 * @author Professor José de Assis
 */

const funcionario1 = {}
console.log(typeof funcionario1)
//adicionar dados a estrutura (CRUD Create)
funcionario1.nome = "José"
funcionario1.cargo = "Professor"
funcionario1.email = "josedeassisfilho@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.joseassis"
//listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "José de Assis"
console.log(funcionario1)
//excluir dados da estrutura (CRUD Delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1 //... spread operator (união de 2 estruturas)
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "acrobata",
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1 //... spread operator (união de 2 estruturas)
}
console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() //executar a função interna da estrutura