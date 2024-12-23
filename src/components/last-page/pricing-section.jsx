export default function PricingSection() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Total hoje</h3>
      <div className="border-t border-b border-gray-700 py-4">
        <div className="flex justify-between items-center mb-2">
          <span>Teste de 7 dias</span>
          <div className="text-right">
            <div>$1.43/dia</div>
            <div className="text-sm text-blue-400">Cobrado $10.00</div>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Você terá 7 dias completos para experimentar como o Teste pode
          melhorar sua vida.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Preço após o teste</h3>
        <div className="flex justify-between items-center">
          <span>Plano de 4 semanas</span>
          <div className="text-right">
            <div>$0.99/dia</div>
            <div className="text-sm text-blue-400">Cobrado $29.99/mês</div>
          </div>
        </div>
      </div>

      <button className="w-full bg-[#4CD4C0] text-white rounded-full py-4 mt-8 font-semibold">
        Obter meu resultado e plano
      </button>
    </div>
  );
}
