import Palette from "./Component/Palette";
import SeedColors from "./Component/SeedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(SeedColors[4])} />
    </div>
  );
}

export default App;
