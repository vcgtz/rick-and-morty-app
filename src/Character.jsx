const Character = () => {
  return (
    <div className="rounded-md border-2 flex items-stretch">
      <img
        className="w-36 h-36 rounded-l-md"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez" />
       <div className="p-2 w-full">
        <div className="grid grid-cols-1">
          <p className="text-lg font-bold">
            <span className="text-gray-300 font-normal">#1</span> Rick Sanchez
          </p>
          <p>🟢 Alive</p>
          <p>🚹 Male</p>
          <p>Human from <a className="text-orange-400" href="#">Earth (C-137)</a></p>
          <p>Last Location: <a className="text-orange-400" href="#">Citadel of Ricks</a></p>
        </div>
       </div>
    </div>
  )
}

export default Character;
