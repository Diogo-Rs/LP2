//Classe
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
}

//Objeto
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

//Atributo
const button = document.querySelector("button");
button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");

//Metodo
let A = new Array();
for (let i = 0; i < 10; i++) {
    A.push(i)

}
console.log(A);

//Herança
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

//Polimorfismo
var pai = {
    getValor: function funcao() {
        return this.valor;
    },
    valor: 10
};
function outraFuncao() {
    return this.valor + this.valor;
}
var filho = Object.create(pai);
filho.getValor = function outraFuncao() {
    return this.valor + 5;
};
filho.valor = 2;
pai.getValor(); //Continua retornando 10 
filho.getValor(); //Retorna 7
