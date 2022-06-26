import Palette from "./Palette";
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
