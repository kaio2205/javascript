/**
 * pdv ponto de vendas 
 * @author Kaio eduardo 
 */


// variaveis 
let total, totalDesconto, valorDesconto, desconto, valorPago, troco


function calucularTotal(){

// entrada 
total = Number(frm.Pdv.txtTotal.value)
total = Number(frm.Pdv.txtPorcentagem.value)

//processamento 
valorDesconto (total* desconto)/100

totalDesconto = total - ((total* desconto)/100)


// saida 
frmPdv.txtDesconto.value = `R$ ${ valorDesconto.toFixed(2)}`
frmPdv.txtTotalDesconto.value = `R$ ${ totalDesconto.toFixed(2)}`

}

function calucularTroco(){
// entrada 
ValorPagor = Number(frmPdv.txtValorPago.value)
// processamento 
troco = valorPago - totalDesconto

// saida 
frmPdv.txtTroco.value = `R$ ${troco.toFixed(2)}`
}

