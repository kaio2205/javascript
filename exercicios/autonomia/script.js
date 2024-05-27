/**
 * Calculadora de uma autonomia de um carro 
 * @author kaio eduardo de carvalho santos 
 * 
 * */


document.getElementById('autonomyForm').addEventListener('submit', function(event) {
    event.preventDefault()
   
    let capacity = parseFloat(document.getElementById('capacity').value)
    let consumption = parseFloat(document.getElementById('consumption').value)
   
    if (isNaN(capacity) || isNaN(consumption) || capacity <= 0 || consumption <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.'
        return
    }
   
    let autonomy = capacity * consumption;
    document.getElementById('result').innerText = `A autonomia do carro é de ${autonomy.toFixed(2)} km.`
})