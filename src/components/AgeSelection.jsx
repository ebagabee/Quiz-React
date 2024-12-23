const AgeSelection = ({ onSelect }) => {
  const ageRanges = [
    "18-21",
    "22-25",
    "26-30",
    "31-35",
    "36-40",
    "41-45",
    "46-50",
    "51-55",
    "56-60",
    "61-65",
    "66-70",
    "70+",
  ];

  return (
    <div className="w-full max-w-md text-center">
      <div className="mb-8">
        <img className="w-52 h-52 mx-auto" src="age.png" />
      </div>
      <h2 className="text-2xl font-bold mb-6">Escolha sua faixa etária</h2>
      <div className="grid grid-cols-2 gap-4">
        {ageRanges.map((range) => (
          <button
            key={range}
            onClick={() => onSelect(range)}
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-2xl transition duration-300"
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeSelection;
