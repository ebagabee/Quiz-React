import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const renderStepLabel = () => {
    if (currentStep < 8) {
      return (
        <span className="absolute left-16 transform -translate-x-1/2 -top-3 font-light text-xs text-green-400">
          Sua História
        </span>
      );
    } else if (currentStep >= 8 && currentStep < 13) {
      return (
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 font-light text-xs text-green-400">
          Tendências
        </span>
      );
    } else {
      return (
        <span className="absolute right-0 transform -translate-x-1/2 -top-3 font-light text-xs text-green-400">
          Sinais de Luta
        </span>
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8 relative">
      {renderStepLabel()}
      <div className="relative">
        <div className="relative h-6">
          <div className="absolute top-1/2 w-full h-1 bg-gray-700 rounded transform -translate-y-1/2">
            <div
              className="h-full bg-teal-400 rounded transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                                    ${
                                      step <=
                                      Math.ceil(
                                        ((currentStep + 1) / totalSteps) * 4
                                      )
                                        ? "bg-teal-400 text-gray-900"
                                        : "bg-gray-700 text-gray-400"
                                    }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
