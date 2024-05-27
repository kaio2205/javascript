/**
 * Cartas pokemon
 * @author Kaio eduardo de carvalho santos 
 */

function sortearCarta(){
     
    let pokemon = ["charizard","squi","tyra","zap","mew","mewtwo"]
    
    let carta = pokemon[Math.floor(Math.random() * 6)]
    let meioCarta = document.getElementById('centro')
    
    meioCarta.innerHTML =`<img src="./img/${carta}.png">`
}