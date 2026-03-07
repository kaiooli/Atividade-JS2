//pefar o valor digitado no input
function converter() {
    let Fahrenheit = parseFloat(document.getElementById('Fahrenheit').value);

//fazer a conversão
    let resultado = (Fahrenheit - 32) * (5/9);

//Mostar o resultado
    document.getElementById('resultado').innerText = resultado + " F";
}


