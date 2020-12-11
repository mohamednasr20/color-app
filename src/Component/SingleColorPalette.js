import React, { useState } from "react";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from "./ColorBox";
import styles from "../styles/PaletteStyles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const SingleColorPalette = ({ palette, colorId, classes }) => {
  const [format, setFormat] = useState("hex");
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

  const handleChange = (val) => {
    setFormat(val);
  };
  let shades = gatherShades(palette, colorId);
  const ColorBoxes = shades.map((shade) => (
    <ColorBox
      key={shade.name}
      background={shade[format]}
      name={shade.name}
      showingSinglePalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar changeFormat={handleChange} showingAllColor={false} />
      <div className={classes.PaletteColors}>
        {ColorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}`}>GO Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
