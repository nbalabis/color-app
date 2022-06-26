import { Routes, Route } from 'react-router-dom'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import Palette from "./Palette";

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} />
        <Route path='/palette/:id' element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
