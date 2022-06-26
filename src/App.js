import { Routes, Route } from 'react-router-dom'
import Palette from "./Palette";

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Routes>
        <Route path='/' element={<h1>PALETTE LIST GOES HERE</h1>} />
        <Route path='/palette/:id' element={<Palette />} />
      </Routes>
    </div>
  );
}

export default App;
