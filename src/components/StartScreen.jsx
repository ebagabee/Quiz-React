import React from 'react';

const StartScreen = ({ startQuiz }) => (
    <main className="w-full max-w-md text-center">
        <div className="mb-8">
            <span className="text-4xl">🌱</span>
        </div>

        <h1 className="text-3xl font-bold mb-4">
            Supere o trauma da infância
        </h1>

        <p className="text-gray-400 mb-8">
            Descubra seu nível de trauma e aprenda a seguir em frente com confiança
        </p>

        <button
            onClick={startQuiz}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
            Iniciar Questionário
        </button>

        <div className="mt-8 mb-8">
            <div className="w-32 h-32 mx-auto bg-blue-500 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-green-400 rounded-full transform translate-x-1/3"></div>
                <div className="absolute top-0 right-0 text-yellow-300 text-2xl">✨</div>
            </div>
        </div>
    </main>
);

export default StartScreen;