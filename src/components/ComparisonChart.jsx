import React from 'react';

const ComparisonChart = () => {
    const metrics = [
        { label: 'Sono', before: 30, after: 70 },
        { label: 'Relacionamentos', before: 20, after: 60 },
        { label: 'Saúde', before: 40, after: 80 },
        { label: 'Auto-aceitação', before: 35, after: 85 }
    ];

    return (
        <div className="p-6 text-white">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-400 rounded"></div>
                        <span className="text-sm text-gray-300">Antes do tratamento</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-400 rounded"></div>
                        <span className="text-sm text-gray-300">Após o tratamento</span>
                    </div>
                </div>

                <div className="space-y-6">
                    {metrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-sm text-gray-300">{metric.label}</div>
                            <div className="flex gap-2 h-8">
                                <div
                                    className="bg-orange-400 rounded transition-all duration-1000"
                                    style={{ width: `${metric.before}%` }}
                                ></div>
                                <div
                                    className="bg-blue-400 rounded transition-all duration-1000"
                                    style={{ width: `${metric.after}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComparisonChart;

