/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 var myarray = [6, 9, 12, 'curso', 'js-ninja'];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 var funcao1 = function(arr){
	return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcao1(myarray)[1] // 9
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var funcao2 = function(a, b){
	return a[b];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var recebe = ['Curso', 09, true, null, NaN];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcao2(recebe,0);
funcao2(recebe,1);
funcao2(recebe,2);
funcao2(recebe,3);
funcao2(recebe,4);
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
 var book = function(bookname){
	var allbooks = {
     'Alice no País das Maravilhas': { 
      quantidadePaginas: 120,
      autor: 'Lewis Carroll',
      editora: 'MacMillan'
      },
      'Pai Rico Pai Pobre': {
      quantidadePaginas: 85,
      autor: 'Robert Kyiosaki',
      editora: 'Editora EUA'
      },
      'Invista com Sabedoria:{
      quantidadePaginas: 136,
      autor: 'Leandro Ávila',
      editora: 'Editora Brasil'
      }
		};
	
    return !bookname ? allboks : allboks[bookname];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
 book() // {
     'Alice no País das Maravilhas': { 
      quantidadePaginas: 120,
      autor: 'Lewis Carroll',
      editora: 'MacMillan'
      },
      'Pai Rico Pai Pobre': {
      quantidadePaginas: 85,
      autor: 'Robert Kyiosaki',
      editora: 'Editora EUA'
      },
      'Invista com Sabedoria:{
      quantidadePaginas: 136,
      autor: 'Leandro Ávila',
      editora: 'Editora Brasil'
      }
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro " + book("Alice no País das Maravilhas") + "tem " + book("Alice no País das Maravilhas").quantidadePaginas + " páginas" // "O livro Alice no País das Maravilhastem 120 páginas"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro ' + book('Pai Rico Pai Pobre') + ' é ' + book('Pai Rico Pai Pobre').autor // "O autor do livro Pai Rico Pai Pobre é Robert Kyiosaki"
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/'A editora do livro ' + book('Invista com Sabedoria') + ' é ' + book('Invista com Sabedoria').editora // "A editora do livro Invista com Sabedoria é Editora Brasil"
