const cotacaoDolar = 0.20;
const cotacaoReal = 4.93;
const cotacaoBtc = 0.0000055;


function converter(valor){
    var input = document.getElementById ("iInput").value;
    var moeda = document.getElementById ("iMoeda").value;

    switch (moeda) {
        case "brl":
            var valorEmReal = (input * cotacaoReal).toFixed(2);
            alert (input + "U$ equivale a R$" + valorEmReal)
            break;
        case "dolar":  
            var valorEmDolar = (input * cotacaoDolar).toFixed(2); 
            alert (input + "R$ equivale a U$" + valorEmDolar) 
             break;
        case "btc":
            var valorEmBtc = (input * cotacaoBtc);
            alert (input + "R$ equivale a " + valorEmBtc +"BTC")
            break          
        default:
            break;
    }  
}
