let real,dollar,dollar1
 

function calcular() {
    real = Number(frmreal.txtreal.value)
    dollar = Number(frmreal.txtdollar.value)

    dollar = real * dollar1

    frmreal.txtresultado.value = real.toFixed(2)
}