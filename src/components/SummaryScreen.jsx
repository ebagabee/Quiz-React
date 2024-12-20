import React from 'react';
import ComparisonChart from './ComparisonChart';

const SummaryScreen = ({ onContinue }) => {
    return (
        <div className="w-full text-white p-6">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold">
                        Efeito
                    </h1>
                    <p className="text-gray-300">
                        Visualize sua jornada de cura e transformação
                    </p>
                </div>

                <ComparisonChart />

                <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-medium text-blue-400">Harvard School of Public Health</h3>
                                <p className="text-sm text-gray-400">
                                    Relata que pessoas que experimentaram trauma na infância têm maior risco de problemas de saúde.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-teal-500/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-teal-500" />
                            </div>
                            <div>
                                <h3 className="font-medium text-teal-400">Centers for Disease Control and Prevention</h3>
                                <p className="text-sm text-gray-400">
                                    Indica que o trauma infantil pode impactar negativamente a educação, oportunidades de trabalho e potencial de ganhos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onContinue}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-full text-lg font-medium transition-all"
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default SummaryScreen;

