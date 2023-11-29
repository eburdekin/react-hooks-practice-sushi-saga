import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

const num_sushi = 4;

function SushiContainer({ sushi, eatSushi }) {

  //state to describe where on the belt we are
  const [sushiIndex, setSushiIndex] = useState(0)

  function scrollBelt() {
    setSushiIndex(sushiIndex + num_sushi)
  }

  return (
    <div className="belt">
      {sushi
        .slice(sushiIndex, num_sushi + sushiIndex)
        .map(roll => <Sushi roll={roll} key={roll.id} handleClick={eatSushi}/>)}
      <MoreButton handleClick={scrollBelt} />
    </div>
  );
}

export default SushiContainer;
