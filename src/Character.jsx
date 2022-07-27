const Character = ({ info }) => {
  const { id, name, status, species, gender, origin, location, image } = info;

  const getGenderIcon = () => {
    const genderList = {
      Male: '🚹',
      Female: '🚺',
      Genderless: '☮️',
      unknown: '❓',
    };

    return genderList[gender];
  };

  const getStatusIcon = () => {
    const statusList = {
      Alive: '🟢',
      Dead: '🔴',
      unknown: '🟤',
    };

    return statusList[status];
  };

  return (
    <div className="rounded-md border border-gray-400 flex items-stretch my-2 bg-white">
      <img className="w-36 h-36 rounded-l-md" src={image} alt={name} />
      <div className="p-2 w-full">
        <div className="grid grid-cols-1">
          <p className="text-lg font-bold">
            <span className="text-gray-300 font-normal">#{id}</span> {name}
          </p>
          <p>
            {getStatusIcon()} {status}
          </p>
          <p>
            {getGenderIcon()} {gender}
          </p>
          <p>
            {species} from{' '}
            <span className="text-orange-400">{origin.name}</span>
          </p>
          <p>
            Last Location:{' '}
            <span className="text-orange-400">{location.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
