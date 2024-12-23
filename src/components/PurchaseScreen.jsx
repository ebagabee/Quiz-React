export default function PurchaseScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-slate-900 text-white rounded-md shadow-lg space-y-6">
      <div className="text-center text-sm bg-purple-700 px-4 py-2 rounded-md">
        Oferta de teste de 7 dias expira em 11:45
      </div>

      <div className="bg-slate-800 rounded-md p-6 space-y-6 w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          Como funciona o seu período de teste
        </h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-green-400">✓</div>
            <div>
              <strong>Inscreva-se</strong>
              <br />
              Você iniciou sua jornada para se tornar uma pessoa mais focada e
              feliz.
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="text-green-400">✓</div>
            <div>
              <strong>Hoje</strong>
              <br />
              Aproveite o acesso completo a todos os conteúdos premium.
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="text-green-400">✓</div>
            <div>
              <strong>Dia 5</strong>
              <br />
              Lembraremos você sobre o fim do período de teste. Cancele a
              qualquer momento com apenas alguns cliques.
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="text-green-400">✓</div>
            <div>
              <strong>Dia 7</strong>
              <br />
              Seu teste será convertido em uma assinatura completa, a menos que
              seja cancelada.
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 space-y-4">
          <div className="flex justify-between items-center">
            <div>Teste de 7 dias</div>
            <div className="text-right">
              <div className="text-sm">R$1,43 / por dia</div>
              <div className="text-xs text-gray-400">Cobrado R$10,00</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Você terá 7 dias completos para experimentar como o teste pode
            melhorar sua vida.
          </p>

          <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
            <div>Plano de 4 semanas</div>
            <div className="text-right">
              <div className="text-sm">R$0,99 / por dia</div>
              <div className="text-xs text-gray-400">Cobrado R$29,99/mês</div>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-full">
        Obter meu resultado e plano
      </button>
    </div>
  );
}
