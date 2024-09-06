const nomes = ["cleber", "jose", "valdemiro", "Marcela", "ryan", "Gustavo", "Lucas"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);{
}
