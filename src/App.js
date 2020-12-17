import React, { useState, useEffect } from "react";
import PaletteList from "./Component/PaletteList";
import Palette from "./Component/Palette";
import SingleColorPalette from "./Component/SingleColorPalette";
import NewPaletteForm from "./Component/NewPaletteForm";
import { Switch, Route } from "react-router-dom";
import SeedColors from "./Component/SeedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || SeedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm
            savePalette={savePalette}
            palettes={palettes}
            {...routeProps}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={palettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
};

export default App;
