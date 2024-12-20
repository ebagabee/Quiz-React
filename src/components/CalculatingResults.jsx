import React, { useState, useEffect } from "react";

const CalculatingResults = () => {
  const [progress, setProgress] = useState({
    ambiente: 0,
    sintomas: 0,
    trauma: 0,
    estatisticas: 0,
    plano: 0,
  });

  const steps = [
    {
      key: "ambiente",
      label: "Analisando seu ambiente familiar",
      color: "bg-blue-500",
    },
    {
      key: "sintomas",
      label: "Estudando seus sintomas principais",
      color: "bg-purple-500",
    },
    {
      key: "trauma",
      label: "Avaliando riscos de trauma infantil",
      color: "bg-green-500",
    },
    {
      key: "estatisticas",
      label: "Preparando estatísticas e resultados detalhados",
      color: "bg-red-500",
    },
    {
      key: "plano",
      label: "Desenvolvendo um plano de cura personalizado",
      color: "bg-indigo-500",
    },
  ];

  useEffect(() => {
    // Simular progresso
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev.ambiente < 100) {
          return { ...prev, ambiente: Math.min(prev.ambiente + 1, 100) };
        }
        if (prev.sintomas < 100) {
          return { ...prev, sintomas: Math.min(prev.sintomas + 1, 100) };
        }
        if (prev.trauma < 100) {
          return { ...prev, trauma: Math.min(prev.trauma + 1, 100) };
        }
        if (prev.estatisticas < 100) {
          return {
            ...prev,
            estatisticas: Math.min(prev.estatisticas + 1, 100),
          };
        }
        if (prev.plano < 100) {
          return { ...prev, plano: Math.min(prev.plano + 1, 100) };
        }
        return prev;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-center mb-8 animate-pulse">
          Calculando seus resultados...
        </h1>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.key} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-300">{step.label}</span>
                <span className="text-sm text-gray-400">
                  {progress[step.key]}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${step.color} transition-all duration-300 ease-out`}
                  style={{ width: `${progress[step.key]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2 pt-8">
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300">Excelente</p>
          <p className="text-sm text-gray-400">
            4.8 baseado em 27.000 avaliações
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg text-center space-y-4">
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg">
            "O App me proporcionou um espaço seguro para explorar e entender meu
            verdadeiro eu."
          </p>
          <p className="text-sm text-gray-400">Lucas, 24, São Paulo</p>
        </div>
      </div>
    </div>
  );
};

export default CalculatingResults;
