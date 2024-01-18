// funcionamento do operador Arguments

function somar() {
  let soma = 0;

  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
}

console.log(somar(10, 20, 23, 54, 65, 76, 2));

// funcionamento do operador Rest

// reticencias singnifica que pode ser recebido inumeros argumentos
function somarComRest(...numeros) {
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(12, 23, 43, 54));

// funcionamento do operador Spread

const numeros = [1, 2, 3, 4];
console.log(...numeros);

const equipesF1Top = ["Ferrari", "Mercedes", "RedBull"];
const equipesF1Mid = ["Aston Martin", "McLaren", "Alpine"];

// const equipesF1 = equipesF1Top.concat(equipesF1Mid);
const equipesF1 = [...equipesF1Top, ...equipesF1Mid];

console.log(equipesF1);

const carroDoArtur = {
  marca: "ford",
  modelo: "ka",
  motor: "1.0",
};

const carroDoLucas = {
  ...carroDoArtur,
  motor: "1.5",
};
console.log(carroDoLucas);

// desestruturação

// const motorDoCarroLucas = carroDoLucas.motor;
const { motor: motorDoCarroLucas } = carroDoLucas;
const { motor: motorDoCarroArtur } = carroDoArtur;

const [item1, item2, item3, ...outrasEquipesF1] = equipesF1;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrasEquipesF1);

// spread = copiar/espalhar os dados
// rest = restante do conteudo
