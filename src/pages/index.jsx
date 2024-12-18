import React, { useState } from 'react';
import StartScreen from '../components/StartScreen';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import QuizScreen from '../components/QuizScreen';
import DidYouKnow from '../components/DidYouKnow';
import EmailSubmission from '../components/EmailSubmission';
import GenderSelection from '../components/GenderSelection';
import AgeSelection from '../components/AgeSelection';

const questions = [
    {
        id: 1,
        question: "Quais memórias da sua infância são predominantes?",
        image: "vite.svg",
        options: [
            "Positivas",
            "Negativas",
            "Não me lembro da minha infância",
            "Não tenho certeza"
        ],
        isMultipleChoice: false
    },
    {
        id: 2,
        question: "Como você pode descrever o ambiente em que você cresceu?",
        options: [
            "Acolhedor e solidário",
            "Caótico e imprevisível",
            "Instável e inseguro",
            "Desafiador e exigente",
            "Dificuldades econômicas e escassez",
            "Negligente e solitário"
        ],
        isMultipleChoice: true,
        hint: "Selecione quantas opções quiser"
    },
    {
        id: 3,
        question: "Como você lida com emoções difíceis?",
        citation: "Eu tendo a...",
        image: "vite.svg",
        options: [
            "Me isolar",
            "Buscar apoio",
            "Praticar mindfulness",
            "Ignorar os sentimentos"
        ],
        figures: [
            "vite.svg",
            "vite.svg",
            "vite.svg",
            "vite.svg"
        ],
        isMultipleChoice: false
    },
    {
        id: 4,
        question: "Você tem dificuldade em confiar nas pessoas?",
        options: ["Sim", "Não", "Às vezes"],
        isMultipleChoice: false
    },
    {
        id: 5,
        question: "Quais dessas situações te deixam ansioso?",
        options: [
            "Falar em público",
            "Conhecer novas pessoas",
            "Tomar decisões importantes",
            "Ficar sozinho",
            "Multidões"
        ],
        isMultipleChoice: true,
        hint: "Selecione todas que se aplicam",
    },
    {
        id: 6,
        question: "Como você descreveria seu relacionamento com seus pais na infância?",
        options: [
            "Próximo e afetuoso",
            "Distante",
            "Conflituoso",
            "Inconsistente",
            "Não me lembro"
        ],
        isMultipleChoice: false
    },
    {
        id: 7,
        question: "Você já experimentou algum desses sintomas de forma recorrente?",
        options: [
            "Insônia",
            "Ataques de pânico",
            "Pensamentos obsessivos",
            "Mudanças bruscas de humor",
            "Fadiga constante"
        ],
        isMultipleChoice: true,
        hint: "Marque todos que se aplicam"
    },
    {
        id: 8,
        question: "Como você lida com o estresse?",
        options: [
            "Exercícios físicos",
            "Meditação",
            "Hobbies criativos",
            "Conversando com amigos",
            "Evito pensar nisso"
        ],
        isMultipleChoice: false,
        afterDidYouKnow: true,
    },
    {
        id: 9,
        question: "Você já buscou ajuda profissional para sua saúde mental?",
        options: ["Sim, regularmente", "Sim, no passado", "Não, mas considero", "Não, nunca considerei"],
        isMultipleChoice: false
    },
    {
        id: 10,
        question: "Quais dessas experiências você vivenciou na infância?",
        options: [
            "Bullying na escola",
            "Mudanças frequentes de casa/escola",
            "Perda de um ente querido",
            "Divórcio dos pais",
            "Problemas financeiros na família"
        ],
        isMultipleChoice: true,
        hint: "Selecione todas que se aplicam"
    },
    {
        id: 11,
        question: "Como você se sente em relação ao futuro?",
        options: ["Otimista", "Pessimista", "Ansioso", "Indiferente", "Esperançoso"],
        isMultipleChoice: false
    },
    {
        id: 12,
        question: "Quais dessas atividades te ajudam a se sentir melhor?",
        options: [
            "Ler um livro",
            "Assistir a um filme",
            "Praticar esportes",
            "Cozinhar",
            "Passar tempo na natureza"
        ],
        isMultipleChoice: true,
        hint: "Escolha todas que se aplicam"
    },
    {
        id: 13,
        question: "Você tem dificuldade em expressar seus sentimentos?",
        options: ["Sim, sempre", "Às vezes", "Raramente", "Não"],
        isMultipleChoice: false
    },
    {
        id: 14,
        question: "Como você reage quando algo não sai como planejado?",
        options: [
            "Fico frustrado facilmente",
            "Tento encontrar uma solução alternativa",
            "Peço ajuda a alguém",
            "Desisto e mudo de planos"
        ],
        isMultipleChoice: false
    },
    {
        id: 15,
        question: "Quais desses comportamentos você reconhece em si mesmo?",
        options: [
            "Perfeccionismo",
            "Procrastinação",
            "Autocrítica excessiva",
            "Dificuldade em dizer 'não'",
            "Comparação constante com os outros"
        ],
        isMultipleChoice: true,
        hint: "Selecione todos que se aplicam",
        afterDidYouKnow: true,
    },
    {
        id: 16,
        question: "Como você lida com a solidão?",
        options: [
            "Busco interação social",
            "Aproveito o tempo sozinho",
            "Me sinto desconfortável e ansioso",
            "Tento me manter ocupado constantemente"
        ],
        isMultipleChoice: false
    },
    {
        id: 17,
        question: "Você já experimentou sensação de desrealização ou despersonalização?",
        options: ["Frequentemente", "Ocasionalmente", "Raramente", "Nunca", "Não tenho certeza"],
        isMultipleChoice: false
    },
    {
        id: 18,
        question: "Quais dessas estratégias você usa para lidar com pensamentos negativos?",
        options: [
            "Praticar gratidão",
            "Questionar a validade dos pensamentos",
            "Distrair-me com atividades",
            "Conversar com alguém sobre eles",
            "Tentar ignorá-los"
        ],
        isMultipleChoice: true,
        hint: "Escolha todas que você utiliza"
    },
    {
        id: 19,
        question: "Como você descreveria sua autoestima?",
        options: ["Muito baixa", "Baixa", "Média", "Alta", "Muito alta"],
        isMultipleChoice: false
    },
    {
        id: 20,
        question: "Quais dessas áreas da sua vida você gostaria de melhorar?",
        options: [
            "Relacionamentos",
            "Carreira",
            "Saúde física",
            "Saúde mental",
            "Finanças",
            "Desenvolvimento pessoal"
        ],
        isMultipleChoice: true,
        hint: "Selecione todas as áreas relevantes",
        afterDidYouKnow: true,
    },
    {
        id: 21,
        question: "Você acredita que suas experiências passadas influenciam seu comportamento atual?",
        options: ["Muito", "Um pouco", "Não muito", "Não sei dizer"],
        isMultipleChoice: false
    }
];


const didYouKnowScreens = [
    {
        title: "Trauma infantil tem diferentes efeitos mentais em cada gênero",
        description: "É por isso que criar um plano de tratamento personalizado é fundamental para abordar os desafios únicos de cada indivíduo.",
        icon: "vite.svg"
    },
    {
        title: "O estresse crônico pode afetar a saúde física",
        description: "Técnicas de gerenciamento de estresse, como meditação e exercícios, podem melhorar tanto a saúde mental quanto a física.",
        icon: "vite.svg"
    },
    {
        title: "A autoconsciência é chave para o crescimento pessoal",
        description: "Reconhecer padrões de comportamento é o primeiro passo para desenvolver estratégias de enfrentamento mais saudáveis.",
        icon: "vite.svg"
    },
    {
        title: "Nossas experiências moldam nossa percepção do mundo",
        description: "Compreender como o passado influencia o presente pode nos ajudar a fazer escolhas mais conscientes no futuro.",
        icon: "vite.svg"
    },
    {
        title: "A terapia pode beneficiar qualquer pessoa",
        description: "Buscar ajuda profissional não é apenas para crises, mas também para crescimento pessoal e bem-estar geral.",
        icon: "vite.svg"
    }
];



export default function Home() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [currentDidYouKnow, setCurrentDidYouKnow] = useState(null);
    const [didYouKnowIndex, setDidYouKnowIndex] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState(null);

    const startQuiz = () => {
        setIsQuizStarted(true);
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
    };

    const handleAgeSelect = (selectedAge) => {
        setAge(selectedAge);
        setCurrentQuestion(0);
    };

    const handleAnswer = (answer) => {
        const newAnswer = {
            questionId: questions[currentQuestion].id,
            answer: Array.isArray(answer) ? answer : [answer],
        };

        setAnswers([...answers, newAnswer]);

        if (questions[currentQuestion].afterDidYouKnow && didYouKnowIndex < didYouKnowScreens.length) {
            setCurrentDidYouKnow(didYouKnowScreens[didYouKnowIndex]);
            setDidYouKnowIndex(didYouKnowIndex + 1);
        } else if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleDidYouKnowNext = () => {
        setCurrentDidYouKnow(null);
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleEmailSubmit = (email) => {
        console.log('Enviando resultados para:', email);
        console.log('Respostas:', answers);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
            {!isQuizStarted ? (
                <>
                    <StartScreen startQuiz={startQuiz} />
                    <Footer />
                </>
            ) : isQuizFinished ? (
                <EmailSubmission onSubmit={handleEmailSubmit} />
            ) : gender === null ? (
                <GenderSelection onSelect={handleGenderSelect} />
            ) : age === null ? (
                <AgeSelection onSelect={handleAgeSelect} />
            ) : currentDidYouKnow ? (
                <DidYouKnow
                    title={currentDidYouKnow.title}
                    description={currentDidYouKnow.description}
                    icon={currentDidYouKnow.icon}
                    onNext={handleDidYouKnowNext}
                />
            ) : (
                <>
                    <ProgressBar currentStep={currentQuestion} totalSteps={questions.length} />
                    <QuizScreen
                        currentQuestion={currentQuestion}
                        questions={questions}
                        handleAnswer={handleAnswer}
                    />
                </>
            )}
        </div>
    );
}