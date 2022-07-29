const Paginator = ({ navigation, showCharacterList, onClick }) => {
  const { prev, next } = navigation;

  const handleNextClick = () => {
    if (!showCharacterList || !next) {
      return;
    }

    onClick({}, next);
  };

  const handlePrevClick = () => {
    if (!showCharacterList || !prev) {
      return;
    }

    onClick({}, prev);
  };

  return (
    <div className="flex justify-center my-4">
      <button
        disabled={!showCharacterList || !prev}
        onClick={handlePrevClick}
        className={`mx-4 font-bold text-cyan-500 border bg-white rounded-sm p-2 active:bg-gray-100 active:border-cyan-500 ${
          !showCharacterList || !prev ? 'cursor-not-allowed text-gray-200' : ''
        }`}
      >
        Prev
      </button>
      <button
        disabled={!showCharacterList || !next}
        onClick={handleNextClick}
        className={`mx-4 font-bold text-cyan-500 border bg-white rounded-sm p-2 active:bg-gray-100 active:border-cyan-500 ${
          !showCharacterList || !next ? 'cursor-not-allowed text-gray-200' : ''
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
