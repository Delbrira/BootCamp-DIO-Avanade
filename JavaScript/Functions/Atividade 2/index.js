const cidade =  {
    nome: "Recife",
    idade: 485,
}

const pessoa =  {
    nome: "Ámelia",
    idade: 19,
}

function calculaIdade() {
    let anos = 10;
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(cidade));
console.log(calculaIdade.apply(pessoa));