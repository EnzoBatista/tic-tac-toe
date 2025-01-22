import { useState } from 'react';

const Player = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handlerEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handlerOnChange = (event) => {
    console.log(event.target.value);
    setPlayerName(event.target.value);
  };

  const buttonTxt = isEditing ? 'Save' : 'Edit';

  return (
    <li className={isActive ? 'active' : ''}>
      <span className='player'>
        <span className='player-name'>
          {isEditing ? <input onChange={handlerOnChange} value={playerName} /> : playerName}
        </span>
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handlerEdit}>{buttonTxt}</button>
    </li>
  );
};
export default Player;
