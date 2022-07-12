const Character = (props) => {
  const { id, name, status, species, gender, origin, location, image } = props.info;

  const getGenderIcon = () => {
    const genderList = {
      'Male': '🚹',
      'Female': '🚺',
      'Genderless': '☮️',
      'unknown': '❓'
    };

    return genderList[gender];
  };

  const getStatusIcon = () => {
    const statusList = {
      'Alive': '🟢',
      'Dead': '🔴',
      'unknown': '🟤'
    }

    return statusList[status];
  }

  return (
    <div className="rounded-md border-2 flex items-stretch my-2">
      <img
        className="w-36 h-36 rounded-l-md"
        src={image}
        alt={name} />
       <div className="p-2 w-full">
        <div className="grid grid-cols-1">
          <p className="text-lg font-bold">
            <span className="text-gray-300 font-normal">#{id}</span> {name}
          </p>
          <p>{getStatusIcon()} {status}</p>
          <p>{getGenderIcon()} {gender}</p>
          <p>{species} from <a className="text-orange-400" href="#">{origin.name}</a></p>
          <p>Last Location: <a className="text-orange-400" href="#">{location.name}</a></p>
        </div>
       </div>
    </div>
  )
}

export default Character;
