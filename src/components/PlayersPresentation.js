import React from "react";
import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";
export default function PlayersPresentation() {
  const [player,setPlayer] = useState ([])
  return (
    <div className="container">
      {Players.map((player) => (
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
            <p><a className="details" href="#popup1" id="openPopUp"><button onClick={()=>{setPlayer(player)}}>Detail</button></a></p>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} alt=""></img>
            <h2>{player.name}</h2>
            <a className="close" href="#">&times;</a>
            <div className="content">
                {player.info}
            </div>
        </div>
      </div>
    </div>
  );
}