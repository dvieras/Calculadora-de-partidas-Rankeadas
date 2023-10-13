let totalVitorias = saldoVitorias(Math.floor(Math.random() * 200), Math.floor(Math.random() * 30))
let rankHeroi

function saldoVitorias(vitorias, derrotas) {
    let somatoria = vitorias - derrotas 
    return somatoria
}

if (totalVitorias < 10) {
    rankHeroi = "Ferro"
} else if (totalVitorias > 11 && totalVitorias < 20) {
    rankHeroi = "Bronze"
} else if (totalVitorias > 21 && totalVitorias < 50) {
    rankHeroi = "Prata"
} else if (totalVitorias > 51 && totalVitorias < 80) {
    rankHeroi = "Ouro"
} else if (totalVitorias > 81 && totalVitorias < 90) {
    rankHeroi = "Diamante"
} else if (totalVitorias > 91 && totalVitorias < 100) {
    rankHeroi = "Lendário"
} else {
    rankHeroi = "Imortal"
}

console.log(`O Herói tem o saldo de ${totalVitorias} e está no nível ${rankHeroi}`)



