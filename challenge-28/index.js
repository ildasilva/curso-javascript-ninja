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
  "use strict";

  let $inputCEP = doc.querySelector('[data-js="input-cep-user"]');
  let $buttonSubmit = doc.querySelector('[data-js="button"]');
  let $street = doc.querySelector('[data-js="input-street"]');
  let $district = doc.querySelector('[data-js="input-district"]');
  let $state = doc.querySelector('[data-js="input-state"]');
  let $city = doc.querySelector('[data-js="input-city"]');
  let $CEP = doc.querySelector('[data-js="input-cep"]');
  let data;
  let cep;

  $buttonSubmit.addEventListener("click", submition, "false");

  function onlyNumberCep() {
    cep = $inputCEP.value.toString();

    return cep;
  }

  async function submition() {
    const response = await fetch(
      `https://viacep.com.br/ws/${onlyNumberCep()}/json/`
    );

    data = await response.json();

    $CEP.setAttribute("value", data.cep);
    $inputCEP.value = "";

    if (data) {
      $state.setAttribute("value", data.uf);
      $street.setAttribute("value", data.logradouro);
      $district.setAttribute("value", data.bairro);
      $city.setAttribute("value", data.localidade);
    }
  }
})(window, document);
