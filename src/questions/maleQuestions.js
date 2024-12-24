export const maleQuestion = [
  {
    id: 1,
    question: "Durante sua infância, como era a dinâmica familiar em casa?",
    image: "icones/4.png",
    options: [
      "Harmoniosa e estável",
      "Tensa e conflituosa",
      "Pais separados",
      "Criado por apenas um dos pais",
      "Criado por outros familiares ou tutores",
    ],
  },
  {
    id: 2,
    question:
      "Quais características melhor descrevem o ambiente em que você cresceu?",
    image: "icones/5.png",
    options: [
      "Acolhedor e encorajador",
      "Imprevisível e confuso",
      "Tenso e ansioso",
      "Rigoroso e disciplinado",
      "Com dificuldades financeiras",
      "Emocionalmente distante",
    ],
    isMultipleChoice: true,
  },
  {
    id: 3,
    question:
      "Como você caracterizaria a maioria de suas memórias de infância?",
    image: "icones/6.png",
    options: [
      "Majoritariamente felizes",
      "Majoritariamente desagradáveis",
      "Tenho poucas lembranças da infância",
      "É difícil categorizar",
    ],
  },
  {
    id: 4,
    question:
      "Que tipos de situações tendem a evocar reações emocionais intensas ligadas ao seu passado?",
    image: "icones/7.png",
    options: [
      "Situações de conflito ou agressão",
      "Quando me sinto ignorado ou desvalorizado",
      "Momentos em que me sinto sem controle",
      "Quando me sinto pressionado ou sem saída",
      "Situações que remetem a perdas passadas",
      "Outras situações específicas",
    ],
    isMultipleChoice: true,
  },
  {
    id: 5,
    question:
      "Você já enfrentou dificuldades em gerenciar suas reações emocionais?",
    image: "icones/8.png",
    options: ["Sim, frequentemente", "Raramente ou nunca", "Não estou certo"],
  },
  {
    id: 6,
    question: "Quanto esta afirmação se aplica a você?",
    image: "icones/9.png",
    options: [
      "Muito aplicável",
      "Parcialmente aplicável",
      "Pouco aplicável",
      "Não se aplica",
    ],
    citation:
      "Às vezes recorro a comportamentos de risco ou uso de substâncias para lidar com emoções ou memórias difíceis.",
    figures: ["cloud/1.png", "cloud/2.png", "cloud/3.png", "cloud/4.png"],
  },
  {
    id: 7,
    question:
      "Você considera sentimentos de tristeza ou desânimo como parte intrínseca da sua personalidade?",
    image: "icones/10.png",
    options: [
      "Sim, vejo como parte de quem sou",
      "Não, vejo como algo separado de mim",
      "Não tenho certeza",
    ],
  },
  {
    id: 8,
    question: "Há quanto tempo você experimenta esses sentimentos?",
    image: "icones/11.png",
    options: [
      "Recentemente (últimas semanas)",
      "Há alguns meses",
      "Por vários anos",
      "Desde que me lembro",
      "Não sei precisar",
    ],
    conditionalShow: (previousAnswer) =>
      previousAnswer === "Sim, vejo como parte de quem sou",
    showDidYouKnow: true,
  },
  {
    id: 9,
    question:
      "Durante sua juventude, você experimentou períodos de tristeza profunda?",
    image: "icones/12.png",
    options: ["Ocasionalmente", "Com frequência", "Raramente", "Nunca"],
    figures: ["cloud/1.png", "cloud/2.png", "cloud/3.png", "cloud/4.png"],
    conditionalShow: (previousAnswer) =>
      previousAnswer !== "Sim, vejo como parte de quem sou",
  },
  {
    id: 10,
    question: "Quanto esta afirmação reflete sua experiência?",
    image: "icones/13.png",
    options: [
      "Reflete muito bem",
      "Reflete parcialmente",
      "Reflete pouco",
      "Não reflete minha experiência",
    ],
    citation:
      "Frequentemente uso humor ou ironia para mascarar memórias ou sentimentos dolorosos do meu passado.",
  },
  {
    id: 11,
    question: "Como você se sente em situações onde é o foco de atenção?",
    image: "icones/14.png",
    options: [
      "Confortável e confiante",
      "Ansioso e preocupado",
      "Emocionalmente distante",
      "Desconfortável e tímido",
    ],
    isMultipleChoice: true,
  },
  {
    id: 12,
    question:
      "Você percebe que altera significativamente seu comportamento em diferentes contextos sociais?",
    image: "icones/15.png",
    options: [
      "Sim, frequentemente",
      "Não, geralmente mantenho minha forma de ser",
      "Não tenho certeza",
    ],
  },
  {
    id: 13,
    question: "Em suas relações interpessoais, você tende a...",
    image: "icones/16.png",
    options: [
      "Manter-se emocionalmente distante",
      "Confiar facilmente nos outros",
      "Evitar compromissos profundos",
      "Formar vínculos rapidamente",
      "Ter dificuldade em expressar sentimentos",
      "Evitar confrontos a todo custo",
      "Ter dificuldade em confiar nos outros",
      "Outra tendência específica",
    ],
    isMultipleChoice: true,
    showDidYouKnow: true,
  },
  {
    id: 14,
    question: "Quanto você se identifica com esta afirmação?",
    image: "icones/17.png",
    options: [
      "Identifico-me fortemente",
      "Identifico-me parcialmente",
      "Identifico-me pouco",
      "Não me identifico",
    ],
    citation:
      "Frequentemente me envolvo em relações onde não sou tratado com o respeito que mereço.",
  },
  {
    id: 15,
    question:
      "Ao observar crianças recebendo cuidados que você não teve, como você se sente?",
    image: "icones/18.png",
    options: [
      "Melancólico",
      "Com um sentimento de perda",
      "Ressentido",
      "Não sinto que me faltou algo",
    ],
  },
  {
    id: 16,
    question:
      "Você já se viu lutando contra o medo de ser avaliado negativamente ou rejeitado por outros?",
    image: "icones/19.png",
    options: ["Sim, frequentemente", "Raramente ou nunca", "Não estou certo"],
  },
  {
    id: 17,
    question: "Quanto esta afirmação se aplica a você?",
    image: "icones/20.png",
    options: [
      "Aplica-se totalmente",
      "Aplica-se parcialmente",
      "Aplica-se pouco",
      "Não se aplica",
    ],
    citation:
      "Percebo uma defasagem entre o que sinto e minha capacidade de expressar esses sentimentos.",
  },
  {
    id: 18,
    question: "Você enfrenta desafios relacionados à autoestima?",
    image: "icones/21.png",
    options: ["Sim, frequentemente", "Raramente ou nunca", "Não estou certo"],
  },
  {
    id: 19,
    question:
      "Quais aspectos da sua vida você espera melhorar ao lidar com experiências passadas difíceis?",
    image: "icones/5.png",
    options: [
      "Relacionamentos amorosos",
      "Bem-estar emocional geral",
      "Habilidades de comunicação",
      "Desempenho profissional",
      "Relações familiares",
      "Estabelecimento de limites saudáveis",
      "Autoaceitação",
    ],
    isMultipleChoice: true,
  },
  {
    id: 20,
    question:
      "Quanto tempo você estaria disposto a investir em um processo de cura emocional?",
    image: "icones/7.png",
    options: [
      "Algumas semanas",
      "1-2 meses",
      "3-6 meses",
      "Mais de 6 meses",
      "Não estou interessado no momento",
    ],
  },
  {
    id: 21,
    question:
      "Você tende a evitar certos lugares, pessoas ou atividades que o fazem lembrar de experiências passadas difíceis?",
    image: "icones/10.png",
    options: ["Sim, frequentemente", "Raramente ou nunca"],
  },
  {
    id: 22,
    question: "Você frequentemente se sente em estado de alerta ou ansiedade?",
    image: "icones/15.png",
    options: ["Sim, na maior parte do tempo", "Não, raramente"],
  },
  {
    id: 23,
    question:
      "Você notou mudanças significativas em seus hábitos alimentares quando está sob estresse?",
    image: "icones/8.png",
    options: [
      "Sim, percebo mudanças claras",
      "Não, meus hábitos permanecem estáveis",
    ],
  },
];
