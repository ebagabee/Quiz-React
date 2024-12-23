import { useState, useEffect } from "react";
import ResultsCard from "./results-card";
import JourneyGraph from "./journey-graph";
import TrialTimeline from "./trial-timeline";
import PricingSection from "./pricing-section";

export default function TrialPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 45 });

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

  return (
    <div className="min-h-screen bg-[#1C1C25] text-white p-4 max-w-md mx-auto">
      <ResultsCard timeLeft={timeLeft} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Risco leve de trauma na infância
        </h2>
        <div className="space-y-6 opacity-20">
          {/* Blurred content sections */}
          <div className="h-12 bg-gray-800 rounded"></div>
          <div className="h-12 bg-gray-800 rounded"></div>
          <div className="h-12 bg-gray-800 rounded"></div>
          <div className="h-12 bg-gray-800 rounded"></div>
        </div>
      </div>
      <button className="w-full bg-[#4CD4C0] text-white rounded-full py-4 mt-8 font-semibold">
        Obter meu resultado e plano
      </button>
      <p className="text-center mt-4 text-sm text-gray-400">
        para capacitar sua jornada de cura
      </p>
      <JourneyGraph />
      <TrialTimeline />
      <PricingSection />
    </div>
  );
}
