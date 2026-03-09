//Só a explicação já assustou

// let tempo = parseFloat(prompt('Informe o tempo gasto:'));
// let velocidade = parseFloat(prompt('Informe a velocidade média:'));

// let distancia = (tempo * velocidade);

// let litros = (distancia / 12);

// alert('O valor da distacia é: ' + distancia + ' km');

// alert('O tempo gasto na viagem foi: ' + tempo + ' horas');

// alert('O valor de combustível usado em litros é: ' + litros.toFixed(2) + ' L' );

function calcular() {
let tempo = parseFloat(document.getElementById('tempo').value);
let velocidade = parseFloat(document.getElementById('velocidade').value);

let distancia = (tempo * velocidade);

let litros = (distancia / 12);


document.getElementById('tempo').value = "";
document.getElementById('velocidade').value = "";


alert('O valor da distacia é: ' + distancia + ' km');

alert('O tempo gasto na viagem foi: ' + tempo + ' horas');

alert('O valor de combustível usado em litros é: ' + litros.toFixed(2) + ' L' );

}



