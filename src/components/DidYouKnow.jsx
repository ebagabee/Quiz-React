import React from 'react';

const DidYouKnow = ({ title, description, icon, onNext }) => {
    return (
        <div className="w-full max-w-md text-center">
            {icon && (
                <div className="mb-8">
                    <img src={icon} alt="Info icon" className="w-24 h-24 mx-auto" />
                </div>
            )}

            <h2 className="text-3xl font-bold mb-4">
                Você sabia?
            </h2>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>

            <button
                onClick={onNext}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300"
            >
                Próximo
            </button>
        </div>
    );
};

export default DidYouKnow;
