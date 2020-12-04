import React from "react";
import { Link } from "react-router-dom";
const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>React Palettes</h1>
      {palettes.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default PaletteList;
