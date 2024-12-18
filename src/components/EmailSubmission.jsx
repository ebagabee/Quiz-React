import React, { useState } from 'react';

const EmailSubmission = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email);
    };

    return (
        <div className="w-full max-w-md text-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-teal-400">Obrigado por completar o quiz!</h2>
            <p className="mb-6 text-gray-300">
                Gostaríamos de enviar seus resultados e algumas dicas personalizadas para o seu e-mail.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu endereço de e-mail"
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-full transition duration-300"
                >
                    Enviar Resultados
                </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
                Nós respeitamos sua privacidade e não compartilharemos seu e-mail com terceiros.
            </p>
        </div>
    );
};

export default EmailSubmission;
