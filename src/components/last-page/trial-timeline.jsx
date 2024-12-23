export default function TrialTimeline() {
  const steps = [
    {
      title: "Cadastro no Teste",
      description: "Você iniciou sua jornada para um você mais focado e feliz",
      icon: "✓",
      active: true,
    },
    {
      title: "Hoje",
      description: "Aproveite acesso completo ao conteúdo premium",
      icon: "🔓",
      active: true,
    },
    {
      title: "Dia 5",
      description:
        "Lembrete sobre o fim do período de teste. Cancele a qualquer momento em segundos",
      icon: "🔔",
      active: false,
    },
    {
      title: "Dia 7",
      description:
        "Seu teste será convertido em preço integral a menos que seja cancelado",
      icon: "✓",
      active: false,
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-6">Como funciona seu teste</h3>
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="flex mb-8 relative">
            <div className="mr-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.active ? "bg-[#4CD4C0]" : "bg-gray-700"
                }`}
              >
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-8 bg-gray-700" />
              )}
            </div>
            <div>
              <h4
                className={`font-medium ${
                  step.title === "Cadastro no Teste" ? "line-through" : ""
                }`}
              >
                {step.title}
              </h4>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
