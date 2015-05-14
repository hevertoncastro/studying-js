var getIdade = function(extra){
	console.log(arguments);
	return this.idade + extra;
};
var pessoa = {
	nome: "Pedro",
	idade: 20,
	getIdade: getIdade
};
console.log(pessoa.getIdade(2, 3, 4));
console.log(getIdade.call(pessoa, 2, 3, 4));
console.log(getIdade.apply(pessoa, [2, 3, 4]));