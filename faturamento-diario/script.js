const iniciarScript = async () => {
  const dadosResponse = await fetch('./faturamentoDiario.json');
  const dadosJSON = await dadosResponse.json();

  const diasUteisFaturamento = dadosJSON.filter(dia => {
    return dia.valor > 0;
  });

  const menorFat = menorFaturamento(diasUteisFaturamento);
  const maiorFat = maiorFaturamento(diasUteisFaturamento);
  const qtdeDiasMaiorQueMediaFaturamento = mediaMensalFaturamento(diasUteisFaturamento);

  const resultadosFaturamento = [menorFat, maiorFat, qtdeDiasMaiorQueMediaFaturamento];

  const tabelaDisplay = document.querySelector('[data-dados]');

  resultadosFaturamento.forEach(resultado => {
    let el = document.createElement('td');
    el.innerText = resultado;
    tabelaDisplay.appendChild(el);
  });
}

function menorFaturamento(diasUteisFaturamento) {
  const valorMenorDia = diasUteisFaturamento
    .reduce((diaAnterior, diaAtual) => {
      return diaAnterior.valor < diaAtual.valor ? diaAnterior : diaAtual;
    });

  const { valor } = valorMenorDia;
  const valorEmReal = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return valorEmReal;
}

function maiorFaturamento(diasUteisFaturamento) {
  const valorMaiorDia = diasUteisFaturamento
    .reduce((diaAnterior, diaAtual) => {
      return diaAnterior.valor > diaAtual.valor ? diaAnterior : diaAtual;
    });

  const { valor } = valorMaiorDia;
  const valorEmReal = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return valorEmReal;
}

function mediaMensalFaturamento(diasUteisFaturamento) {
  const mediaMensal = diasUteisFaturamento
    .reduce((diaAnterior, diaAtual) => {
      return diaAnterior + diaAtual.valor;
    }, 0) / diasUteisFaturamento.length;

  return qtdeDiasMaiorQueMediaFaturamento(diasUteisFaturamento, mediaMensal);
}

function qtdeDiasMaiorQueMediaFaturamento(diasUteisFaturamento, mediaMensal) {
  const qtdeDiasMaior = diasUteisFaturamento.reduce((qtdeDias, curr) => {
    if (curr.valor > mediaMensal) {
      qtdeDias++;
    }
    return qtdeDias;
  }, 0);

  return qtdeDiasMaior;
}

iniciarScript();
