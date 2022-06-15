export function initFaturamentoMensal() {
  const iniciarScript = async () => {
    const dadosResponse = await fetch('../data/faturamentoMensal.json');
    const dadosJSON = await dadosResponse.json();

    const valorTotal = dadosJSON.reduce((soma, total) => soma + total.faturamento, 0);

    const estadoDisplay = document.querySelector('[data-estado]');
    const percentualDisplay = document.querySelector('[data-percentual]');

    dadosJSON.forEach(estado => {
      const tdElement = document.createElement('li');
      tdElement.innerText = estado.uf;
      estadoDisplay.appendChild(tdElement);
    });

    dadosJSON.forEach(estado => {
      const tdElement = document.createElement('li');
      const percentualEstado = ((estado.faturamento / valorTotal) * 100).toFixed(2);
      tdElement.innerText = `${percentualEstado} %`;
      percentualDisplay.appendChild(tdElement);
    });
  }

  iniciarScript();
}