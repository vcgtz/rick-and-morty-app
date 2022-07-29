import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import CharacterList from './CharacterList.jsx';
import Header from './Header.jsx';
import NotFoundMessage from './NotFoundMessage.jsx';
import Paginator from './Paginator.jsx';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [navigation, setNavigation] = useState({ prev: null, next: null });
  const [showCharacterList, setShowCharacterList] = useState(true);

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
    
    try {
      const res = await fetch(url);
      const json = await res.json();

      setShowLoading(false);
      setNavigation({ prev: json.info.prev, next: json.info.next });
      setCharacters(json.results);
      setShowCharacterList(true);
    } catch (err) {
      setShowLoading(false);
      setShowCharacterList(false);
    }
  };

  return (
    <div>
      <Header onClick={requestCharacters} showLoading={showLoading} />
      {(
        showCharacterList ?
        <CharacterList characters={characters} /> :
        <NotFoundMessage />
      )}
      <Paginator
        navigation={navigation}
        showCharacterList={showCharacterList}
        onClick={requestCharacters} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
