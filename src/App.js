import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import seedColors from './seedColors'
import PaletteList from './PaletteList'
import NewPaletteForm from './NewPaletteForm';
import Palette from "./Palette";
import SingleColorPalette from './SingleColorPalette';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/App.css'

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
  const [allPalettes, setAllPalettes] = useState(savedPalettes || seedColors)
  const location = useLocation()

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(allPalettes))
  }, [allPalettes])

  const savePalette = (newPalette) => {
    setAllPalettes([...allPalettes, newPalette])
  }

  const deletePalette = (paletteId) => {
    setAllPalettes(allPalettes.filter(palette => palette.id !== paletteId))
  }

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={500}>
        <Routes location={location}>
          <Route path='/' element={
            <div className='page'>
              <PaletteList palettes={allPalettes} deletePalette={deletePalette} />
            </div>
          } />
          <Route path='/palette/new' element={
            <div className='page'>
              <NewPaletteForm savePalette={savePalette} palettes={allPalettes} />
            </div>
          } />
          <Route path='/palette/:id' element={
            <div className='page'>
              <Palette palettes={allPalettes} />
            </div>
          } />
          <Route path='/palette/:paletteId/:colorId' element={
            <div className='page'>
              <SingleColorPalette palettes={allPalettes} />
            </div>
          } />
        </Routes>
      </CSSTransition>
    </TransitionGroup >
  );
}

export default App;
