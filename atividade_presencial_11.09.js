const Listadepecas = ['pecas de teste', 'AB', 'peca B']
console.log ('quantidade de caracteres')

if (Listadepecas.log <= 10) {
}
console.log ('as pecas pode ser cadastradas');

for (let index = 0; index < Listadepecas.length; index++) {
    const pecaatual = Listadepecas [index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + ':a peca possui nome inferior a 3 caracteres e naopodesercadastrada')
    } else {
    console.log(pecaatual + ': a peca pode ser cadastrada')
    }
}
    console.log('peso de cada peca')

const pesodapecaemgramas = 50;
if (pesodapecaemgramas >= 100) {
    console.log('peso suficiente')
} else {
    console.log('valor insuficiente')
}
