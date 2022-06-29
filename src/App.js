import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import NewPaletteForm from './NewPaletteForm';
import Palette from "./Palette";
import SingleColorPalette from './SingleColorPalette';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
  const [allPalettes, setAllPalettes] = useState(savedPalettes || seedColors)

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(allPalettes))
  }, [allPalettes])

  const savePalette = (newPalette) => {
    setAllPalettes([...allPalettes, newPalette])
  }

  return (
    <div>
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
