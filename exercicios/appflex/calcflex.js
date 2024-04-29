// app flex
// @author Kaio Eduardo

let etanol,gasolina
function calcular() {
    etanol=Number(frmFlex.txtetanol.value.replace(",","."))
    gasolina=Number(frmFlex.textgasolina.value.replace(",","."))
    //console.log(etanol);
   // console.log(gasolina);
    // validaçao  de campo obrigatorio
    if(frmFlex.txtetanol.value===""){
        alert("Preencha o valor do etanol")
        frmFlex.txtetanol.focus()
    }
    else if(frmFlex.textgasolina.value===""){
        alert("Preencha o valor da gasolina")
        frmFlex.textgasolina.focus()
    }
    
    
    else{
        if (etanol< 0.7 * gasolina){
            document.getElementById('status').src="./img/etanol.png"
        
            }
        
            else{
                document.getElementById('status').src="./img/gasolina.png"
            }
    }
    
    
}

function Limpar(){
    document.getElementById('status').src="./img/flex.png"
}