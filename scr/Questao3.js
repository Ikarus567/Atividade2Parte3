const usuariosJSON = `[
  {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
  {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
  {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

function normalizarUsuarios(dados) {
  const usuarios = JSON.parse(dados);

  return usuarios.map(usuario => {

    const nome = usuario.nome
      .trim()
      .toLowerCase()
      .split(' ')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');


    const email = usuario.email.trim().toLowerCase();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const idade = Number(usuario.idade);
    const maiorDe18 = idade >= 18 ? "É maior de idade" : "É menor de idade";

    return {
      nome,
      email: emailValido ? email : null,
      idade,
      maiorDe18
    };
  });
}


console.log(normalizarUsuarios(usuariosJSON));
