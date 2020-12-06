import React from "react";
import PaletteList from "./Component/PaletteList";
import Palette from "./Component/Palette";
import SingleColorPalette from "./Component/SingleColorPalette";
import { Switch, Route } from "react-router-dom";
import SeedColors from "./Component/SeedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  const findPalette = (id) => {
    return SeedColors.find((palette) => {
      return palette.id === id;
    });
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={SeedColors} {...routeProps} />
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
