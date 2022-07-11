import { render } from 'react-dom';
import CharacterList from './CharacterList.jsx';

const App = () => (
  <div>
    <h1 className="text-lg">Rick & Morty App</h1>
    <CharacterList />
  </div>
);

render(<App />, document.getElementById('root'));
