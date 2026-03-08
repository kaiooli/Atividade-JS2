//Volume do cilindro

function calcular(){
    let raio = parseFloat(document.getElementById('raio').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let resultado = (Math.PI * (Math.pow(raio,2)) * altura);
    

    document.getElementById('Resultado').innerText = 'Resultado é: ' + resultado.toFixed(2) + ' m³';
}


