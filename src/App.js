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
        <Route path='/palette/:paletteId/:colorId' element={<h1>single color page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
