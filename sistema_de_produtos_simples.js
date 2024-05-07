//-----Sistema de produtos simples com CRUD-----
let produtos = {
    "sprite":3,
    "doritos":2
}

while(true){
    console.log("[Mercado JS]")
    console.log("Escolha uma das opções abaixo:")
    console.log("[1]Ver produtos.\n[2]Cadastrar produtos.\n[3]Mudar preço.\n[4]Deletar produto.\n[0]Sair.")
    let opcao = parseInt(prompt("Opção: "))
    switch(opcao){
        case 1:
            console.log(produtos)
            break;
        case 2:
            let nome_produto = prompt("Nome do produto: ")
            let preco_produto = parseFloat(prompt("Preço do produto: "))
            produtos[nome_produto] = preco_produto
             console.log("Produto cadastrado com sucesso!")
             break;
        case 3:
            let nome_produto_mudar = prompt("Nome do produto: ")
            let preco_produto_mudar = parseFloat(prompt("Preço do produto: "))
            produtos[nome_produto_mudar] = preco_produto_mudar
            console.log("Preço atualizado com sucesso!")
            break;
        case 4:
            let nome_produto_delete = prompt("Nome do produto: ")
            delete produtos[nome_produto_delete]
            console.log("Produto deletado com sucesso!")
            break;
        case 0:
            console.log("Até a próxima!")
            break;
        default:
            console.log("Opção inválida. Tente novamente.")
    }
    if (opcao === 0){
        break;
    }
}