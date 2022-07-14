import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import CharacterList from './CharacterList.jsx';
import Header from './Header.jsx';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    requestCharacters();
  }, []);

  const requestCharacters = async (filters = {}) => {
    setShowLoading(true);

    let searchString = '';
    if (Object.keys(filters).length) {
      searchString = `?${new URLSearchParams(filters)}`;
    }

    const res = await fetch(`https://rickandmortyapi.com/api/character${searchString}`);
    const json = await res.json();

    setShowLoading(false);
    setCharacters(json.results);
  };

  return (
    <div>
      <Header onClick={requestCharacters} showLoading={showLoading} />
      <CharacterList characters={characters} />
    </div>
  )
};

render(<App />, document.getElementById('root'));
