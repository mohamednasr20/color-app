import React, { useState, useEffect } from "react";
import PaletteList from "./Component/PaletteList";
import Palette from "./Component/Palette";
import SingleColorPalette from "./Component/SingleColorPalette";
import NewPaletteForm from "./Component/NewPaletteForm";
import { Switch, Route } from "react-router-dom";
import SeedColors from "./Component/SeedColors";
import { generatePalette } from "./colorHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || SeedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };

  const deletePalette = (id) => {
    const newPalettes = palettes.filter((palette) => palette.id !== id);
    setPalettes(newPalettes);
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routeProps) => (
                  <div className="page">
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <div className="page">
                    <PaletteList
                      palettes={palettes}
                      deletePalette={deletePalette}
                      {...routeProps}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/palette/:id"
                render={(routeProps) => (
                  <div className="page">
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
