/**
 * sortear uma carta
 * @author Kaio eduardo
 */
 
function sortearCarta() {
    //            [0] [1] [2] [3]
 
    let nipes = ["✷", "❋", "", "❁"]
    //           [0] [1] [2] [3] [4]
    let faces = ["charmander", "squirtle", "tyranithar", "rayquaza",]
 
    // SORTEIO DO INDICE DOS VETORES
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 4)]
 
 
    // console.log(`${face} ${nipe}`)
 
 
    // determinar a cor com base no nipe sorteado antes de exibir a carta
    let cor
 
 
    // renderizar (desenhar, exibir, "dar vida") a carta
    document.getElementById('supEsq').innerHTML = `<div> ${face}</div> <div> ${nipe} </div>`
 
 
 
    document.getElementById('infDir').innerHTML = `<div> ${face} </div> <div>${nipe}</div>`
 
    //aplicar a cor
    document.getElementById('supEsq').style.
        color = cor // adiciona css
 
 
    document.getElementById('centro').style.backgroundColor = ''; // ou a cor que quiser
 
    document.getElementById('infDir').style.
        color = cor // adiciona css
 
    //atualizar centro da carta
 
    if (face === 'charmander') {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/img/charmander (1).png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>charmander </p>`
        document.getElementById
            ('infDir').innerHTML = `<p> 40 PTS</p>`
            document.getElementById('centro').style.backgroundColor = '';
   
        } else if (face === 'squirtle') {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/img/squartle.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>squirtle </p>`
        document.getElementById
            ('infDir').innerHTML = `<p> 20 PTS</p>`
        document.getElementById('centro').style.backgroundColor = '';
 
    } else if (face === 'rayquaza') {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/img/rayquaza.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>rayquaza</p>`
        document.getElementById
            ('infDir').innerHTML = `<p>Thunderbolt 110 PTS</p>`
        document.getElementById('centro').style.backgroundColor = '';
       
 
    } else {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/img/tiranitar.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>tyranitar ✷</p>`
        document.getElementById
            ('infDir').innerHTML = `<p>tyranitar 200 PTS</p>`
            document.getElementById('centro').style.backgroundColor = '';
 
    }
}