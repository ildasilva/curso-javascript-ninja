(function() {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  
  (function (win, doc) {
  'use strict';

  let $imagem = doc.querySelector('[data-js="url-imagem"]');
  let $marca = doc.querySelector('[data-js="marca"]');
  let $modelo = doc.querySelector('[data-js="modelo"]');
  let $ano = doc.querySelector('[data-js="ano"]');
  let $placa = doc.querySelector('[data-js="placa"]');
  let $cadastrar = doc.querySelector('[data-js="cadastrar"]');


  /*
  function handleStateChange() {
    if (requestOK()) {
      data = JSON.parse(ajax.responseText);
      updateDataCEP();
    };

    function requestOK() {
      return ajax.readyState === 4 && ajax.status === 200;
    };
  }*/

  function app() {
    return {
      init: function init() {
        this.companyInfo;
      },

      companyInfo: function companyInfo() {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send(null);
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        console.log(this)
      }
    };
  }

  app().init();

})(window, document);
  
  
  <!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>DOM</title>
  <style>
    form {

      float: left;
    }

    div {
      padding: 5px 0;
    }

    label {
      display: block;
    }

    table {
      border-collapse: collapse;
    }


    tr {
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-right: 1px solid;
    }

    th,
    td {
      padding: 5px 25px;
      border: 1px solid #ccc;
    }

    header {
      text-align: center;
    }

    button {
      padding: 5px;
      background: darkmagenta;
      color: aliceblue;
    }
  </style>
</head>

<body>
  <header>
    <h1>
      <span data-js="company-name"></span>
      <span data-js="company-phone"></span>
    </h1>
  </header>

  <form action="/">
    <div>
      <label>Imagem do Carro</label>
      <input type="url" data-js="url-imagem">
    </div>

    <div>
      <label>Marca</label>
      <input type="text" data-js="marca">
    </div>

    <div>
      <label>Modelo</label>
      <input type="text" data-js="modelo">
    </div>

    <div>
      <label>Ano</label>
      <input type="text" data-js="ano">
    </div>

    <div>
      <label>Placa</label>
      <input type="text" data-js="placa">
    </div>

    <div>
      <button data-js="cadastrar" type="submit">Cadastrar</button>
    </div>
  </form>

  <div>
    <table>
      <caption>Carros cadastrados</caption>
      <thead>
        <th>Imagem do Carro</th>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Ano</th>
        <th>Placa</th>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </table>
  </div>


  <script src="main.js"></script>

</body>

</html>
  

})();
