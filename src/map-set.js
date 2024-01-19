// map - um dicionario / um conjunto de valores - valores sendo como objetos
let meuMap = new Map();
meuMap.set("nome", "artur");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

// recuperacao de um item

const nome = meuMap.get("nome");
console.log(nome);

// recuperar a quantidade de itens
console.log(meuMap.size);

// cubo roxo = metodo/funcao
// cubo azul = propriedade/atributo

// verificar se um item existe

console.log(meuMap.has("sobrenome"));

// fazer uma limpeza no map

// meuMap.clear();
console.log(meuMap.size);

// faz uma iteracao, um for

for (const chave of meuMap.keys()) {
  console.log(chave);
}

for (const valor of meuMap.values()) {
  console.log(valor);
}

for (const [chave, valor] of meuMap.entries()) {
  console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);

// set

const cpfs = new Set();

cpfs.add(918724398743);
cpfs.add(987239479874);
cpfs.add(120931983098);

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
  console.log(valor);
});

// criar uma listagem de itens únicos

const array = [
  "Artur Vasconcelos",
  "Lucas Dondoni",
  "Sara Albuquerque",
  "Luana",
  "Luana",
  "Artur Vasconcelos",
];

const arrayComoSet = new Set([...array]);

console.log(arrayComoSet);
// obs.: set nao permite valores duplicados

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);
