const input = document.querySelector('input');
const btnLimpar = document.querySelector('#limpar');
const resultadoDisplay = document.querySelector('.resposta');

function inverterString(e) {
  const string = e.target.value;
  const stringReversa = string.split("").reverse().join("");

  handleStringReversa(stringReversa);
}

function handleStringReversa(stringReversa) {
  resultadoDisplay.innerText = stringReversa;
}

function limparCampo(e){
  resultadoDisplay.innerText = '';
  input.value = '';
}

input.addEventListener('keyup', inverterString);
btnLimpar.addEventListener('click', limparCampo);
