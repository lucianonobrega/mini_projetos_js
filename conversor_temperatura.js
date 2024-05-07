//-----Conversor de temperatura simples-----
function celsius_fahrenheit(temperatura){
    let calculo = (1.8 * temperatura) + 32
    console.log("°C =",temperatura,"|","°F =",calculo)
};

function celsius_kelvin(temperatura){
    let calculo = (temperatura + 273)
    console.log("°C =",temperatura,"|","K =",calculo)
};

function fahrenheit_celsius(temperatura){
    let calculo = (temperatura-32)/1.8
    console.log("°F =",temperatura,"|","°C =",calculo)
};

function fahrenheit_kelvin(temperatura){
    let calculo = (temperatura -32) * (5/9) + 32
    console.log("°F =",temperatura,"|","K =",calculo)
};

function kelvin_celsius(temperatura){
    let calculo = temperatura - 273
    console.log("K =",temperatura,"|","°C =",calculo)
};

function kelvin_fahrenheit(temperatura){
    let calculo = ((temperatura - 273) * 1.8) + 32
    console.log("K =",temperatura,"|","°F =",calculo)
};


while(true){
    console.log("[Conversor de temperatura]")
    console.log("Opções:\n[1]Celsius -> Fahrenheit.\n[2]Celsius -> Kelvin.\n[3]Fahrenheit -> Celsius.\n[4]Fahrenheit -> Kelvin.\n[5]Kelvin -> Celsius.\n[6]Kelvin -> Fahrenheit.\n[0]Sair.")
    let opcao = parseInt(prompt("Opção: "))
    if(opcao === 0){
        break;
    }
    let temperatura = parseFloat(prompt("Digite a temperatura: "))
    switch(opcao){
        case 1:
            celsius_fahrenheit(temperatura)
            break;
        case 2:
            celsius_kelvin(temperatura)
            break;
        case 3:
            fahrenheit_celsius(temperatura)
            break;
        case 4:
            fahrenheit_kelvin(temperatura)
            break;
        case 5:
            kelvin_celsius(temperatura)
            break;
        case 6:
            kelvin_fahrenheit(temperatura)
            break;
        default:
            console.log("Opção inválida. Tente novamente.")
    }
}