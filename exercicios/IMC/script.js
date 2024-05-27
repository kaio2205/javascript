function calcularIMC() {
    var idade = parseFloat(document.getElementById("idade").value);
    var genero = document.getElementById("genero").value;
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
 
    if (isNaN(idade) || isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }
 
    var imc = peso / (altura * altura);
    var resultado = "";
 
    if (genero === "masculino") {
        if (idade >= 18 && idade <= 24) {
            if (imc < 18.5) {
                resultado = "Abaixo do peso";
            } else if (imc < 25) {
                resultado = "Peso normal";
            } else if (imc < 30) {
                resultado = "Sobrepeso";
            } else {
                resultado = "Obesidade";
            }
        } else {
            if (imc < 20.7) {
                resultado = "Abaixo do peso";
            } else if (imc < 26.4) {
                resultado = "Peso normal";
            } else if (imc < 27.8) {
                resultado = "Sobrepeso";
            } else {
                resultado = "Obesidade";
            }
        }
    } else {
        if (idade >= 18 && idade <= 24) {
            if (imc < 18.5) {
                resultado = "Abaixo do peso";
            } else if (imc < 24) {
                resultado = "Peso normal";
            } else if (imc < 29) {
                resultado = "Sobrepeso";
            } else {
                resultado = "Obesidade";
            }
        } else {
            if (imc < 19.1) {
                resultado = "Abaixo do peso";
            } else if (imc < 25.8) {
                resultado = "Peso normal";
            } else if (imc < 27.3) {
                resultado = "Sobrepeso";
            } else {
                resultado = "Obesidade";
            }
        }
    }
 
    document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2) + ". " + resultado;
}
 