import Palette from "./Palette";
import seedColors from './seedColors'

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
