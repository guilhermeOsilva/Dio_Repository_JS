class Carro {
  marca;
  cor;

  gastoMedioPorKm;
  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distancia, precoCombustivel) {

    return distancia * this.gastoMedioPorKm * precoCombustivel;
  }
}

let Celta = new Carro("celta", "Vermelho", 1/12);

let resultado  = Celta.calcularGastoDePercurso(10, 7.9)
console.log(resultado);
