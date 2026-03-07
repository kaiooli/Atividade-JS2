//pefar o valor digitado no input
function converter() {
    let celsius = parseFloat(document.getElementById('celsius').value);

//fazer a conversão
    let resultado = (9 * celsius + 160) / 5;

//Mostar o resultado
    document.getElementById('resultado').innerText = resultado + " F";
}


