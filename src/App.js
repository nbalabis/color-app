import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import NewPaletteForm from './NewPaletteForm';
import Palette from "./Palette";
import SingleColorPalette from './SingleColorPalette';

function App() {
  const [allPalettes, setAllPalettes] = useState(seedColors)

  const savePalette = (newPalette) => {
    setAllPalettes([...allPalettes, newPalette])
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <Routes>
        <Route path='/' element={<PaletteList palettes={allPalettes} />} />
        <Route path='/palette/new' element={<NewPaletteForm savePalette={savePalette} palettes={allPalettes} />} />
        <Route path='/palette/:id' element={<Palette palettes={allPalettes} />} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPalette palettes={allPalettes} />} />
      </Routes>
    </div>
  );
}

export default App;
