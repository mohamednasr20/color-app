import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "../Css/Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  const onLevelChange = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={onLevelChange}
      />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;
