let nome = prompt("digite seu nome:");
let renda = Number(prompt("digite sua renda mensal:"));

while (isNaN(renda)) {
    renda = Number(prompt("valor inválido. digite sua renda novamente:"));
}
let qtd = Number(prompt("quantas despesas (1 a 5)?"));
while (isNaN(qtd)) {
    qtd = Number(prompt("valor inválido. digite a quantidade novamente:"));
}
if (qtd < 1) {
    qtd = 1;
}
if (qtd > 5) {
    qtd = 5;
}
let total = 0;

for (let i = 1; i <= qtd; i++) {
    let valor = Number(prompt("digite o valor da despesa " + i + ":"));
    while (isNaN(valor)) {
        valor = Number(prompt("valor inválido. digite a despesa " + i + " novamente:"));
    }
    total = total + valor;
}

let sobra = renda - total;
let mensagem = "";

if (total > renda) {
    mensagem = "⚠️ atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= (renda * 0.30)) {
        mensagem = "✅ ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 ok: dá para melhorar a sobra.";
    }
}

let resultado = "nome: " + nome + "\n" +
                "renda: r$ " + renda.toFixed(2) + "\n" +
                "total de despesas: r$ " + total.toFixed(2) + "\n" +
                "sobra: r$ " + sobra.toFixed(2) + "\n" +
                "status: " + mensagem;
alert(resultado);
console.log(resultado);