import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import CharacterList from './CharacterList.jsx';
import Header from './Header.jsx';
import Paginator from './Paginator.jsx';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [navigation, setNavigation] = useState({ prev: null, next: null });

  useEffect(() => {
    requestCharacters();
  }, []);

  const requestCharacters = async (filters = {}, requestUrl = null) => {
    setShowLoading(true);

    let searchString = '';
    if (Object.keys(filters).length) {
      searchString = `?${new URLSearchParams(filters)}`;
    }

    const url =
      requestUrl || `https://rickandmortyapi.com/api/character${searchString}`;
    const res = await fetch(url);
    const json = await res.json();

    setNavigation({ prev: json.info.prev, next: json.info.next });
    setShowLoading(false);
    setCharacters(json.results);
  };

  return (
    <div>
      <Header onClick={requestCharacters} showLoading={showLoading} />
      <CharacterList characters={characters} />
      <Paginator navigation={navigation} onClick={requestCharacters} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
