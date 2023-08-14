<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
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
}  
const itens = ['cafe,1', 'chantily,1'];
let pagamento = "credito";
let soma = 0;
let extra;
const resultado = itens.map(function(separar) {
    let [item, qtd] = separar.split(',');
   
    if(item.includes("queijo" || item.includes("chantilly" && item.includes(cardapio.item != queijo && chantily)))){
        console.log("nao pode comprar sem o item principal")
    }
     qtd = parseInt(qtd);
     let valorItem = cardapio[item].valor; 
     return { item, qtd, valorItem };
    
});
if(itens === null){
    console.log("não há itens no carrinho")
}
if(itens.length === 0){
    console.log("quantidade de itens invalida")
}
if(cardapios.codigo != item){
    console.log("item invalido")
}
 soma = resultado.reduce(function(total, itemInfo) {
    let valorItem = cardapio[itemInfo.item].valor * itemInfo.qtd;  // utiliza o array mapeado de resultados para multiplicar cada indice usando reduce
    return total + valorItem;
}, 0);
if (pagamento !== "debito" && pagamento !== "credito" && pagamento !== "dinheiro") {
        console.log("Forma de pagamento inválida!");
    }
if (pagamento === 'credito') {
    soma += soma * 0.03;
} else if (pagamento === 'dinheiro') {
    soma -= soma * 0.05;
}

console.log("Resultado por item:", resultado);
console.log("Total da compra:", soma.toFixed(2));





/*     
let total = [];
let pagamento = "credito";
let x = [];
    const itens = ['cafe,1', 'chantily,1'];
        const resultado = itens.map(function(separar){ // percorrendo o array
            let [item, qtd] = separar.split(','); // desestruturando o array
            qtd = parseInt(qtd); 

            return {  item, qtd };
       
});
*/

        
        
        
        
     
       
        
       
        
       
    </script>
</body>
</html>
