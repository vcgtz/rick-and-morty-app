const Paginator = ({ navigation, onClick }) => {
  const { prev, next } = navigation;

  const handleNextClick = () => {
    if (!next) {
      return;
    }

    onClick({}, next);
  };

  const handlePrevClick = () => {
    if (!prev) {
      return;
    }

    onClick({}, prev);
  };

  return (
    <div className="flex justify-center my-4">
      <button
        disabled={!prev}
        onClick={handlePrevClick}
        className={`mx-4 font-bold text-cyan-500 border bg-white rounded-sm p-2 active:bg-gray-100 active:border-cyan-500 ${!prev ? 'cursor-not-allowed text-gray-200' : ''}`}>
        Prev
      </button>
      <button
        disabled={!next}
        onClick={handleNextClick}
        className={`mx-4 font-bold text-cyan-500 border bg-white rounded-sm p-2 active:bg-gray-100 active:border-cyan-500${!next ? 'cursor-not-allowed text-gray-200' : ''}`}>
        Next
      </button>
    </div>
  )
};

export default Paginator;
