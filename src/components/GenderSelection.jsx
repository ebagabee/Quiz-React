const GenderSelection = ({ onSelect }) => {
  return (
    <div className="w-full max-w-md text-center">
      <div className="mb-8">
        <img className="w-60 h-60 mx-auto" src="gender.png" />
      </div>
      <h2 className="text-2xl font-bold mb-6">
        Qual é a sua identidade de gênero?
      </h2>
      <p className="mt-4 text-sm text-gray-400">
        <span className="cursor-pointer text-teal-500 hover:text-teal-400">
          Por que perguntamos isso?
        </span>
      </p>
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => onSelect("Masculino")}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Masculino
        </button>
        <button
          onClick={() => onSelect("Feminino")}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Feminino
        </button>
        <button
          onClick={() => onSelect("Outro")}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          Outro
        </button>
      </div>
    </div>
  );
};

export default GenderSelection;
