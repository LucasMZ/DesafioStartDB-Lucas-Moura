const cardapio = {
    cafe: {
        codigo: "cafe",
        valor: 3.00
    },
    chantily:{
        codigo: "chantily",
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
};

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const resultado = itens.map(function(separar) {
            let [item, qtd] = separar.split(',');
            qtd = parseInt(qtd);
            let valorItem = cardapio[item].valor; 
            return { item, qtd, valorItem };
        });

        if(itens === null){
            return "Não há itens no carrinho";
        }

        if(itens.length === 0){
            return "Quantidade de itens inválida";
        } else {
            const soma = resultado.reduce(function(total, itemInfo) {
                let valorItem = cardapio[itemInfo.item].valor * itemInfo.qtd;
                return total + valorItem;
            }, 0);

            if (metodoDePagamento !== "debito" && metodoDePagamento !== "credito" && metodoDePagamento !== "dinheiro") {
                return "Forma de pagamento inválida!";
            }

            let valorFinal = soma;

            if (metodoDePagamento === 'credito') {
                valorFinal += soma * 0.03;
            } else if (metodoDePagamento === 'dinheiro') {
                valorFinal -= soma * 0.05;
            }

            return `Total da compra: R$ ${valorFinal.toFixed(2)}`;
        }
    }
}

const caixa = new CaixaDaLanchonete();
const resultadoCompra = caixa.calcularValorDaCompra('credito', ['cafe,1', 'chantily,1']);
console.log(resultadoCompra);
