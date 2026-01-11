/*
DESAFIO: Níveis de Herói
criar uma variavel para armazenar o nome e a quantidade
experiencia(XP) de um Herói, depois utilize uma estrutura
de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina Diamante
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

#Saida deve ser:
"O Heroi de nome **{nome}** está no nivel de **{nivel}**"
*/

let nome = "Fernando";
let XP = 8500;
let nivel = "";

if(XP <= 1000){
    nivel = "Ferro";
}
if(XP >= 1001 && XP <= 2000){
    nivel = "Bronze";
}
if(XP >= 2001 && XP <= 5000){
    nivel = "Prata";
}
if(XP >= 6001 && XP <= 7000){
    nivel = "Ouro";
}
if(XP >= 7001 && XP <= 8000){
    nivel = "Platina Diamante";
}
if(XP >= 8001 && XP <= 9000){
    nivel = "Ascendente";
}
if(XP >= 9001 && XP <= 10000){
    nivel = "Imortal";
}
if(XP >= 10001){
    nivel = "Radiante";
}
console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);   
