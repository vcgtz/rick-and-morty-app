import { useEffect, useState } from 'react';
import Character from "./Character.jsx";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    requestCharacters();
  }, []);

  const requestCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const json = await res.json();

    setCharacters(json.results);
  };

  return (
    <div className="w-1/2 mx-auto">
      {
        characters.map((character) => (
          <Character
            info={character}
            key={character.id} />
        ))
      }
    </div>
  );
};

export default CharacterList;
