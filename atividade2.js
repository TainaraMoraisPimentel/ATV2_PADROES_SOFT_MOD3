class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return Object.assign({}, this);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        return Object.assign({}, this);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Número de Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
        super(modelo, marca, cor, numeroRodas);
        this.tipo = tipo;
    }

    clone() {
        return Object.assign({}, this);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, tipo: ${this.tipo}`;
    }
}


class Aplicacao {
    constructor() {
        this.veiculos = [];
    }

    adicionarVeiculo(veiculo) {
        this.veiculos.push(veiculo);
    }

    clonarVeiculos() {
        let veiculosClonados = [];
        for (let veiculo of this.veiculos) {
            veiculosClonados.push(veiculo.clone());
        }
        return veiculosClonados;
    }
}

let aplicacao = new Aplicacao();
let carro1 = new Carro("Fiesta", "Ford", "Azul", 4, 4);
let carro2 = new Carro("Gol", "Volkswagen", "Preto", 4, 2);
let moto1 = new Moto("CB 500", "Honda", "Vermelha", 2, "Esportiva");
let moto2 = new Moto("CG 125", "Honda", "Branca", 2, "Street");
aplicacao.adicionarVeiculo(carro1);
aplicacao.adicionarVeiculo(carro2);
aplicacao.adicionarVeiculo(moto1);
aplicacao.adicionarVeiculo(moto2);
let veiculosClonados = aplicacao.clonarVeiculos();
for (let veiculo of veiculosClonados) {
    console.log(veiculo.represent());
}


