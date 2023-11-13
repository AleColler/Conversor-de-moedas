// Desafios:
// Adicionar mais moedas para conversão;
// Adicionar conversor de KM para anos luz, e descobrir o tempo nescessario para sair de uma estrela para outra;
//Conversor de temperaturas entre Fahrenheit, Kelvin e Celsius;
//Exibir valor em bitcoin.

function converter(valor) {
    const cotacaoDolar = 0.20;
    const cotacaoReal = 4.93;
    const cotacaoBtc = 0.0000055;

    let input = document.getElementById("iInput").value;
    let moeda = document.getElementById("iMoeda").value;

    switch (moeda) {
        case "brl":
            var valorEmReal = (input * cotacaoReal).toFixed(2);
            console.log(input)
            alert(input + "U$ equivale a R$" + valorEmReal)
            document.getElementById("iInput").value = "";
            console.log(input)

            break;
        case "dolar":
            var valorEmDolar = (input * cotacaoDolar).toFixed(2);
            alert(input + "R$ equivale a U$" + valorEmDolar)
            break;
        case "btc":
            var valorEmBtc = (input * cotacaoBtc);
            alert(input + "R$ equivale a " + valorEmBtc + "BTC")
            break
        default:
            break
    }
}

function converterTemperatura() {
    let temperatura = parseFloat(document.getElementById('iTemperatura').value);
    let tipoConversao = document.querySelector('input[name="tipo"]:checked').id;
    let resultado = 0;

    switch (tipoConversao) {
        case 'iCtoF':
            resultado = (temperatura * 9 / 5) + 32;
            alert('Resultado: ' + resultado.toFixed(2) + ' °F');
            break;
        case 'iCtoK':
            resultado = temperatura + 273.15;
            alert('Resultado: ' + resultado.toFixed(2) + ' K');
            break;
        case 'iFtoK':
            resultado = (temperatura - 32) * 5 / 9 + 273.15;
            alert('Resultado: ' + resultado.toFixed(2) + ' K');
            break;
        case 'iFtoC':
            resultado = (temperatura - 32) * 5 / 9;
            alert('Resultado: ' + resultado.toFixed(2) + ' °C');
            break;
        case 'iKtoF':
            resultado = (temperatura - 273.15) * 9 / 5 + 32;
            alert('Resultado: ' + resultado.toFixed(2) + ' °F');
            break;
        case 'iKtoC':
            resultado = temperatura - 273.15;
            alert('Resultado: ' + resultado.toFixed(2) + ' °C');
            break;
        default:
            break;
    }
}
