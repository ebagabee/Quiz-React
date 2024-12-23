export default function ResultsCard({ timeLeft }) {
  return (
    <div className="bg-[#2A2A35] p-6 rounded-xl">
      <p className="text-gray-300 mb-4">
        Seus resultados e plano personalizado foram reservados pelos próximos 15
        minutos.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-4xl font-bold">:</div>
          <div className="text-4xl font-bold">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="flex flex-col text-xs text-gray-400 ml-1"></div>
        </div>
        <button className="bg-[#4CD4C0] px-6 py-2 rounded-full text-sm font-semibold">
          Obter meu plano
        </button>
      </div>
    </div>
  );
}
