export async function initInversao() {
  const input = document.getElementById('palavra')
  const btnLimpar = document.querySelector('#limparInput');
  const resultadoDisplay = document.querySelector('.campo-resposta');

  function limparInput(e) {
    resultadoDisplay.innerText = '';
    input.value = '';
  }

  function inverterString(e) {
    const string = e.target.value;
    let stringReversa = '';

    for (let i = string.length - 1; i >= 0; i--) {
      stringReversa += string[i];
    }

    handleStringReversa(stringReversa);
  }

  function handleStringReversa(stringReversa) {
    resultadoDisplay.innerText = stringReversa;
  }

  input.addEventListener('keyup', inverterString);
  btnLimpar.addEventListener('click', limparInput);
}
