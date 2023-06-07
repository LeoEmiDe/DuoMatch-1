type Creators = {

    nome: string;

    img: string;

    biografia: string;

}


 

// Dados dos criadores

const criadores: Creators[] = [

    {

      nome: "Alexandre Cintra",

      img: "assets/images/background1.jpg",

      biografia: "Biografia do Criador 1",

    },

    {

      nome: "Caio Raja",

      img: "assets/images/background2.jpg",

      biografia: "Biografia do Criador 2",

    },

    {

      nome: "Felipe Sartorato",

      img: "assets/images/background3.jpg",

      biografia: "Biografia do Criador 3",

    },

    {

      nome: "Leonardo Mazzo",

      img: "assets/images/background4.jpg",

      biografia: "Biografia do Criador 4",

    },

    {

      nome: "Leonardo Yukiu",

      img: "assets/images/background5.jpg",

      biografia: "Biografia do Criador 5",

    },

    {

      nome: "Lucas Zago",

      img: "assets/images/background6.jpg",

      biografia: "Biografia do Criador 6",

    },

    {

      nome: "Rafael Cruz",

      img: "assets/images/background7.jpg",

      biografia: "Biografia do Criador 7",

    },

  ];

 

let startIndex: number = 0; // Índice inicial para exibir os criadores



 

const totalCreators: number = criadores.length; // Total de criadores na array


 

// Função auxiliar para atualizar as informações dos criadores

function updateCreators(): void {

  // Obtém as divs dos criadores

  const divs = Array.from(document.getElementsByClassName("criadores-conteudo-div"));


 

  // Atualiza as informações dos criadores nas divs correspondentes

  for (let i = 0; i < divs.length; i++) {

    const creatorIndex = (startIndex + i) % totalCreators; // Calcula o índice do criador atual

    const creator = criadores[creatorIndex]; // Obtém os dados do criador correspondente


 

    const img = divs[i].querySelector("img") as HTMLImageElement// Seleciona a tag <img> dentro da div

    img.src = creator.img; // Define o atributo src com a URL da imagem do criador


 

    const h5 = divs[i].querySelector("h5") as HTMLHeadingElement// Seleciona a tag <h5> dentro da div

    h5.textContent = creator.nome; // Define o texto do <h5> com o nome do criador


 

    const p = divs[i].querySelector("p") as HTMLParagraphElement // Seleciona a tag <p> dentro da div

    p.textContent = creator.biografia; // Define o texto do <p> com a biografia do criador

  }

}


 

// Atualiza os criadores exibidos ao clicar na seta direita

let setadireita = document.getElementById("criadores-seta-direita") as HTMLDivElement

setadireita.addEventListener("click", (): void => {

  startIndex = (startIndex + 1) % totalCreators; // Atualiza o índice para exibir o próximo criador

  updateCreators(); // Atualiza as informações dos criadores

});


 

// Atualiza os criadores exibidos ao clicar na seta esquerda

let setaesquerda = document.getElementById("criadores-seta-esquerda") as HTMLDivElement

setaesquerda.addEventListener("click", ():void => {

  startIndex = (startIndex - 1 + totalCreators) % totalCreators; // Atualiza o índice para exibir o criador anterior

  updateCreators(); // Atualiza as informações dos criadores

})

updateCreators(); // Chama a função para exibir os criadores iniciais