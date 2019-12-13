import React from "react";

import "./card.css";

export const Card = props => (
  <div>
    <h1 className="card-container">{props.monster.name}</h1>
  </div>
);
