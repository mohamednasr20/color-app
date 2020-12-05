import React from "react";
import ColorBox from "./ColorBox";

const SingleColorPalette = ({ palette, colorId }) => {
  const gatherShades = (palette, colorToFilterBY) => {
    let shades = [];
    const colors = palette.colors;
    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter((color) => color.id === colorToFilterBY)
      );
    }

    return shades.slice(1);
  };

  let shades = gatherShades(palette, colorId);
  const ColorBoxes = shades.map((shade) => (
    <ColorBox
      key={shade.name}
      background={shade.hex}
      name={shade.name}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{ColorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
