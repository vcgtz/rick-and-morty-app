const SearchBar = () => {
  return (
    <div className="flex">
      <input
        className="border rounded-sm w-full text-xl font-thin italic p-2 active:outline-cyan-500 focus-visible:outline-cyan-500"
        placeholder="Search characters"
        type="text" />
        <button className="text-xl border bg-white rounded-sm py-2 px-4 active:bg-gray-100 active:border-cyan-500">🔎</button>
    </div>
  )
};

export default SearchBar;
