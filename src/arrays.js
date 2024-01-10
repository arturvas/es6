const redesSociais = ["facebook", "instagram", "twitter"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil nas redes sociais: ${redesSociais[i]}.`);
}

// outra maneira de fazer o laço no ecmascript6

redesSociais.forEach(function (nomeRedeSocial, indice) {
  console.log(
    `#${indice} Outra maneira de testar. Eu tenho perfil nas redes sociais: ${nomeRedeSocial}.`
  );
});

const alunos = ["Lucas", "Artur", "Sara", "Irineu"];
const matriculasAlunos = [12, 54, 34, 67];
const cursos = ["Frontend", "Backend", "QA", undefined];

// metodo map

const infoAlunos = alunos.map(function (nomeAluno, indice) {
  return {
    nome: nomeAluno,
    matricula: matriculasAlunos[indice],
    curso: cursos[indice],
  };
});
console.log(infoAlunos);

// metodo find

const aluno = infoAlunos.find(function (item) {
  return item.nome == "Sara"; //true or false
});
console.log(aluno);

// metodo findindex

const indiceAluno = infoAlunos.findIndex(function (item) {
  return item.nome == "Sara"; // true or false
});
console.log(indiceAluno);

// every
infoAlunos.push({
  nome: "Lucio",
  matricula: 60,
  curso: "Backend",
});

const todosAlunosSaoDeFrontEnd = infoAlunos.every(function (item) {
  return item.curso === "Frontend";
});
console.log(todosAlunosSaoDeFrontEnd);

const existeAlgumAlunoBackend = infoAlunos.some(function (item) {
  return item.curso === "Backend" && item.curso === "Frontend";
});
console.log(existeAlgumAlunoBackend);

function filtraALunosDeBackend(aluno) {
  return aluno.curso === "Backend";
}

const alunosDeBackend = infoAlunos.filter(filtraALunosDeBackend);
console.log(alunosDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}
console.log(somaComFor);

const nomesDosAlunos = infoAlunos.reduce(function (acumulador, itemAtual) {
  acumulador += `${itemAtual.nome} `;
  return acumulador;
}, "");
console.log(nomesDosAlunos);
