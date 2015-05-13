var produto = {nome:"sapato", preco:150};

var formulaImpostoA = function(preco){ return preco*0.1; };
var formulaImpostoB = function(preco){ return preco*0.2; };

var calcularPreco = function(produto, formulaImposto){
	return produto.preco + formulaImposto(produto.preco)
};

resultado = calcularPreco(produto, formulaImpostoB);

console.log(resultado);
