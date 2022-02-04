/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function (win, doc) {
  'use strict';

  let $visor = doc.querySelector('[data-js="visor"]');
  let $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  let $buttonCE = doc.querySelector('[data-js="button-ce"]');
  let $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]');
  let $buttonEqual = doc.querySelector('[data-js = "button-equal"]');

  // Passa por todos os itens e captura o click de todos os botões
  Array.prototype.forEach.call($buttonsNumbers, function (button) {
    button.addEventListener('click', handleClickNumber, false);
  });

  // Passa por todos os botões de operações captando os seus clicks
  Array.prototype.forEach.call($buttonOperations, function (button) {
    button.addEventListener('click', handleClickOperation, false);
  })

  // Click do botão CE que chama a função de ação do CE
  $buttonCE.addEventListener('click', handleClickCE, false);

  $buttonEqual.addEventListener('click', handleClickEqual, false);

  // Ação dos botões de números
  function handleClickNumber() {
    $visor.value += this.value;
  }

  // Ação do botão CE
  function handleClickCE() {
    $visor.value = 0;
  }

  // Ação dos botões de operadores
  function handleClickOperation() {
    removeLastItemIfIsAnOperator();
    $visor.value += this.value;
  };

  function removeLastItemIfIsAnOperator() {
    if (isLastItemAnOperation())
      // o slice aqui vai pegar os itens desde a posição 0 e vai remover o último item caso o último seja um operador e concatenar
      $visor.value = $visor.value.slice(0, -1);
  };

  function isLastItemAnOperation() {
    let operations = ['+', '-', 'x', '÷'];
    let lastItem = $visor.value.split('').pop();
    // o some passa por todos os itens do array e verifica se pelo menos um deles 
    return operations.some(function (operator) {
      return operator === lastItem;
    });
  };

  function handleClickEqual() {
    removeLastItemIfIsAnOperator();
    let allValues = $visor.value.match(/(\d+)[+x÷-]?/g);
    let results = allValues.reduce(function (accumulated, actual) {

      return accumulated + actual;
    });
    console.log(results);
  };

  console.log($buttonsNumbers);

})(window, document);

// HTML

<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <input type="text" value="0" readonly data-js="visor">
  <div data-js="buttons-number">
    <button data-js="button-number" value="0">0</button>
    <button data-js="button-number" value="1">1</button>
    <button data-js="button-number" value="2">2</button>
    <button data-js="button-number" value="3">3</button>
    <button data-js="button-number" value="4">4</button>
    <button data-js="button-number" value="5">5</button>
    <button data-js="button-number" value="6">6</button>
    <button data-js="button-number" value="7">7</button>
    <button data-js="button-number" value="8">8</button>
    <button data-js="button-number" value="9">9</button>
  </div>

  <div class="operations">
    <button data-js="button-operation" value="+">+</button>
    <button data-js="button-operation" value="-">-</button>
    <button data-js="button-operation" value="x">x</button>
    <button data-js="button-operation" value="÷">÷</button>
    <button data-js="button-equal" value="="> =</button>
    <button data-js="button-ce" value="ce">CE</button>
  </div>

  <script src="main.js"></script>
</body>

</html>
