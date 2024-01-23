/** 
// abstração, classe, funcao construtora
function Pokemon(nomeDoPokemon, tipoDoPokemon) {
  this.nome = nomeDoPokemon;
  this.tipo = tipoDoPokemon;
}

// instancia
const pikachu = new Pokemon("Pikachu", "elétrico");
**/

// objeto
class Pokemon {
  #hp = 100;

  constructor(nomePokemon, tipoPokemon) {
    this.nome = nomePokemon;
    this.tipo = tipoPokemon;
  }

  // metodo
  atacar(nomeDoAtaque) {
    console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
  }

  recebeuAtaque() {
    this.#hp -= 10;
    console.log(`${this.nome} recebeu 10 de dano de um ataque!`);
  }

  exibeHp() {
    console.log(`O HP de ${this.nome} é de ${this.#hp}`);
  }
}

// heranca
class Pikachu extends Pokemon {
  constructor() {
    super("Pikachu", "Elétrico");
  }

  // polimorfismo
  atacar() {
    console.log(`${this.nome} atacou com Choque do Trovão`);
  }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

const pikachu = new Pokemon("pikachu", "eletrico");
// pikachu.atacar("choque do trovão");
// pikachu.nome = "pikachu";
// pikachu.tipo = "eletrico";

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
