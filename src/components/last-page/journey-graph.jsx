export default function JourneyGraph() {
  return (
    <div className="mt-12 p-6 bg-gradient-to-br from-purple-600/20 to-teal-600/20 rounded-xl">
      <h2 className="text-xl font-semibold mb-6">
        Preparamos um plano personalizado para capacitar sua jornada de cura
      </h2>
      <div className="relative h-64">
        {/* Graph curves */}
        <svg className="w-full h-full" viewBox="0 0 300 200">
          <path
            d="M0,50 Q150,150 300,50"
            fill="none"
            stroke="#9F7AEA"
            strokeWidth="2"
          />
          <path
            d="M0,150 Q150,50 300,150"
            fill="none"
            stroke="#4CD4C0"
            strokeWidth="2"
          />
        </svg>

        {/* Labels */}
        <div className="absolute top-0 right-0 bg-gray-800/80 p-2 rounded">
          Auto-aceitação e paz interior
        </div>
        <div className="absolute bottom-0 right-0 bg-gray-800/80 p-2 rounded">
          Impacto do trauma
        </div>
        <div className="absolute bottom-0 left-0 text-sm">Você está aqui</div>
        <div className="absolute bottom-0 right-0 text-[#4CD4C0]">Dia 30</div>
      </div>
    </div>
  );
}
