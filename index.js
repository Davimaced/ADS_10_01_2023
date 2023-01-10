/*

javascript  / typescript

js

- operaçoes matematicas basicas 
- operaçoes condicionais 
- booleanos (true e false)

*/

 //console.log("code runner rodando com sucesso ")
// calcular a porcentagem de um número
/* 
function porcentagem (numero, por)
{
    return(numero/100) * por; 
}
console.log (porcentagem(1000, 60));

*/ 

//criar uma funçao que excute a soma de dois valores 
/*
function soma(valor1, valor2){
    return valor1+ valor2;
}
console.log (soma(20.5, 30.5));
*/
// criar uma funçao que exiba a soma, subtraçao, multiplicação e divisão entre dois numeros 

/*
function operacoes (valor1, valor2){
    console.log(`a soma entre ${valor1} e ${valor2} é ${valor1 + valor2}`);
    console.log (`a subtracao entre ${valor1} e ${valor2} é ${valor1 -valor2}`);
    console.log (`a multiplicacao entre ${valor1} e ${valor2} é ${valor1 * valor2}`);
    console.log (`a divisao entre ${valor1} e ${valor2} é ${valor1 / valor2}`);

    //executar a multiplicação(*) e divisao(/)
}
operacoes (50, 100)
*/

// criar uma funçõa que verifica se um numero inteiro e divisivel por  tres e retorne como true e false
/*
function divisivel(numeroint) {
     //condicionais  em js

    if (numeroint % 3 == 0){
        return true 
    } else {
        return false 
    }
}
console.log(divisivel(100))
*/

// criar um mecanismo que exiba  se um usuario  esta logadpo ou nao 
/*
autenticado = false;

switch (autenticado){
    case  true:
        console.log ("o usuario esta logado");
         break;
    case false:
        console.log("o usuario nao esta logado");

}
*/

//fazer uma conversao de temperatura de celsius para fahrenheit

function cpf(n) {
    return n * 1.8 + 32
}
console.log (cpf(20))

//conversao de fahrenheit para celsius

function fpc(n){
    return (n - 32) / 1.8
}
console.log (fpc(68));