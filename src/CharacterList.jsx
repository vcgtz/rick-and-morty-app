import Character from './Character.jsx';

const CharacterList = ({ characters }) => {
  return (
    <div className="w-4/6 mx-auto">
      {characters.map((character) => (
        <Character info={character} key={character.id} />
      ))}
    </div>
  );
};

export default CharacterList;
