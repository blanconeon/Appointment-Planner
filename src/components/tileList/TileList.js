import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = (props) => {

  

  return (
    <div>
    {props.data.map((contact, index) => {
    const { name, ...description } = contact;
    return <Tile key={index} name={name} description={description} />;
   })}

    </div>
  );
};


/*The key prop must be placed on the outermost element returned by the map function. This helps React track each item in the list for efficient updates. so putting a div in the return warpping Tile is not ideal  */