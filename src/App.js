import Palette from "./Component/Palette";
import SeedColors from "./Component/SeedColors";

function App() {
  return (
    <div className="App">
      <Palette {...SeedColors[1]} />
    </div>
  );
}

export default App;
