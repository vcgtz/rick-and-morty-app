import { render } from 'react-dom';
import CharacterList from './CharacterList.jsx';
import Header from './Header.jsx';

const App = () => (
  <div>
    <Header />
    <CharacterList />
  </div>
);

render(<App />, document.getElementById('root'));
