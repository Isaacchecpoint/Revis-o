//String

let AspasSimples  = 'Isaac';
let AspasDuplas  = "Isaac";
let Crases  = `Isaac`;


//Number

let Negativo = -1;
let Positivo = 5;
let Multiplicação = 1*8;
let Divisão = 2/2;

//Boolen 

let Verdadeiro = true;
let falso = false;

//object

let Comida = {
    name: "hamburgue",
    valor: 5
}

//Array

let listaComida = [
    "Arroz",
    "Feijão",
    "Macarrão"
]

//If e Else

let temperature = 37
let highTemperature = temperature > 37.5
let mediumTemperature = temperature < 37.5 && temperature > 37

if (condição) {
    console.log ('Febre alta')
}
else if (condição) {
    console.log ('Febre moderada')
}
else {
    console.log ('Saudável')
}

//Switch

function calculate(Number1,operator,Number2){
    let result

    switch (operator) {
        case '+' :
            result =Number1+Number2
            break;
            
        case '-' :
            result =Number1+Number2
            break;

        case '*' :
            result =Number1+Number2
            break;

        case '/' :
            result =Number1+Number2
            break;

        case '%' :
            result =Number1+Number2
            break;

        default:
            console.log('Não Implementado')
            break;
    }
    return result
}
console.log(calculate (4,'+',6))

//throu

function sayMyName(name = ''){
    if (name== ''){
        throw 'Nome obrigatório'
    }
    console.log(name)
}

//try...catch

try {
    sayMyName('Isaac')
}
catch (e){
    console.log(e)
}
console.log('após ao try/catch')