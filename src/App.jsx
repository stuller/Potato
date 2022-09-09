import './App.css'
import hobbitHouseUrl from './assets/hobbitHouse.png'
import potatoPlantUrl from './assets/potatoPlant.png'
import Start from './components/Start'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Game from './routes/game'

function App() {

  return (
    <div className="App">
      <h1>Potato</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
      <div>
      </div>
      <img id="hobbitHouse" src={hobbitHouseUrl}/>
      <img id="potatoPlant" src={potatoPlantUrl}/>
      <img id="potatoPlant2" src={potatoPlantUrl}/>
      <img id="potatoPlant3" src={potatoPlantUrl}/>
      <img id="potatoPlant4" src={potatoPlantUrl}/>

    </div>
  )
}

export default App
