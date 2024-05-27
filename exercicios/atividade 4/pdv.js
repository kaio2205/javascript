/**
 * PDV - Ponto de vendas
 * @author Professor de Assis
 */

//variáveis
let produto, lucro, totalFinal 

function calcularDesconto() {
    //entrada
    produto = Number(frmPdv.txtproduto.value)
    lucro  = Number(frmPdv.txtlucro.value)
   totalFinal = Number(frmPdv.txtvenda.value)

    //processamento
     totalFinal = (produto+ lucro) /100 
    //saída
    frmPdv.txtproduto.value = `R$ ${produto.toFixed(2)}`
    frmPdv.txtlucro.value = `% ${lucro.toFixed(2)}`
    frmPdv.txtvenda.value = `R$${venda.toFixed(2)}`
    
}

