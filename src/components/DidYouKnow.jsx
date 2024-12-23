const DidYouKnow = ({ title, description, icon, onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#1a0a2e] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-6">
        {icon && (
          <div className="relative w-32 h-32 mx-auto">
            <img
              src={icon}
              alt="Info icon"
              className="w-full h-full object-contain"
            />
            <div
              className="absolute -top-2 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-0 left-[60%] w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="absolute -top-1 left-[40%] w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        )}

        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
          Você sabia?
        </h2>

        <div className="space-y-4 text-center">
          <p className="text-xl text-white leading-relaxed">{title}</p>

          <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#4CD4C0] hover:bg-[#3bc3af] text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 mt-8"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default DidYouKnow;
