import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../style/Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${palette.id}/${color.id}`}
    />
  ));

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const handleChange = (val) => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={handleChange}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
