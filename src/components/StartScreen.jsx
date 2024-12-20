import React from 'react';

const StartScreen = ({ startQuiz }) => (
    <main className="w-full max-w-md text-center">
        <div className="mb-8">
            <img src="start.png" alt="" />
        </div>

        <h1 className="text-3xl font-bold mb-4">
            Supere o trauma da infância
        </h1>

        <p className="text-gray-400 mb-8">
            Descubra seu nível de trauma e aprenda a seguir em frente com confiança
        </p>

        <button
            onClick={startQuiz}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300"
        >
            Iniciar Questionário
        </button>


    </main>
);

export default StartScreen;