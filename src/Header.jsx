const { default: SearchBar } = require('./SearchBar');

const Header = (props) => {
  return (
    <header>
      <div className="w-4/6 mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-3xl my-4">
            <span className="text-cyan-500 font-bold">Rick and Morty</span>{' '}
            <span className="font-thin">Characters</span>
          </h1>
        </div>
        <div className="w-1/2">
          <SearchBar {...props} />
        </div>
      </div>
    </header>
  );
};

module.exports = Header;
