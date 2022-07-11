const Character = () => {
  return (
    <div className="rounded-md border-2 flex">
      <img
        className="w-48 h-48 rounded-l-md"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez" />
       <div className="p-2 w-full">
        <div>
          <p>Rick Sanchez</p>
          <p>Alive</p>
          <p>Human</p>
          <p>Male</p>
        </div>
        <div className="grid grid-cols-2">
          <div>Origin: <a href="#">Earth (C-137)</a></div>
          <div>Location: <a href="#">Citadel of Ricks</a></div>
        </div>
       </div>
    </div>
  )
}

export default Character;
