function numeros (n1, n2) {
	const saoIguais = n1;
	const numero2 = n2;

	let soma = n1 + n2;

	if(n1 == n2 && soma > 10 && soma < 20){
		return ( n1 + " e " + n2 + " são números iguais e sua soma(" + soma + ") é maior que 10 e menor que 20.");
	}

	else if(n1 == n2 && soma > 20){
		return ( n1 + " e " + n2 + " são números iguais e sua soma(" + soma + ") é maior que 20.");
	}

	else if(n1 == n2 && soma < 10){
		return ( n1 + " e " + n2 + " são números iguais e sua soma(" + soma + ") é menor que 10.");
	}

	else if(n1 != n2 && soma > 10 && soma < 20){
		return ( n1 + " e " + n2 + " não são números iguais e sua soma(" + soma + ") é maior que 10 e menor que 20.");
	}

	else if(n1 != n2 && soma > 20){
		return ( n1 + " e " + n2 + " não são números iguais e sua soma(" + soma + ") é maior que 20.");
	}

	else if(n1 != n2 && soma < 10){
		return ( n1 + " e " + n2 + " não são números iguais e sua soma(" + soma + ") é menor que 10.");
	}

	// return (n1 === n2) ? "São iguais" : "Não são iguais";

	// return (soma > 10) ? "Sua soma é maior que 10" : "Sua soma menor que 10";

	// return (soma > 20) ? "Sua soma é maior que 20" : "Sua soma é menor que 20";
}
console.log(numeros (2, 2));