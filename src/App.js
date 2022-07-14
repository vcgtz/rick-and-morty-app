import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import CharacterList from './CharacterList.jsx';
import Header from './Header.jsx';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    requestCharacters();
  }, []);

  const requestCharacters = async (filters = {}) => {
    let searchString = '';
    if (Object.keys(filters).length) {
      searchString = `?${new URLSearchParams(filters)}`;
    }

    const res = await fetch(`https://rickandmortyapi.com/api/character${searchString}`);
    const json = await res.json();

    setCharacters(json.results);
  };

  return (
    <div>
      <Header onClick={requestCharacters} />
      <CharacterList characters={characters} />
    </div>
  )
};

render(<App />, document.getElementById('root'));
