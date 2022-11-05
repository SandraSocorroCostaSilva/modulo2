 const input = require("readline-sync");

// console.log("seja bem ao cine senac! Vamos validar sua entrada ")

// const idade = input.question("Qual a sua idade?")

// if (idade >= 16 && idade <18) {
//     console.log ("pode entrar")
// } 
// else if (idade >= 18) {
//     console.log ("pode entrar e beber ")
// }
// else
// {
//     console.log("entrada não permitida")
// }

console.log("Sejas bem vindo ao Cinema! Entrada livre para pessoas com 60 anos")

const idade = input.question("Qual a sua idade ? ")

if ( idade>= 60){
    console.log ("Entrada livre")
}
else if(idade >12 && idade <60){
    console.log("Ingresso custa 20 reais")
}
else{
    console.log("Menor de 12 anos só é permitido entrada com acompanhante")
}
