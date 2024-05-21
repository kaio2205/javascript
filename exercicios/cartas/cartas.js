/**
 * Sorteo de uma carta 
 * @author Kaio eduardo 
 * Exemplo de uso do array para simplificar o codigo 
 */

function sortearCarta(){
   
   //            [0] [1] [2] [3]
    let nipes = ["♦","♡","♠","♣"]
   
   //            [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12] 
    let  faces= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    
    // sorteio dos vetores 
    let nipe = nipes[Math.floor(Math.random()  *4)] // sorteando (0 = 3)
    let face = faces[Math.floor(Math.random() *13)]// sortenando (0-12)

    // console.log (`${face}${nipe}`)
    // Determinar a cor com base no naipe sorteando antes de exibira a carta 
    
    let cor 
    if (nipe === '♡'|| nipe === '♦') {
        cor = '#ff0000' /* vermelho*/

    }
    else{
        cor = '#000000' /* preto*/
    }

    /** Renderizar a carta  */
    
    document.getElementById('sup').innerHTML = `<div>${face}</div><div>${nipe}</div>`
     
     
     
     
     document.getElementById('inf').innerHTML = `<div>${face}</div><div>${nipe}</div>`

    // aplicar a cor 
    document.getElementById('sup').style.color=cor /** add a cor  */
    document.getElementById('centro').style.color=cor /** add a cor  */
    document.getElementById('inf').style.color=cor /** add a cor  */
    /** Atualizar o centro da carta  */
    let centroCarta = document.getElementById('centro')
    if(face === 'J') {
        centroCarta.innerHTML = `<img src="./img/valete.png">`
    } else if (face === 'Q') {
        centroCarta.innerHTML = `<img src="./img/dama.png">`
    } else if (face === 'K') {
        centroCarta.innerHTML = `<img src="./img/rei.png">`
    } else {
        document.getElementById('centro').innerHTML = `${nipe}`
        document.getElementById('centro').style.color = cor
    }







}

