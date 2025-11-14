const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

function parseQueryString(query) {
  return query.split('&').reduce((acc, pair) => {
    const [key, value] = pair.split('=');
    acc[key] = isNaN(value) ? value : Number(value);
    return acc;
  }, {});
}

console.log(parseQueryString(queryString));