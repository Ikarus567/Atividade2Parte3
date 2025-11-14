const dadosSensiveis = {
  usuarios: [
    {
      cpf: "123.456.789-00",
      cartaoCredito: "5555-6666-7777-8888",
      telefone: "(11) 99999-9999",
      nome: "Fulano de Tal"
    }
  ],
  metadata: {
    ip: "192.168.1.100",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  }
};

function sanitizarDados(dados) {
  const dadosSanitizados = JSON.parse(JSON.stringify(dados));

  dadosSanitizados.usuarios = dadosSanitizados.usuarios.map(usuario => ({
    ...usuario,
    cpf: usuario.cpf.replace(/\d{3}\.\d{3}\.\d{3}/, '***.***.***'),
    cartaoCredito: usuario.cartaoCredito.replace(/\d{4}-\d{4}-\d{4}/, '****-****-****'),
    telefone: usuario.telefone.replace(/(\(\d{2}\)\s*)\d{5}-/, '$1*****-')
  }));

  if (dadosSanitizados.metadata && dadosSanitizados.metadata.token) {
    dadosSanitizados.metadata.token = dadosSanitizados.metadata.token.slice(0, 10) + '...';
  }

  return dadosSanitizados;
}

console.log(sanitizarDados(dadosSensiveis));