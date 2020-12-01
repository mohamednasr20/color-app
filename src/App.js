import Palette from "./Component/Palette";
import SeedColors from "./Component/SeedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(SeedColors[4]));
  return (
    <div className="App">
      <Palette {...SeedColors[1]} />
    </div>
  );
}

export default App;
