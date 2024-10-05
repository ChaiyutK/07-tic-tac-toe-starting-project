import { useState } from "react";

export default function Player({ initialName, symbol , isActive}) {
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    /*
    if (isEditing === false) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
        we have shorther way below...   
    */

    setIsEditing((editing)=> !editing);
    //สำคัญต้องใช้ function ในการเปลี่ยนค่าบน state ถ้าอิงค่าจาก state เดิม!!!!
  }

 /* function handleChange(event){
    setPlayerName(event.target.value);
  }*/

  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {isEditing === false ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input className="player-name" type="text" value={playerName} onChange={(event)=>{setPlayerName(event.target.value)}} required/>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
    </li>
  );
}
