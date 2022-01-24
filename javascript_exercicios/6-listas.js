console.log(`Trabalhando com listas`);  
// const salvador = `Salvador´;
// const saoPaulo = `São Paulo´;
// const rioDeJaneiro = ´Rio de Janeiro`;

const listaDeDestinos = new Array(
`Salvador`,    
`Sâo Paulo`,
`Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista

console.log("Destinos Possíveis");
//console.log(Salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

// listaDeDestinos = 2 

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]);







