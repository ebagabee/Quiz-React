import { useState } from "react";
import StartScreen from "../components/StartScreen";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import QuizScreen from "../components/QuizScreen";
import DidYouKnow from "../components/DidYouKnow";
import EmailSubmission from "../components/EmailSubmission";
import GenderSelection from "../components/GenderSelection";
import AgeSelection from "../components/AgeSelection";
import { maleQuestion } from "../questions/maleQuestions";
import { femaleQuestion } from "../questions/femaleQuestion";
import { didYouKnowScreens } from "../questions/didYouKnowScreen";
import SummaryScreen from "../components/SummaryScreen";
import CalculatingResults from "../components/CalculatingResults";
import PurchaseScreen from "../components/PurchaseScreen";

export default function Home() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentDidYouKnow, setCurrentDidYouKnow] = useState(null);
  const [currentDidYouKnowIndex, setCurrentDidYouKnowIndex] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [showCalculating, setShowCalculating] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    if (selectedGender === "Masculino") {
      setQuestions(maleQuestion);
    } else if (selectedGender === "Feminino") {
      setQuestions(femaleQuestion);
    } else {
      setQuestions(maleQuestion);
    }
  };

  const handleAgeSelect = (selectedAge) => {
    setAge(selectedAge);
    setCurrentQuestion(0);
  };

  const moveToNextQuestion = (answer) => {
    let nextQuestionIndex = currentQuestion + 1;

    while (
      nextQuestionIndex < questions.length &&
      questions[nextQuestionIndex].conditionalShow &&
      !questions[nextQuestionIndex].conditionalShow(answer)
    ) {
      nextQuestionIndex++;
    }

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleAnswer = (answer) => {
    const newAnswer = {
      questionId: questions[currentQuestion].id,
      answer: Array.isArray(answer) ? answer : [answer],
    };

    setAnswers([...answers, newAnswer]);

    if (
      questions[currentQuestion].showDidYouKnow &&
      currentDidYouKnowIndex < didYouKnowScreens.length
    ) {
      setCurrentDidYouKnow(didYouKnowScreens[currentDidYouKnowIndex]);
      setCurrentDidYouKnowIndex(currentDidYouKnowIndex + 1);
    } else {
      moveToNextQuestion(answer);
    }
  };

  const handleDidYouKnowNext = () => {
    setCurrentDidYouKnow(null);
    moveToNextQuestion(answers[answers.length - 1].answer);
  };

  const handleEmailSubmit = (email) => {
    console.log("Enviando resultados para:", email);
    console.log("Respostas:", answers);
    setShowEmail(false);
    setShowPurchase(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 py-12">
      {!isQuizStarted ? (
        <>
          <StartScreen startQuiz={startQuiz} />
          <Footer />
        </>
      ) : isQuizFinished ? (
        showCalculating ? (
          <CalculatingResults />
        ) : showPurchase ? (
          <PurchaseScreen />
        ) : showEmail ? (
          <EmailSubmission onSubmit={handleEmailSubmit} />
        ) : showSummary ? (
          <SummaryScreen
            onContinue={() => {
              setShowCalculating(true);
              setTimeout(() => {
                setShowCalculating(false);
                setShowEmail(true);
              }, 30000);
            }}
          />
        ) : (
          <SummaryScreen
            onContinue={() => {
              setShowCalculating(true);
              setTimeout(() => {
                setShowCalculating(false);
                setShowEmail(true);
              }, 30000);
            }}
          />
        )
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
          <ProgressBar
            currentStep={currentQuestion}
            totalSteps={questions.length}
          />
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
