function  verificaPalindromo1 ( string )  {
	if  (!string) return ;
	console.log( string === string .split("").reverse( ).join("")) ;
}
console.log(verificaPalindromo2("gato"));

function palindromo (string){
    if(string != null) {
        console.log("A palavra " + string + " é válida");
    }

    let tiny = string.toLowerCase();

    if(tiny === tiny.split("").reverse( ).join("")) {
        return string + " é um palíndromo."
    }
    else {
        return string + " não é um palíndromo."
    }
}
console.log(palindromo("Ana"));