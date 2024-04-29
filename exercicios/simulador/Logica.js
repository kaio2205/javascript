// Js Simulador de Operador Logico
// @Author Kaio Eduardo


// valor recebido
// 1 acender a lampada
// 2 apagar a lampada
// 3 quebrar a lampada

let valor      

let quebrada = false //estado da Lampada

function simular(valor){
// quebrar a lampada

if(valor ===3){
    let beep = new Audio()
    beep.src = "./sound/glassbreaking.wav"
    beep.play(lamp)
    document.getElementById("lamp").src = "./img/broken.jpg"
    quebrada = true
}
}