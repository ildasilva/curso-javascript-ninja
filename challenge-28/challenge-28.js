  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

(function (win, doc) {
  'use strict';

  let $inputCEP = doc.querySelector('[data-js="input-cep"]');
  let $buttonSubmit = doc.querySelector('[data-js="button"]');
  let ajax = new XMLHttpRequest();
  let cep;
  let $logradouro = doc.querySelector('[data-js="input-logradouro"]');
  let $bairro = doc.querySelector('[data-js="input-bairro"]');
  let $estado = doc.querySelector('[data-js="input-estado"]');
  let $cidade = doc.querySelector('[data-js="input-cidade"]');
  let $CEP = doc.querySelector('[data-js="input-cep-usuario"]');
  let obj;
  let data;

  $buttonSubmit.addEventListener('click', submition, 'false');

  function submition() {
    onlyNumberCep();
    ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/' + onlyNumberCep() + '.json');
    ajax.send();

    ajax.addEventListener('readystatechange', handleStateChange, false);

    $CEP.setAttribute('value', cep);
    $inputCEP.value = "";
  };

  function onlyNumberCep() {
    cep = $inputCEP.value.toString();
    cep = cep.match(/(\d)+/g).join('');
    return cep;
  };

  function handleStateChange() {
    if (requestOK()) {
      data = JSON.parse(ajax.responseText);
      getDataCEP();
    };

    function requestOK() {
      return ajax.readyState === 4 && ajax.status === 200;
    };

    function getDataCEP() {
      obj = {
        logradouro: data.address,
        bairro: data.district,
        estado: data.state,
        cidade: data.city
      };
      $estado.setAttribute('value', obj.estado);
      $logradouro.setAttribute('value', obj.logradouro);
      $bairro.setAttribute('value', obj.bairro);
      $cidade.setAttribute('value', obj.cidade);
    }
  };

})(window, document);


//HTML

<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>DOM</title>
</head>

<body>
  <div data-js="div-cep">
    <input type="text" data-js="input-cep" placeholder="digite seu CEP" value="">
    <button data-js="button">Submit</button>
  </div>

  <div data-js="div-log" style="margin: 15px 0;">
    <label data-js="label-logradouro">Logradouro</label>
    <input type="text" data-js="input-logradouro" readonly value="">
  </div>

  <div data-js="div-bairro" style="margin: 15px 0;">
    <label data-js="label-bairro">Bairro</label>
    <input type="text" data-js="input-bairro" readonly value="">
  </div>

  <div data-js="div-estado" style="margin: 15px 0; padding: 10px 0;">
    <label data-js="label-estado">Estado</label>
    <input type="text" data-js="input-estado" readonly value="">
  </div>

  <div data-js="div-cidade" style="margin: 15px 0;">
    <label data-js="label-cidade">Cidade</label>
    <input type="text" data-js="input-cidade" readonly value="">
  </div>

  <div data-js="div-cep" style="margin: 15px 0; padding: 10px 15px;">
    <label data-js="label-cep">CEP</label>
    <input type="text" data-js="input-cep-usuario" readonly value="">
  </div>

  <script src="main.js"></script>

</body>

</html>
