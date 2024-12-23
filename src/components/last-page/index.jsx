import { useState, useEffect } from "react";
import ResultsCard from "./results-card";
import JourneyGraph from "./journey-graph";
import TrialTimeline from "./trial-timeline";

export default function TrialPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 45 });
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      title: "Teste de 7 dias",
      pricePerDay: 1.43,
      totalPrice: 10.0,
      description: "Experimente como nosso teste pode transformar sua vida",
    },
    {
      id: 2,
      title: "Plano de 4 semanas",
      pricePerDay: 0.99,
      totalPrice: 29.99,
      description: "Compromisso de um mês para mudança profunda",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-[#1C1C25] text-white p-4 max-w-md mx-auto">
      <ResultsCard timeLeft={timeLeft} />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Sua Jornada de Transformação Pessoal
        </h2>

        {/* Planos de Preço */}
        <div className="space-y-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handlePlanSelect(plan)}
              className={`
                border-2 rounded-lg p-4 cursor-pointer transition-all duration-300
                ${
                  selectedPlan?.id === plan.id
                    ? "border-[#4CD4C0] bg-[#2A2A35]"
                    : "border-gray-700 hover:border-gray-500"
                }
              `}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{plan.title}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">
                    R${plan.pricePerDay.toFixed(2)}/dia
                  </div>
                  <div className="text-sm text-blue-400">
                    Cobrado R${plan.totalPrice.toFixed(2)}
                  </div>
                </div>
              </div>
              {selectedPlan?.id === plan.id && (
                <div className="mt-2 text-[#4CD4C0] text-sm">
                  Plano selecionado ✓
                </div>
              )}
            </div>
          ))}
        </div>

        <JourneyGraph />
        <TrialTimeline />
      </div>

      <button
        disabled={!selectedPlan}
        className={`
          w-full rounded-full py-4 mt-8 font-semibold transition-all duration-300
          ${
            selectedPlan
              ? "bg-[#4CD4C0] text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }
        `}
      >
        {selectedPlan
          ? `Continuar com ${selectedPlan.title}`
          : "Selecione um plano"}
      </button>

      <p className="text-center mt-4 text-sm text-gray-400">
        Capacite sua jornada de transformação
      </p>
    </div>
  );
}
