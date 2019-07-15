/*
Crie um array com 5 items (tipos variados).
*/
var myarray = [null, true, function(){}, [1, 'teste'], 'JSNinja'];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function(item){
	myarray.push(item);
	return myarray;
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([14, 'Ilda', false]));
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(myarray.length) // 6
console.log(`O segundo elemento do segundo array é: myarray[5][1]`) // "Ilda"
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myarray.length} itens`) // "O primeiro array tem 6 itens"
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myarray[5].length} itens.`) // "O segundo array tem 3 itens."
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var cont = 10;
while(cont <= 20){
	if(cont % 2 === 0){
		console.log(`Números pares entre 10 e 20: ${cont}`);
	}
	cont++;
}

Números pares entre 10 e 20: 10
Números pares entre 10 e 20: 12
Números pares entre 10 e 20: 14
Números pares entre 10 e 20: 16
Números pares entre 10 e 20: 18
Números pares entre 10 e 20: 20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var cont = 10;
while(cont <= 20){
	if(cont % 2 === 1){
		console.log(`Números ímpares entre 10 e 20: ${cont}`);
	}
	cont++;
}

Números pares entre 10 e 20: 11
Números pares entre 10 e 20: 13
Números pares entre 10 e 20: 15
Números pares entre 10 e 20: 17
Números pares entre 10 e 20: 19
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(cont = 100; cont <= 120; cont++){
	if(cont % 2 === 0){
		console.log(`Números pares entre 100 e 120: ${cont}`);
	}
}
Números pares entre 100 e 120: 100
Números pares entre 100 e 120: 102
Números pares entre 100 e 120: 104
Números pares entre 100 e 120: 106
Números pares entre 100 e 120: 108
Números pares entre 100 e 120: 110
Números pares entre 100 e 120: 112
Números pares entre 100 e 120: 114
Números pares entre 100 e 120: 116
Números pares entre 100 e 120: 118
Números pares entre 100 e 120: 120
-------------------------------------------------------
  
for(cont = 111; cont <= 125; cont++){
	if(cont % 2 === 1){
		console.log(`Números ímpares entre 111 e 125: ${cont}`);
	}
}
Números ímpares entre 111 e 125: 111
Números ímpares entre 111 e 125: 113
Números ímpares entre 111 e 125: 115
Números ímpares entre 111 e 125: 117
Números ímpares entre 111 e 125: 119
Números ímpares entre 111 e 125: 121
Números ímpares entre 111 e 125: 123
Números ímpares entre 111 e 125: 125
