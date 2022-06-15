export async function initFibonacci() {
  const displayResposta = document.querySelector('.resposta');
  const inputNumero = document.getElementById('numero');
  const btnLimpar = document.querySelector('button');

  function limparCampo(e) {
    inputNumero.innerText = '';
    inputNumero.value = '';
    displayResposta.innerText = '';
  }

  btnLimpar.addEventListener('click', limparCampo);

  const handleKeyUp = (e) => {
    const numero = +e.target.value;
    fibonacci(numero);
  }

  inputNumero.addEventListener('keyup', handleKeyUp);

  const fibonacci = (numero) => {
    const termosFibonacci = [];
    let valorAnterior = 0;
    let valorAtual = 1;
    let proximoValor = 1;

    for (let i = 0; i < numero; i++) {
      termosFibonacci.push(proximoValor);
      valorAnterior = valorAtual + proximoValor;
      valorAtual = proximoValor;
      proximoValor = valorAnterior;
    }

    checarValorFibonacci(numero, termosFibonacci);
  };

  const checarValorFibonacci = (numero, termos) => {
    const encontrarValor = termos.includes(numero);
    renderizarDisplay(encontrarValor);
  }

  const renderizarDisplay = (resposta) => {
    const mensageResposta = resposta ?
      'O número informado pertence a sequência!'
      : 'O número informado não pertence a sequência.';

    displayResposta.innerText = mensageResposta;
  }
}
