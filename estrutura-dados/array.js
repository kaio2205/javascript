/** Estrutura de dados 
 * array (vetor e matrix)
 * @author Kaio eduardo 
 */


let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"];
console.log(typeof alunosEM1)

/** determinando o tamanho do array */
console.log(alunosEM1.length)

// Exibindo os dados de uma array  CRUD (creat)
console.log(alunosEM1[1])
// faz uma tabela 
console.table(alunosEM1)

// add dados ao array  (CRUD READ)
alunosEM1.push("Jorje")
console.table(alunosEM1)

//alterando um dado do array (CRUD update)
alunosEM1[0] = "Victor"

console.table(alunosEM1)

// excluindo dados do array 
alunosEM1.pop() // exclui o ultimo colocado 
console.table(alunosEM1)
delete alunosEM1[3] // exclui de acordo com oq vc ordenar atraves do colchetes 
console.table(alunosEM1)

// percorrendo o array 

let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)

// laço for 
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// for Each
notas.forEach((n) => {
    console.log(n)
})

// map()
// exemplo add 1 ponto a  notas 

let notasAtualizadas = notas.map((na) => {
    return na + 1

})
console.log(notas)
console.log(notasAtualizadas)

//  exemplo 2:conversao de sistema de pontos para letras 
// NA (nao atendeu(nota5<5))
// PA (Parcialmente atendido (nota entre 5 e 7))
// A  (Atendeu ( Nota > 7))

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return ("NA")
    }
    else if (nc > 7) {
        return ("A")
    }
    else {
        return ("PA")
    }

})
console.log(notas)
console.log(notasConvertidas)

//  iniciando umm array como um objt

console.clear()
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false

    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }

]

console.table(alunosEM3)

// Filtros
// Ordenar A - Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
}
)
console.table(alunosEM3)

// Menor idade para maior idade 
alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
}
)
console.table(alunosEM3)

// (criando uma copia  para exibiçao)
let alunosOrdenados = [...alunosEM3]

alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
}
)
console.table(alunosEM3)


// busca personalizadas em um array 
console.log(alunosEM3.filter((b) => {
return b.bolsista=== true
}))


// exemplo  alunos com idade superior a 40 anos 
console.log(alunosEM3.filter((i) => {
    return i.idade>40
    }))