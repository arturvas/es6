function funcaoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

function funcaoMuitoPesada() {
  let execucoes = 0;
  for (let i = 0; i < 5000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

function medirTempoFuncao(funcao) {
  let inicio = performance.now();
  funcao();
  let fim = performance.now();
  let tempoMedido = fim - inicio;
  console.log(`Executou ${funcao.name} em ${(tempoMedido / 1000).toFixed(3)}s`);
}

// resolve => chamado em caso de sucesso, reject => executado em caso de falhas
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 5000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject("Deu erro na iteracao dos numeros");
  }
});

const promiseComParametros = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com o usuário: ${login}`);
    }, 3000);
  });
};

// medirTempoFuncao(funcaoMuitoPesada);

// tornando uma funcao assincrona
async function execucaoPrincipal() {
  console.log("inicio");

  // await funcaoMuitoPesadaPromise
  //   .then((resultado) => console.log(resultado))
  //   .catch((erro) => console.log(erro));

  promiseComParametros("artur@gmail.com", 123456).then((resultado) => {
    console.log(resultado);
  });

  try {
    const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }

  console.log("fim");
}

execucaoPrincipal();
