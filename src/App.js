import { Routes, Route } from 'react-router-dom'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import NewPaletteForm from './NewPaletteForm';
import Palette from "./Palette";
import SingleColorPalette from './SingleColorPalette';

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Routes>
        <Route path='/' element={<PaletteList palettes={seedColors} />} />
        <Route path='/palette/new' element={<NewPaletteForm />} />
        <Route path='/palette/:id' element={<Palette />} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette />} />
      </Routes>
    </div>
  );
}

export default App;
