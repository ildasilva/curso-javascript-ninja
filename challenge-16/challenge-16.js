(function(){
  'use strict';
  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
 (function(){
    'use strict';
    console.log( 'As letras do seu nome:' );
      for(var cont=0, num = 1; cont < name.length ; num++, cont++){
        console.log(`${name.charAt(cont)} é a ${num}ª letra do meu nome`)	
    }
  })();
  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log( '\nNome convertido à partir de um slug:' );
  (function(){
    'use strict';
    var fullName = 'ilda-emanoely-ribeiro';
    var newFullName = fullName.charAt(0).toUpperCase()
    var nameUpper = newFullName + fullName.slice(1)
    console.log(nameUpper);
    console.log(nameUpper.split('-').join(' '));
  })();

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log( '\nMeus amigos:' );
  // ?

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );
  var name = 'Roberto';
  console.log(name.substring(0,6).concat('a'));
  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );
  var name = 'Fernando';
  console.log(name.substring(9,3));
  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  var name = 'Catarina'
  var arrayName = [];
  for(var cont = 0; cont < name.length; cont++){
    if(cont === 0){
      arrayName[0] = name.charAt(0).toUpperCase();
    }
    if(cont % 2 === 0){
      arrayName[cont] = name.charAt(cont).toUpperCase();
    }else{
      arrayName[cont] = name.charAt(cont);
      }
  }
  // o toString transforma o array em string e logo depois troca as vírgulas por junção
  console.log(arrayName.toString().split(',').join(''));	

})();
