// Lista de heróis com nome e XP
let herois = [
  { nome: "Artemis", xp: 8500 },
  { nome: "Thalos", xp: 3000 },
  { nome: "Mira", xp: 12000 },
  { nome: "Garen", xp: 700 },
  { nome: "Luna", xp: 9500 }
];

// Função para determinar o nível
function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

// Laço para percorrer a lista de heróis
for (let i = 0; i < herois.length; i++) {
  let heroi = herois[i];
  let nivel = classificarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}