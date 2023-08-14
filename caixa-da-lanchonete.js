const cardapio = {
    cafe: {
        codigo: "cafe",
        valor: 3.00
    },
    chantilly:{
        codigo: "chantilly",
        valor: 1.50
    },
    suco: {
        codigo: "suco",
        valor: 6.20
    },    
    sanduiche:{
        codigo: "sanduiche",
        valor: 6.50
    }, 
    queijo:{ 
        codigo: "queijo",
        valor: 2.00
    },
    salgado:{
        codigo: "salgado",
        valor: 7.25
    },
    combo1: {
        codigo: "combo1",
        valor: 9.50
    },
    combo2:{
    codigo: "combo2",
    valor: 7.5
    }
}
class CaixaDaLanchonete {    
    metodoDePagamento = "debito";
    itens = ['combo1,1', 'chantily,1'];
calcularValorDaCompra(metodoDePagamento, itens) {
    if(itens == 0 || qtd.length == 0){
        console.log("Não há itens no carrinho de compra!")
    }
    if(qtd.length == 0){
        console.log("Quantidade inválida!");
    }
    if(!cardapio[item]){
        console.log("Item inválido!");
    }
    if(!metodoDePagamento){
        console.log("Forma de pagamento inválida")
    }
        resultado = itens.map(function(separar){
            let [item, qtd] = separar.split(',');
                    qtd = parseInt(qtd);
                    total += qtd * cardapio[item].valor; // Acumular o valor total
                    if(metodoDePagamento == "debito"){
                        total -= total*0.05;
                    }else if(metodoDePagamento == "credito"){
                        total += total*0.03;
                    }else if(metodoDePagamento == "dinheiro"){
                        total -= total*0.05;
                    }
                    return { item, qtd };
        })
        return total.toFixed(2);
    }
}
export { CaixaDaLanchonete };
