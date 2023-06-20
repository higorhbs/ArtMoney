function pegarValorDoInput(nome) {
  return document.getElementById(nome).value;
}

function mostrarForm() {
  let form = document.getElementById('form-calculadora');
  form.style.display = 'block';
}

function mostrarResultado() {
  let resultado = document.getElementById('resultado-form');
  resultado.style.display = 'block';
}

function esconderForm() {
  let form = document.getElementById('form-calculadora');
  form.style.display = 'none';
}

function esconderResultado() {
  let resultado = document.getElementById('resultado-form');
  resultado.style.display = 'none';
}

function removerErroCamposPreenchidos() {
  let containerDeErro = document.getElementById('erro-do-form');
  if (containerDeErro.innerHTML) {
    containerDeErro.innerHTML = '';
  }
}

function inserirErroCamposPreenchidos() {
  let containerDeErro = document.getElementById('erro-do-form');
  if (!containerDeErro.innerHTML) {
    containerDeErro.innerHTML =
      '<div class="alert alert-danger" role="alert">Por favor, preencha todos os campos corretamente.</div>';
  }
}

function construirTextoPrincipal(resultado) {
  return (
    'Para alcançar o objetivo "<strong>' +
    resultado.nomeDoObjetivo +
    '</strong>", será necessário juntar <strong>R$ ' +
    resultado.dinheiroQueSobra +
    '</strong> por mês. Atingindo o objetivo final de <strong>R$ ' +
    resultado.valorDoObjetivo +
    '</strong> em <strong>' +
    resultado.tempoAteJuntar +
    '</strong> meses!<br /><br />Confira os dados abaixo:'
  );
}

function inserirResultado(resultado, jaExistente) {
  let textoPrincipal = construirTextoPrincipal(resultado);
  let containerDoTextoPrincipal = document.getElementById('texto-principal');
  containerDoTextoPrincipal.innerHTML = textoPrincipal;

  let valorObjetivo = document.getElementById('valor-objetivo-resultado');
  valorObjetivo.innerHTML = 'R$ ' + resultado.valorDoObjetivo;

  let tempoObjetivo = document.getElementById('tempo-objetivo-resultado');
  tempoObjetivo.innerHTML = resultado.tempoAteJuntar + ' meses';

  let valorAGuardar = document.getElementById('valor-guardar-resultado');
  valorAGuardar.innerHTML = 'R$ ' + resultado.dinheiroQueSobra + ' por mês';

  let porcentagemDoValor = document.getElementById(
    'porcentagem-objetivo-resultado',
  );
  porcentagemDoValor.innerHTML = Math.floor(resultado.porcentagemDoValor) + '%';

  if (jaExistente) {
    document.getElementById('salvar-objetivo').disabled = true;
  }
}

function limparForm() {
  const nomeDoObjetivo = document.getElementById('input-nome-objetivo');
  const gastoMensal = document.getElementById('input-nome-gasto-mensal');
  const rendaMensal = document.getElementById('input-nome-renda-mensal');
  const valorDoObjetivo = document.getElementById('input-nome-valor');
  let containerDoTextoPrincipal = document.getElementById('texto-principal');
  containerDoTextoPrincipal.innerHTML =
    'Nessa seção, vamos te ajudar a alcançar seu objetivo financeiro! Preencha o formulário abaixo para que possamos calcular e auxiliar esse planejamento.';

  nomeDoObjetivo.value = '';
  gastoMensal.value = '';
  rendaMensal.value = '';
  valorDoObjetivo.value = '';
}

function calculaObjetivos() {
  const nomeDoObjetivo = pegarValorDoInput('input-nome-objetivo');
  const gastoMensal = Number(pegarValorDoInput('input-nome-gasto-mensal'));
  const rendaMensal = Number(pegarValorDoInput('input-nome-renda-mensal'));
  const valorDoObjetivo = Number(pegarValorDoInput('input-nome-valor'));

  if (!nomeDoObjetivo || !gastoMensal || !rendaMensal || !valorDoObjetivo) {
    inserirErroCamposPreenchidos();
    return;
  }

  removerErroCamposPreenchidos();
  if (gastoMensal >= rendaMensal) {
    let secaoEducativa = document.getElementById('link-perfil-1');
    let textoPrincipal = document.getElementById('texto-principal');
    secaoEducativa.style.display = 'block';
    textoPrincipal.style.display = 'none';
    esconderForm();
    esconderLista();
  } else {
    const dinheiroQueSobra = rendaMensal - gastoMensal;
    const porcentagemDoValor = (100 * dinheiroQueSobra) / rendaMensal;
    const tempoAteJuntar = valorDoObjetivo / dinheiroQueSobra;
    const resultado = {
      nomeDoObjetivo: nomeDoObjetivo,
      dinheiroQueSobra: dinheiroQueSobra,
      porcentagemDoValor: porcentagemDoValor,
      tempoAteJuntar: Math.floor(tempoAteJuntar),
      valorDoObjetivo: valorDoObjetivo,
    };

    esconderForm();
    mostrarResultado();
    esconderLista();
    inserirResultado(resultado);
  }
}

function calcularNovamente() {
  checarLocalStorage();
  limparForm();
  mostrarForm();
  esconderResultado();
  document.getElementById('salvar-objetivo').disabled = false;
}

function salvarObjetivo() {
  const nomeDoObjetivo = pegarValorDoInput('input-nome-objetivo');
  const gastoMensal = Number(pegarValorDoInput('input-nome-gasto-mensal'));
  const rendaMensal = Number(pegarValorDoInput('input-nome-renda-mensal'));
  const valorDoObjetivo = Number(pegarValorDoInput('input-nome-valor'));
  const dinheiroQueSobra = rendaMensal - gastoMensal;
  const porcentagemDoValor = (100 * dinheiroQueSobra) / rendaMensal;
  const tempoAteJuntar = valorDoObjetivo / dinheiroQueSobra;

  const resultado = {
    nomeDoObjetivo: nomeDoObjetivo,
    dinheiroQueSobra: dinheiroQueSobra,
    porcentagemDoValor: porcentagemDoValor,
    tempoAteJuntar: Math.floor(tempoAteJuntar),
    valorDoObjetivo: valorDoObjetivo,
  };

  const dadosSalvos = localStorage.getItem('resultado-cache-jm');
  if (dadosSalvos) {
    const dadosSalvosJS = JSON.parse(dadosSalvos);
    dadosSalvosJS.push(resultado);
    localStorage.setItem('resultado-cache-jm', JSON.stringify(dadosSalvosJS));
  } else {
    localStorage.setItem('resultado-cache-jm', JSON.stringify([resultado]));
  }

  const toastCalculadora = document.getElementById('toastCalculadora');
  if (toastCalculadora) {
    const toast = new bootstrap.Toast(toastCalculadora);

    toast.show();
  }
}

function tentarNovamente() {
  mostrarForm();
  let secaoEducativa = document.getElementById('link-perfil-1');
  let textoPrincipal = document.getElementById('texto-principal');
  secaoEducativa.style.display = 'none';
  textoPrincipal.style.display = 'block';
}

function esconderLista() {
  let secaoListaObjetivos = document.getElementById('secao-objetivos');
  secaoListaObjetivos.style.display = 'none';
}

function prepararResultado(objetivo) {
  esconderForm();
  esconderLista();
  mostrarResultado();
  inserirResultado(objetivo, true);
}

function checarLocalStorage() {
  const dadosSalvos = localStorage.getItem('resultado-cache-jm');
  if (dadosSalvos) {
    const dadosSalvosJS = JSON.parse(dadosSalvos);
    if (dadosSalvosJS.length > 0) {
      const listaObjetivos = document.getElementById('lista-objetivos');
      while (listaObjetivos.lastChild) {
        listaObjetivos.removeChild(listaObjetivos.lastChild);
      }
      dadosSalvosJS.forEach(function (objetivo) {
        let item = document.createElement('li');
        item.innerText = objetivo.nomeDoObjetivo;
        item.className = 'itemObjetivo';
        item.addEventListener('click', function () {
          prepararResultado(objetivo);
        });
        listaObjetivos.appendChild(item);
      });
      let secaoListaObjetivos = document.getElementById('secao-objetivos');
      secaoListaObjetivos.style.display = 'block';
    }
  }
}

function setupForm() {
  checarLocalStorage();
  const form = document.getElementById('form-calculadora');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    calculaObjetivos();
  });

  const calcularNovamenteBotao = document.getElementById('calcular-novamente');
  calcularNovamenteBotao.addEventListener('click', function (e) {
    calcularNovamente();
  });

  const salvarObjetivoBotao = document.getElementById('salvar-objetivo');
  salvarObjetivoBotao.addEventListener('click', function (e) {
    salvarObjetivo();
  });

  const tentarNovamenteBotao = document.getElementById('button-voltar');
  tentarNovamenteBotao.addEventListener('click', function (e) {
    tentarNovamente();
  });
}
