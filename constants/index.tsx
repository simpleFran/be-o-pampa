export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgURL: "/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
];

export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
  },
  {
    id: 2,
    name: "echo",
  },
  {
    id: 3,
    name: "fable",
  },
  {
    id: 4,
    name: "onyx",
  },
  {
    id: 5,
    name: "nova",
  },
  {
    id: 6,
    name: "shimmer",
  },
];

export const podcastData = [
  // {
  //   id: 1,
  //   title: "Narrativa",
  //   description: "Breve resumo do App",
  //   imgURL: "/icons/microphone.svg",
  // },
  {
    id: 2,
    title: "Fauna",
    description: "",
    imgURL: "/icons/animals-2.png",
    href:"/faune"
  },
  {
    id: 3,
    title: "Flora",
    description: "",
    imgURL: "/icons/fl.jpg",
    href:"/flower"
  },
  {
    id: 4,
    title: "Características",
    description: "",
    imgURL: "/icons/features.jpg",
    href:"/features"
  },
  {
    id: 5,
    title: "Conscientização e Preservação",
    description: "",
    imgURL: "/icons/ferret_preserve.jpg",
    href:"/awareness"
  },
  {
    id: 6,
    title: "Quiz/Jogo",
    description: "",
    imgURL: "/icons/quiz.jpg",
    href:"/quiz"
  },
];

// test questions
export const quizQuestions = [
  {
    question: "Tuca-tuca é um animal do Bioma Pampa de qual família?",
    options: ["Hominídeos", "Aves", "Silvestres", "Roedores"],
    answer: "Roedores",
  },
  {
    question: "Quem é o autor(a) de 'Harry Potter'?",
    options: [
      "J.R.R. Tolkien",
      "J.K. Rowling",
      "Renata P. Maldonado",
      "Prof. Ketlin Monique",
    ],
    answer: "Renata P. Maldonado",
  },
  {
    question: "Quanto é 2 + 2?",
    options: ["1 milhão", "4", "2 ao quadrado", "1.480.625"],
    answer: "4",
  },
  {
    question: "Qual o animal que não é característico do Bioma Pampa?",
    options: ["Leopardo", "Quero-quero", "Graxaim", "Tatu"],
    imgUrl: [
      "/quiz/q-leopard.jpg",
      "/quiz/q-quero-quero.jpg",
      "/quiz/q-graxain.png",
      "/quiz/q-armadillo.jpg",
    ],
    answer:"Leopardo"
  },
];

export const quizLevelsScores = [
  {
    level: "low",
    text: "Puxa!!! Tente melhor na próxima",
    imageUrl: "",
  },
  {
    level: "medium",
    text: "Boa!!! Parabéns, mas pode melhorar",
    imageUrl: "",
  },
  {
    level: "high",
    text: "Very Good! Você acertou todas!",
    imageUrl: "",
  },
];
