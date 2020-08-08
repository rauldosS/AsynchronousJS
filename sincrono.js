/*
    Então jovem, vamos lá. As funções async por definição retornam uma Promise,
    se você retornar apenas um valor, tipo o código abaixo, o Js circunda o calor com uma Promise.
*/

async function f1() {
    return 'f1';
}

let v1 = f1();

console.log(v1); // Prints Promise { 'f1' }

f1().then(v => {
    console.log(v); // Prints 'f1'
});

/*
Não tem muito como fugir disso, isso ocorre para que funções async não congelem a execução do script, visto que elas são assíncronas, enquanto elas estão paradas esperando a resolução de uma Promise.

A vantagem das funções async é que internamente você pode congelar a execução esperando a resolução de uma Promise usando a keyword await. Para ter acesso ao retorno de uma função async você vai precisar sempre usar o .then(), isso é em certo ponto uma proteção e garantia do tipo de retorno das funções assíncronas (eu sei que "garantia e protração" não são coisas muito usuais em Js). Se funções assíncronas encapsulassem o retorno sempre, isso geraria bastante dor de cabeça, vários códigos quebrariam enquanto tentam chamar o método then de um inteiro, o que seria bem frustrante.

Como resolver o seu problema?

Usando o famoso then:
*/