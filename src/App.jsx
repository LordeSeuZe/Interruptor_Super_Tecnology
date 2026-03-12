import { useState } from 'react'
import './style.scss'

import ligado from "./assets/ligado.png";
import desligado from "./assets/desligado.png";

function App() {
  const [ligar, setLigar] = useState(false)

  return (
    <div className={`container ${ligar ? "luz" : "breu"}`}>
      {ligar ? <img className='interruptor' src={ligado} onClick={() => setLigar(!ligar)} alt="Interruptor" /> : <img className='interruptor' src={desligado} onClick={() => setLigar(!ligar)} alt="Interruptor" />}
    </div>
  )
}

export default App
