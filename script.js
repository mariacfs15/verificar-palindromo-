//verificar palindromo - solução 1 

/*function verificarPalindromo(){

let palavra = (prompt('Digite uma palavra'));
let palavraAoContrario = (prompt('Digite a palavra ao contrário'));

//Confira se as palavras são iguais, ou seja, se é um palindromo.   
 if( palavra === palavraAoContrario){
    alert('Palíndromo');
}else{
    alert('Não é um Palíndromo');
}
}

verificarPalindromo(); */

// solução 2
/*function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat'); */

// solução 3

/*function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa'); */