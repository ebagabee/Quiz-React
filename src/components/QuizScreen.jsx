import React from 'react';
import QuestionTemplate from './QuestionTemplate';

const QuizScreen = ({ currentQuestion, questions, handleAnswer }) => {
    const question = questions[currentQuestion];

    return (
        <div className="w-full max-w-md">
            <QuestionTemplate
                question={question.question}
                image={question.image}
                options={question.options}
                isMultipleChoice={question.isMultipleChoice}
                onAnswer={handleAnswer}
                figures={question.figures}
                citation={question.citation}
            />
        </div>
    );
};

export default QuizScreen;