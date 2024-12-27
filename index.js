let nomeHeroi
let xpHeroi
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question("Qual o nome do seu herói? ", nome => {
    nomeHeroi = nome
    readline.question("Quanto de experiência seu herói tem? ", xp => {
        xpHeroi = xp
        determinarRankHeroi(xpHeroi,nomeHeroi)
    readline.close()
  })
})

function determinarRankHeroi(xpHeroi, nomeHeroi){
let rankHeroi

if(xpHeroi <= 1000){
    rankHeroi = "Ferro"
}
else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    rankHeroi = "Bronze"
}
else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    rankHeroi = "Prata"
}
else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    rankHeroi = "Ouro"
}
else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    rankHeroi = "Platina"
}
else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    rankHeroi = "Ascendente"
}
else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    rankHeroi = "Imortal"
}
else{
    rankHeroi = "Radiante"
}
console.log("O herói de nome",nomeHeroi,"está no nível de",rankHeroi)
}
