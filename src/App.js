import Palette from "./Palette";
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Palette {...seedColors[4]} />
      {console.log(generatePalette(seedColors[4]))}
    </div>
  );
}

export default App;
