import React from "react";

import "./card.css";

export const Card = props => (
  <div>
    <h1 className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      {props.monster.name}
      {/* <p>{props.monster.email}</p> */}
    </h1>
  </div>
);
