const question = [
    {
      "pergunta": "Qual é o maior país do mundo em área?",
      "opcoes": ["Canadá", "China", "Estados Unidos", "Rússia"],
      "resposta_correta": "Rússia"
    },
    {
      "pergunta": "Que escritor criou a personagem Sherlock Holmes?",
      "opcoes": ["Agatha Christie", "J.K. Rowling", "Sir Arthur Conan Doyle", "Charles Dickens"],
      "resposta_correta": "Sir Arthur Conan Doyle"
    },
    {
      "pergunta": "Em que ano ocorreu a Revolução Francesa?",
      "opcoes": ["1776", "1789", "1804", "1815"],
      "resposta_correta": "1789"
    },
    {
      "pergunta": "Qual é o planeta mais próximo do Sol?",
      "opcoes": ["Vénus", "Terra", "Mercúrio", "Marte"],
      "resposta_correta": "Mercúrio"
    },
    {
      "pergunta": "Qual é a língua oficial do Brasil?",
      "opcoes": ["Espanhol", "Inglês", "Português", "Francês"],
      "resposta_correta": "Português"
    },
    {
      "pergunta": "Quem pintou a obra 'A Última Ceia'?",
      "opcoes": ["Michelangelo", "Leonardo da Vinci", "Rafael", "Vincent van Gogh"],
      "resposta_correta": "Leonardo da Vinci"
    },
    {
      "pergunta": "Qual é o elemento químico com o símbolo 'O'?",
      "opcoes": ["Ouro", "Oxigénio", "Osmio", "Prata"],
      "resposta_correta": "Oxigénio"
    },
    {
      "pergunta": "Qual é a capital da Austrália?",
      "opcoes": ["Sydney", "Melbourne", "Canberra", "Perth"],
      "resposta_correta": "Canberra"
    },
    {
      "pergunta": "Quantos continentes existem na Terra?",
      "opcoes": ["5", "6", "7", "8"],
      "resposta_correta": "7"
    },
    {
      "pergunta": "Quem é conhecido como o 'Rei do Rock'?",
      "opcoes": ["Elvis Presley", "Chuck Berry", "Buddy Holly", "Johnny Cash"],
      "resposta_correta": "Elvis Presley"
    },
    {
      "pergunta": "Que país inventou o papel?",
      "opcoes": ["Egito", "Grécia", "China", "Índia"],
      "resposta_correta": "China"
    },
    {
      "pergunta": "Qual é o animal terrestre mais rápido do mundo?",
      "opcoes": ["Gazela", "Chita", "Cavalo", "Leopardo"],
      "resposta_correta": "Chita"
    },
    {
      "pergunta": "Qual é o maior oceano do mundo?",
      "opcoes": ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
      "resposta_correta": "Oceano Pacífico"
    },
    {
      "pergunta": "Quem escreveu 'Dom Quixote'?",
      "opcoes": ["Gabriel García Márquez", "Miguel de Cervantes", "Jorge Luis Borges", "Fernando Pessoa"],
      "resposta_correta": "Miguel de Cervantes"
    },
    {
      "pergunta": "Que planeta é conhecido como o 'Planeta Vermelho'?",
      "opcoes": ["Júpiter", "Saturno", "Vénus", "Marte"],
      "resposta_correta": "Marte"
    }
];
  
async function readJsonFile(nameOfJsonFile) {
    try {
        const response = await fetch(nameOfJsonFile);

        if (!response.ok) {
            throw new Error(' Network response was not ok ' + response.statusText);
        }
        return await response.json();
    }catch(error) {
        console.error('There was a problem with the fetch operation: ' , error);
    }
}

async function start(){
    const jsonData = await readJsonFile("questions.json");

    console.log(jsonData);
    
    const container = document.getElementById("container");
    container.style.display = "none";

    const layout = document.getElementById("layout");
    layout.style.display = "flex";

    passarPergunta();
}
let i = 0;
function passarPergunta(){
    
    const div = getElementById("pergunta").innerHTML = question[i].pergunta;
    i++
}






