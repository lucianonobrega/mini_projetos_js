//-----Calculadora simples-----
function somar(numero1,numero2){
    console.log("O resultado de",numero1,"+",numero2,"é",numero1+numero2)
}

function subtrair(numero1,numero2){
    console.log("O resultado de",numero1,"-",numero2,"é",numero1-numero2)
}

function multiplicar(numero1,numero2){
    console.log("O resultado de",numero1,"*",numero2,"é",numero1*numero2)
}

function dividir(numero1,numero2){
    console.log("O resultado de",numero1,"/",numero2,"é",numero1/numero2)
}

while(true){
    console.log("Opções:\n[1]Somar.\n[2]Subtrair.\n[3]Multiplicar.\n[4]Dividir.\n[0]Sair.")
    opcao = parseInt(prompt("Opção: "))
    if(opcao === 0){
        break;
    }
    let numero1 = parseInt(prompt("Primeiro número: "))
    let numero2 = parseInt(prompt("Segundo número: "))

    switch(opcao){
        case 1:
            somar(numero1,numero2)
            break;
        case 2:
            subtrair(numero1,numero2)
            break;
        case 3:
            multiplicar(numero1,numero2)
            break;
        case 4:
            dividir(numero1,numero2)
            break;
        default:
            console.log("Opção inválida. Tente novamente!")
    }
}