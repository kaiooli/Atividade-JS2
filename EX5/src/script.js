
function calcular() {
    let valor = parseFloat(document.getElementById('valor').value);
    let taxa = parseFloat(document.getElementById('taxa').value);
    let tempo = parseFloat(document.getElementById
    ('tempo').value);
    

    let resultado = valor + (valor * taxa/100) * tempo;

   alert('O resultado é: ' + resultado.toFixed(2) + ' R$');

    document.getElementById('valor').value = "";
    document.getElementById('taxa').value = "";
    document.getElementById('tempo').value = "";
}



