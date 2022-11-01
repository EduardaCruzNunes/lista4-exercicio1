var morango = 0;
var maca = 0;
const precoMorango = 2.50;
const precoMorangoAcimaDe5Kg = 2.20;
const precoMaca = 1.80;
const precoMacaAcimaDe5Kg = 1.50;
let precoTotalDoMorango = 0;
let precoTotalDaMaca = 0;
var desconto = 0;

morango = prompt('Digite a quantidade de morangos em Kg:');
maca = prompt('Digite a quantidade de maçãs em Kg:');

const analisarQuantidadeDeMorango = () => {
    if (morango <= 5) {
        precoTotalDoMorango = precoMorango * morango; 
        return `R$ ${precoTotalDoMorango}`;
    } else {
        precoTotalDoMorango = precoMorangoAcimaDe5Kg * morango;
        return `R$ ${precoTotalDoMorango}`;
    }
}
console.log(analisarQuantidadeDeMorango());

const analisarQuantidadeDeMaca = () => {
    if (maca <= 5) {
        precoTotalDaMaca = precoMaca * maca;
        return `R$ ${precoTotalDaMaca}`;
    } else {
        precoTotalDoMorango = precoMacaAcimaDe5Kg * maca;
        return `R$ ${precoTotalDoMorango}`;//4,50
    }
}
console.log(analisarQuantidadeDeMaca());

const analisarQuantidadeDeDesconto = () => {

    if (morango + maca > 8 || precoTotalDoMorango + precoTotalDaMaca > 25) {
        desconto = precoTotalDoMorango * 0.1 + precoTotalDaMaca * 0.1;
        precoTotalDoMorango = precoTotalDoMorango + precoTotalDoMorango * 0.1;
        precoTotalDaMaca =  precoTotalDaMaca + precoTotalDaMaca * 0.1;
        return `R$ ${precoTotalDoMorango + precoTotalDaMaca} de 10% de desconto, ${desconto} total na compra!`;
    } else {
        return `${precoTotalDoMorango + precoTotalDaMaca}, desculpe sua compra não teve desconto!`;
    }

}
console.log(analisarQuantidadeDeDesconto());
