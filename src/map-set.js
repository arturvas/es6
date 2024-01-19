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

// for (const chave of meuMap.keys()) {
//   console.log(chave);
// }

for (const valor of meuMap.values()) {
  console.log(valor);
}
