const Paginator = ({ navigation }) => {
  return (
    <div className="flex justify-center">
      <button className="text-base mx-4 border bg-white rounded-sm py-2 px-2 active:bg-gray-100 active:border-cyan-500">
        ◀
      </button>
      <button className="text-base mx-4 border bg-white rounded-sm py-2 px-2 active:bg-gray-100 active:border-cyan-500">
        ▶️
      </button>
    </div>
  )
};

export default Paginator;
