import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import seedColors from './seedColors'
import Page from './Page'
import PaletteList from './PaletteList'
import NewPaletteForm from './NewPaletteForm';
import Palette from "./Palette";
import SingleColorPalette from './SingleColorPalette';

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
      <CSSTransition key={location.key} classNames='page' timeout={500}>
        <Routes location={location}>
          <Route path='/' element={
            <Page>
              <PaletteList palettes={allPalettes} deletePalette={deletePalette} />
            </Page>
          } />
          <Route path='/palette/new' element={
            <Page>
              <NewPaletteForm savePalette={savePalette} palettes={allPalettes} />
            </Page>
          } />
          <Route path='/palette/:id' element={
            <Page>
              <Palette palettes={allPalettes} />
            </Page>
          } />
          <Route path='/palette/:paletteId/:colorId' element={
            <Page>
              <SingleColorPalette palettes={allPalettes} />
            </Page>
          } />
          <Route path='*' element={
            <Page>
              <PaletteList palettes={allPalettes} deletePalette={deletePalette} />
            </Page>
          } />
        </Routes>
      </CSSTransition>
    </TransitionGroup >
  );
}

export default App;
