import React, { useState } from 'react';

const QuestionTemplate = ({ question, image, options, onAnswer, isMultipleChoice, citation, figures }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionClick = (option) => {
        if (isMultipleChoice) {
            setSelectedOptions(prev =>
                prev.includes(option)
                    ? prev.filter(item => item !== option)
                    : [...prev, option]
            );
        } else {
            onAnswer([option]);
        }
    };

    const handleSubmit = () => {
        if (isMultipleChoice) {
            onAnswer(selectedOptions);
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="mb-8 flex items-start justify-between">
                <div className="flex-grow mr-4">
                    <div className="flex items-center mb-2">
                        {citation ? <h2 className='text-2xl font-bold text-left mr-2'>{question} <span className='text-teal-400 italic'>"{citation}"</span></h2> :
                            <h2 className="text-2xl font-bold text-left mr-2">{question}</h2>}
                    </div>
                    {isMultipleChoice && (
                        <p className="text-sm text-gray-400 text-left">Escolha quantas opções quiser</p>
                    )}
                </div>
                {image && (
                    <img src={image} alt="Question illustration" className="w-12 h-12 flex-shrink-0" />
                )}
            </div>

            <div className={figures ? "grid grid-cols-2 gap-3" : "space-y-3"}>
                {options.map((option, index) => (
                    figures ? (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className={`bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 cursor-pointer p-4 flex flex-col items-center justify-center
                                ${isMultipleChoice && selectedOptions.includes(option) ? 'bg-teal-600' : ''}`}
                        >
                            {figures[index] && (
                                <img
                                    src={figures[index]}
                                    alt={`Option ${index + 1}`}
                                    className="w-16 h-16 mb-3 rounded"
                                />
                            )}
                            <span className="text-center">{option}</span>
                        </div>
                    ) : (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className={`w-full bg-gray-800 hover:bg-gray-700 py-3 px-4 rounded-lg transition duration-300 flex items-center cursor-pointer
                                ${isMultipleChoice && selectedOptions.includes(option) ? 'bg-teal-600' : ''}`}
                        >
                            {isMultipleChoice && (
                                <div className={`w-6 h-6 border-2 rounded mr-3 flex items-center justify-center
                                    ${selectedOptions.includes(option) ? 'border-white bg-teal-500' : 'border-gray-500'}`}>
                                    {selectedOptions.includes(option) && (
                                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    )}
                                </div>
                            )}
                            <span className="text-left flex-grow">{option}</span>
                        </div>
                    )
                ))}
            </div>

            {isMultipleChoice && (
                <button
                    onClick={handleSubmit}
                    className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300"
                >
                    Próximo
                </button>
            )}
        </div>
    );
};

export default QuestionTemplate;
