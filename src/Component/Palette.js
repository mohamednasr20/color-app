import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../style/Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;
