function somar() {
  let soma = 0;

  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
  // console.log(arguments);
}

console.log(somar(10, 20, 23, 54, 65, 76, 2));
