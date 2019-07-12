/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Brasileiro'
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Palmeiras', 'Santos', 'Flamengo', 'Internacional','Atlético'];
/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function(pos){
	switch(pos){
        case 1:
			console.log(`O time que está no ${pos}° lugar é o ${teams[0]}`);
			break;
        case 2:
			console.log(`O time que está no ${pos}° lugar é o ${teams[1]}`);
			break;
        case 3:
			console.log(`O time que está no ${pos}° lugar é o ${teams[2]}`);
			break;
        case 4:
			console.log(`O time que está no ${pos}° lugar é o ${teams[3]}`);
			break;
        case 5:
			console.log(`O time que está no ${pos}° lugar é o ${teams[4]}`);
			break;
        default:
			console.log('Não temos a informação do time que está nessa posição')
    }
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(2) // O time que está no 2° lugar é o Santos
showTeamPosition(4) // O time que está no 4° lugar é o Internacional
showTeamPosition(1) // O time que está no 1° lugar é o Palmeiras
showTeamPosition(5) // O time que está no 5° lugar é o Atlético
showTeamPosition(12) // Não temos a informação do time que está nessa posição
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 20;
while (cont < 31){
	console.log(cont++);
}
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
var convertToHex = function(cor){
	cores = {
		'amarelo': '#FFF629',
		'laranja': '#E88A05',
		'vermelho': '#FF1F12',
		'roxo': '#9505E8',
		'azul': '#0860FF'
	}
	switch(cor){
	
    case 'amarelo':
			console.log(`O hexadecimal para a cor ${cor} é ${cores.amarelo}.`);
			break;

		case 'laranja':
			console.log(`O hexadecimal para a cor ${cor} é ${cores.laranja}.`);
			break;
			
		case 'vermelho':
			console.log(`O hexadecimal para a cor ${cor} é ${cores.vermelho}.`);
			break;

		case 'roxo':
			console.log(`O hexadecimal para a cor ${cor} é ${cores.roxo}.`);
			break;

		case 'azul':
			console.log(`O hexadecimal para a cor ${cor} é ${cores.azul}.`);
			break;

        default:
			console.log(`Não temos o equivalente hexadecimal para ${cor}.`);

	}
}
*/
convertToHex("azul") // O hexadecimal para a cor azul é #0860FF.
convertToHex('branco') // Não temos o equivalente hexadecimal para branco.
convertToHex('amarelo') // O hexadecimal para a cor amarelo é #FFF629.
convertToHex('roxo') // O hexadecimal para a cor roxo é #9505E8.
convertToHex('vermelho') // O hexadecimal para a cor vermelho é #FF1F12.
convertToHex('laranja') // O hexadecimal para a cor laranja é #E88A05.
convertToHex('rosa') // Não temos o equivalente hexadecimal para rosa.
convertToHex('preto') // Não temos o equivalente hexadecimal para preto.
*/
