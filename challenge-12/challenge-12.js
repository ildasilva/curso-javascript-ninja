(function(){
  /*Envolva todo o conteúdo desse arquivo em uma IIFE.
  */
  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
    name: 'Ilda Emanoely',
    lastname: 'Ribeiro',
    age: 23
  };
  console.log( 'Propriedades de "person": ' );
 

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));
  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];
  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
    books.push({
      name: 'Invista com sabedoria',
      pages: 150
    },
    {
      name: 'Invistindo em tesouro direto',
      pages: 165
    },
    {
      name: 'Do zero ao milhão',
      pages: 245
    })

    console.log("Lista de livros: ")
   
  /*
  Mostre no console todos os livros.
  */
   console.log(books);
  /*
  Remova o último livro, e mostre-o no console.
  */
  books.pop();
  console.log( '\nLivro que está sendo removido:' );
  console.log(removed);
  /*
  Mostre no console os livros restantes.
  */
  console.log("Agora sobraram somente os livros: ")
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var text = JSON.stringify(books);
  /*
  Mostre os livros nesse formato no console:
  */
  console.log(`Livros em formato string: ${text}`);
  /*
  Converta os livros novamente para objeto.
  */
  var objAgain = JSON.parse(text);
  console.log(`Agora os livros são objetos novamente: ${text}`);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(var cont = 0; cont <= books.length; cont++){
    for(var prop in books[cont]){
	    console.log(`${prop} : ${books[cont][prop]}`);
    }
  }
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['I', 'l','d','a'];
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
   var completeName = myName.join(' ');
   console.log(`Meu nome é: ${completeName} `);
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(`Meu nome invertido é: ${myName.reverse().join('')} `);
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(`Agora em ordem alfabética: ${myName.sort()} `);
})();
