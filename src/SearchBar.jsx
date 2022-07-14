import { useState } from "react";

const SearchBar = ({ onClick }) => {
  const [characterName, setCharacterName] = useState('');

  const handleClick = () => {
    if (characterName) {
      onClick({name: characterName});
      return;
    }

    onClick();
  };

  return (
    <div className="flex">
      <input
        className="border rounded-sm w-full text-xl font-thin italic p-2 active:outline-cyan-500 focus-visible:outline-cyan-500"
        placeholder="Search by name"
        type="text"
        onChange={ (e) => setCharacterName(e.target.value) }
        onBlur={ (e) => setCharacterName(e.target.value) } />
        <button
          className="text-xl border bg-white rounded-sm py-2 px-4 active:bg-gray-100 active:border-cyan-500"
          onClick={ () => handleClick() }>🔎</button>
    </div>
  )
};

export default SearchBar;
