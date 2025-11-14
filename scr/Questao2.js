const texto =
  "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

function analisarTexto(texto) {
  const palavras = texto.replace(/[.,!?]/g, "").split(" ");
  const totalPalavras = palavras.length;

  const frasep = {};
  palavras.forEach(palavra => {
    frasep[palavra] = (frasep[palavra] || 0) + 1;
  });

  const frequenciaPalavras = Object.keys(contagem).map(palavra => ({
    palavra: palavra,
    frequencia: frasep[palavra]
  }));

  const tamanhoMedioPalavras = palavras.join("").length / totalPalavras;

  return {
    totalPalavras: totalPalavras,
    frequenciaPalavras: frequenciaPalavras,
    tamanhoMedioPalavras: Number(tamanhoMedioPalavras.toFixed(2))
  };
}

console.log(analisarTexto(texto));