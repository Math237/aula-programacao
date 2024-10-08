/*
var nota1 = parseInt(prompt("Digite a primeira nota do bimestre:"));
var nota2 = parseInt(prompt("Digite a segunda nota bimestre:"));
var nota3 = parseInt(prompt("Digite a terceira nota bimestre:"));
var nota4 = parseInt(prompt("Digite a quarta nota bimestre:"));
var media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Sua média é:" + media);
*/

var notas = [];
var i = 0;

//recebe as notas
notas[i] = parseInt(prompt("Digite a nota n°" + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n°" + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n°" + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n°" + (i+1)));

var media = notas[0] + notas[1] + notas[2] + notas[3];
media = media / notas.length;
console.log("Média é: ", media);
