import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => (
    <div className="w-full max-w-md mx-auto mb-8">
        <div className="relative">
            <div className="text-teal-400 text-sm mb-2">Seu histórico</div>
            <div className="h-1 bg-gray-700 rounded">
                <div
                    className="h-full bg-teal-400 rounded transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                />
            </div>
            <div className="flex justify-between mt-1">
                {[1, 2, 3, 4].map((step) => (
                    <div
                        key={step}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
              ${step <= Math.ceil(((currentStep + 1) / totalSteps) * 4)
                                ? 'bg-teal-400 text-gray-900'
                                : 'bg-gray-700 text-gray-400'
                            }`}
                    >
                        {step}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProgressBar;