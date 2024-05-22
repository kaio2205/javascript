/**simples Slide  */


let slides = ["slide1.jpg","slide2.jpg","slide3.jpg"]
let intervalo = 3000 // 3000mil
//3000 ajuste para 3 slide trocando a cada 1s 
let indice = 0 

show() 

function show(){
    document.getElementById('slide').className+='FadeOut'
setTimeout(()=>{
    document.getElementById('slide').src=(`img/${slides[indice]}`)
    document.getElementById('slide').className = ""
},1000) /**ajuste 1 trocar slide a cada 1s  */
indice++

   if (indice===slides.length) {
    indice=0
   }
   setTimeout(show, intervalo)/** repetir o  processo infinitamente ajustar o intervalo de acordo com o numero de slide e tempo de troca emtre eles  */
}
// ajuste  